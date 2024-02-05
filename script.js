function askquestion() {
    var p=prompt('How many hours passes in 60 minutes?');
    if (p == '1') {
        document.getElementById('ask-question').innerHTML='wow '+
        p+' is correct u ar so smart';
    } else {
        document.getElementById('ask-question').innerHTML='no '+
        p+' is wrong! how did u get that wrong?';
    }
}
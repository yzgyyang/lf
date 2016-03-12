function getTable(){
    var table = ('SELECT * FROM lostTable');
    return table;
                 
function getFound(){
    
}
function getLost(){
}
function addLost(){
    db.Execute('INSERT TOP(N) INTO lostTable VALUES(@currentUser,@title,@details)');
    return getTable();
}
function addFound(){
}
function removeLost(){
}
function removeFound(){
}
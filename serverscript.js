function getTable(){
    var table = db.Execute('SELECT * FROM lostTable');
    return table;
}                 
function getFound(){
    
}
function getLost(){
}
function addLost(){
    db.Execute('INSERT TOP(1) INTO lostTable VALUES(@currentUser,@title,@details)');
    return getTable();
}
function addFound(){
}
function removeLost(){
}
function removeFound(){
}
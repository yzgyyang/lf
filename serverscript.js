function getFound(){
    
}
function getLost(){
}
function addLost(){
    db.execute('INSERT INTO lostTable VALUES(@currentUser,@title,@details)');
}
function addFound(){
}
function removeLost(){
}
function removeFound(){
}
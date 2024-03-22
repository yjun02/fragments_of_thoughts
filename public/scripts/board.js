var database = firebase.database();
const texts = document.querySelector(".board");

function write(){
    database.ref('test/').set({"text": texts.value});
}
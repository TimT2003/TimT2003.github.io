function raschitat() {
colvo  = document.getElementById('colvo').value;
stoimost= document.getElementById('stoimost').value;
if(colvo == ""){
alert("Вы не указали кол-во");
} else if(stoimost == ""){
alert("Вы не указали стоимость");
} else {

ploschad = parseFloat (colvo)* parseFloat (stoimost);
document.getElementById('ploschad').innerHTML = "Цена равна: "+ ploschad ;

}
}

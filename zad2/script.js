function raschitat() {
colvo  = document.getElementById('colvo').value;
stoimost= document.getElementById('stoimost').value;
if(colvo == ""){
alert("Вы не указали ширину");
} else if(stoimost == ""){
alert("Вы не указали длину");
} else {

ploschad = parseFloat (colvo)* parseFloat (stoimost);
document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";

}
}

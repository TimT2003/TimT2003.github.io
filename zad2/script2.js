let item = document.getElementById('item');
var colorcap = document.getElementById('colorcap');
var typefigure = document.getElementById('typefigure');
item.addEventListener("change", function() {
  let itemValue = item.value;
  switch(itemValue) {
    case "tshirt":
      colorcap.style.display='none';
        typefigure.style.display='none';
      break
    case "cap":
      colorcap.style.display='block';
          typefigure.style.display='none';
      break
    case "figure":
      colorcap.style.display='none';
          typefigure.style.display='block';
      break
  }
});

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

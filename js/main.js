var numero=0;
$(document).ready(function(){
	$(".small-box").click(play);
	$("#nuevo").click(newPlay);
})
function juego(valor){
	var box1= $("#box1").text()
	var box2= $("#box2").text()
	var box3= $("#box3").text()
	var box4= $("#box4").text()
	var box5= $("#box5").text()
	var box6= $("#box6").text()
	var box7= $("#box7").text()
	var box8= $("#box8").text()
	var box9= $("#box9").text()
	var gamer=true;
	if (box1==box2 && box1==box3 && box1 == valor) {
		alert("Ganaste!!");
	} else if (box1==box5 && box1==box9 && box1==valor) {
		alert("Ganaste!!");
	} else if (box1==box4 && box1==box7 && box1==valor) {
		alert("Ganaste!!");
	} else if (box2==box5 && box2==box8 && box2==valor) {
		alert("Ganaste!!");
	} else if (box3==box6 && box3==box9 && box3==valor) {
		alert("Ganaste!!");
	} else if (box3==box5 && box3==box7 && box3==valor) {
		alert("Ganaste!!");
	} else if (box4==box5 && box4==box6 && box4==valor) {
		alert("Ganaste!!");
	} else if (box7==box8 && box7==box9 && box7==valor) {
		alert("Ganaste!!");
	} else{
		gamer = false;
	}
	return gamer;
}
function newPlay(){
	$("#box1").text("+");
	$("#box2").text("+");
	$("#box3").text("+");
	$("#box4").text("+");
	$("#box5").text("+");
	$("#box6").text("+");
	$("#box7").text("+");
	$("#box8").text("+");
	$("#box9").text("+");
$(".small-box").off("click");
$(".small-box").click(play);
numero=0;
}

function play (){
	var resultado;
	numero+=1;
	if(numero%2==0){
		$(this).text("X");
		resultado=juego("X");			
	} else {
		$(this).text("O");
		resultado=juego("O");
	}
	$(this).off("click");
	if (numero==9 && !resultado){
		alert("PERDISTE");
	}
}
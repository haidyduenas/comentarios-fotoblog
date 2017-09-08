function guardarDatos(){
	localStorage.nombre = document.getElementById("name").value;
	localStorage.password= document.getElementById("coment").value;
}

function recuperarDatos(){
	if((localStorage.nombre != undefined) && (localStorage.password != undefined)){
		document.getElementById("cont-comentarios").innerHTML = "  Nombre :" + localStorage.nombre + "<br/> Comentario:" +localStorage.password;
	}
	else{
		document.getElementById("cont.comentarios").innerHTML = "No has introducido tu password";
	}
}
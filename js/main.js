document.getElementById("save").addEventListener("click",coment);
document.getElementById("get").addEventListener("click",limpiar);

function saveData() {
    var name  = document.getElementById('name').value;
    var coment  = document.getElementById('coment').value;
    localStorage.setItem(name,coment);

}

function recoverData() {
	/*Para que mis comentarios o se repetian*/
    $('#cont-comentarios').empty();
    for(var name in localStorage) {
        var coment = localStorage.getItem(name);
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        	div1.setAttribute('id', 'div1');
        	div1.setAttribute('class', ' panel-default');
        var div1 = document.createElement('div');
        	div1.setAttribute('id', 'div2');
        	div1.setAttribute('class','panel-body');

        var nombre = document.createElement('h1');
        var mostrarNombre = document.createTextNode(name);
        	nombre.appendChild(mostrarNombre);

        var comentario  = document.createElement('h4');
        var mostarComentario = document.createTextNode(coment);
        	comentario.appendChild(mostarComentario);

        div2.appendChild(nombre);
        div2.appendChild(comentario);
        div1.appendChild(div2);
        document.getElementById('cont-comentarios').appendChild(div1);
    }
}


function limpiar() {
     $('#cont-comentarios').empty();
    localStorage.clear();
}

function coment()  {
    if (typeof(Storage) !== "undefined") { /*Cómo detectar si el navegador admite el almacenamiento local HTML5*/
        saveData();
        recoverData();
        document.getElementById("name").value = "";
        document.getElementById("coment").value = "";
    } else {
        document.getElementById("cont-comentarios").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

}
recoverData();
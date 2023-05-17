function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");// NOMBRE INGRESADO DE LA PELICULA
    filter = input.value.toUpperCase();//CONVERTIR EN MAYUSCULA
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; //BUSCAR COLUMNA O NOMBRE DE LA PELICULA
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { //BUSCAR CON INDEXOF
    tr[i].style.display = ""; //MOSTRAR SI ES VERDADERO
    } else {
    tr[i].style.display = "none"; //OCULTAR SI ES FALSO
    }
    }
    }
    }
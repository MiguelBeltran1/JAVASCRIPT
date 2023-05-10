//FUNCTION PREFER : TURNOS PREFERENCIALES
function prefer(){
    let num=1;
    let res=true;
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DEL USUARIO...");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
        }else{
            alert("ERROR EN TURNO...");
            break;
        }
    }
}
//FUNCTION USER : TURNOS GENERALES
function user(){
    let num=1;
    let res=true;
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DEL USUARIO...");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;
        }else{
            alert("ERROR EN TURNO...");
            break;
        }
    }
}
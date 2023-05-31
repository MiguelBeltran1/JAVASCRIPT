let smlv=parseFloat(prompt("INGRESE SALARIO MINIMO LV 2023"));//1160000
let subtte=parseFloat(prompt("INGRESE SUBSIDIO TRANSPORTE LV 2023"));//140606
function liquidar(){
    //sueldo basico
    let n1=document.getElementById("salario").value;//bajar info del form al vs code
    let n2=document.getElementById("dias").value;//bajar info del form al vs code
    sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=sueldo.toFixed(0);//subir del vs al form
    //subsidio de transporte
    if (n1>=2*smlv){
        subsidiot=0;//no se otorga subsidio
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30*parseInt(n2)
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    //recargo nocturno
    var nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0)
    //total devengado
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
    //
    let totaldevo=document.getElementById("totaldev").value;
    //liquidacion de deducciones
    //eps y pension
    let eps00=(totaldevo-subsidiot)*0.04;
    let pens00=(totaldevo-subsidiot)*0.04;
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);
    //fondo solidario
    let fondo=0;
    if (n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //prestamo
    let presta=document.getElementById("prestam").value;
    //total deducciones
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
    //
    let totalddc=document.getElementById("totaldedu").value;
    //calcular neto pagado
    let vneto=totaldevo-totalddc;
    document.getElementById("neto").value=vneto.toFixed(0);
}

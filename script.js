function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1,n2,n3,n4) {
            if(n2=n4){ 
               return (parseInt(n1)+parseInt(n3));
               return (parseInt(n2));
            } else (n2!=n4)
              return (parseInt(n1)*parseInt(n4) + parseInt(n2)*parseInt(n3));
              return (parseInt(n2)*parseInt(n4));
        },

        restar: function restarNumeros(n1, n2,n3,n4) {
            if(n2=n4){  
               return (parseInt(n1)-parseInt(n3));
               return (parseInt(n2));
            } else (n2!=n4)
                return (parseInt(n1)*parseInt(n4)-parseInt(n2)*parseInt(n3));
                return (parseInt(n2)*parseInt(n4));
            
        },
        
        multiplicar: function multiplicarNumeros(n1, n2,n3,n4) {
            return (parseInt(n1)*parseInt(n3));
            return (parseInt(n2)*parseInt(n4));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1)*parseInt(n4));
            return (parseInt(n2)*parseInt(n3));
        }
    };
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = document.getElementById("num3").value;
    var n4 = document.getElementById("num4").value;
    
   switch(op) {
        case 'Sumar':
            var resultado = ops.sumar(num1, num2,num3,num4);
            alert (resultado);
            break;
        case 'Restar':
            var resultado = ops.restar(num1, num2,num3,num4);
            alert (resultado);
            break;
        case 'Multiplicar':
            var resultado = ops.multiplicar(num1, num2,num3,num4);
            alert(resultado);
            break;
        case 'Dividir':
            var resultado = ops.dividir(num1, num2,num3,num4);
            alert(resultado);
            break;

    }
}
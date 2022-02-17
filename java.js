var input = document.querySelector('.input-valor'),
btn = document.querySelectorAll('.key li')
operador = document.querySelectorAll(".operador")

for(var i = 0; i < btn.length; i++){
    document.onkeypress = function(event){
        var key = event.charCode;
        // console.log(key)
        for(var e = 0; e <= 10; e++){
            if(key === (48+e)){
                resultado.innerHTML += e;
            }
        }
        switch(key){
            case 42:
                resultado.innerHTML += "*";  

            break;

            case 43:
                resultado.innerHTML += "+";

            break;

            case 45:
                resultado.innerHTML += "-";
            
            break;

            case 46:
                resultado.innerHTML += ".";

            break;

            case 47:
                resultado.innerHTML += "/";

            break;

            case 61:
                var equacao = resultado.innerHTML;
                if(equacao) {
                    try {
                        resultado.innerHTML = eval(equacao);
                    } catch (e) {
                        alert('Deu um erro');
                    }
                }
            break;
            case 67: // C maiusculo
                resultado.innerHTML = ""
            break;
            case 90: // c minusculo
            resultado.innerHTML = ""
            break;
        }
    };
    btn[i].addEventListener('click', function(){
     var inputVal = input.innerHTML,
        btnVal = this.innerHTML;
        switch(btnVal){
            case "c":
                input.innerHTML = "";
            break;
            case "=":
                var equacao = inputVal;
                if(equacao) {
                    try {
                        input.innerHTML = eval(equacao);
                    } catch (e) {
                        alert('Deu um erro');
                    }
                }
                break;
                default:
                    input.innerHTML += btnVal;
                break;
        }
    });
}

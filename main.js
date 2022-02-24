'use strict'

window.addEventListener("load",function(){
    var text = document.getElementById("text");
    //Get the button:
    var mybutton = document.querySelector("#myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };
    function scrollFunction() {
        
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    function validate() {
        return false;

        paridad();
        auno();
        ande();
    }

    function ande() {
        var num1 = document.getElementById("nbin").value;
        var num2 = document.getElementById("nbin2").value;
        var comprobar = true;
        var resultado = "";

        if (num1.length == 0) {
            text.innerHTML = "Rellena la casilla 1"
            text.style.color = "red";
            comprobar = false;
            return false;
        } else {
            comprobar = true;
        }

        if (num2.length == 0) {
            text.innerHTML = "Rellena la casilla 2"
            text.style.color = "red";
            comprobar = false;
            return false;
        } else {
            comprobar = true;
        }


        for (var i = 0; i < num1.length; i++) {
            if (num1[i] == "1" || num1[i] == "0") {
                comprobar = true;
            } else {
                text.innerHTML = "En la casilla 1 el numero no es binario";
                text.style.color = "red";
                comprobar = false;
                return false;
            }
        }

        for (var i = 0; i < num2.length; i++) {
            if (num2[i] == "1" || num2[i] == "0") {
                comprobar = true;
            } else {
                text.innerHTML = "En la casilla 2 el numero no es binario";
                text.style.color = "red";
                comprobar = false;
                return false;
            }
        }



        for (var i = 0; i < num1.length; i++) {

            resultado = resultado + (num1.charAt(i) * num2.charAt(i));
        }
        text.innerHTML = "El resultado del AND es: " + resultado;
        text.style.color = "green";
        return false;

    }

    function auno() {
        var num1 = document.getElementById("nbin").value;
        var contador = 0;
        var comprobar = true;
        var complemento = "";

        if (num1.length == 0) {
            text.innerHTML = "Rellena la casilla 1"
            text.style.color = "red";
            comprobar = false;
        } else {
            comprobar = true;
        }

        for (var i = 0; i < num1.length; i++) {
            if (num1[i] == "1" || num1[i] == "0") {
                comprobar = true;
                text.innerHTML = "";
            } else {
                text.innerHTML = "El numero no es binario";
                text.style.color = "red";
                comprobar = false;
            }
        }

        for (var i = 0; i < num1.length; i++) {
            if (num1[i] == "1") {
                complemento = complemento + "0"
                contador++;
            } else {
                complemento = complemento + "1"
                contador++;
            }
        }

        if (comprobar == true && complemento.length == num1.length) {
            text.innerHTML = "El resultado del complemento A1 es: " + complemento;
            text.style.color = "green";
        }
        return false;

    }


    function paridad() {
        var num1 = document.getElementById("nbin").value;
        var contador = 0;
        var comprobar = true;


        if (num1.length == 0) {
            text.innerHTML = "Rellena la casilla 1"
            text.style.color = "red";
            comprobar = false;
        } else {
            comprobar = true;
        }

        for (var i = 0; i < num1.length; i++) {
            if (num1[i] == "1" || num1[i] == "0") {
                if (num1[i] == 1) {
                    contador++;
                }
                comprobar = true;
            } else {
                text.innerHTML = "El numero no es binario"
                text.style.color = "red";
                comprobar = false;
            }
        }

        if (contador > 0 && contador % 2 == 0) {
            text.innerHTML = "El bit de paridad es 0";
            text.style.color = "green";

        } else if (comprobar == true && contador > 0 && contador % 2 == 1) {
            text.innerHTML = "El bit de paridad es 1";
            text.style.color = "green";
        }


        return false;
}
})

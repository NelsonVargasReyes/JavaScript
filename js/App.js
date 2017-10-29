function calculadora(){
	var operandoa;
	var operandob;
	var operacion;

	var resultado = document.getElementById("display")
	var cero = document.getElementById("0")
	var uno = document.getElementById("1")
	var dos = document.getElementById("2")
	var tres = document.getElementById("3")
	var cuatro = document.getElementById("4")
	var cinco = document.getElementById("5")
	var seis = document.getElementById("6")
	var siete = document.getElementById("7")
	var ocho = document.getElementById("8")
	var nueve = document.getElementById("9")
	var punto = document.getElementById("punto")
	var on = document.getElementById("on")
	var sign = document.getElementById("sign")
	var raiz = document.getElementById("raiz")
	var div = document.getElementById("dividido")
	var por = document.getElementById("por")
	var menos = document.getElementById("menos")
	var mas = document.getElementById("mas")
	var igual = document.getElementById("igual")

	//Reduce el tamano de la tecla al hacer click con el mouse
	cero.addEventListener("mousedown", function(){
		cero.setAttribute("style","transform:scale(0.95,0.95)")
	});
	uno.addEventListener("mousedown",function(){
		uno.setAttribute("style","transform:scale(0.95,0.95)")
	});
	dos.addEventListener("mousedown",function(){
		dos.setAttribute("style","transform:scale(0.95,0.95)")
	});
	tres.addEventListener("mousedown",function(){
		tres.setAttribute("style","transform:scale(0.95,0.95)")
	});
	cuatro.addEventListener("mousedown",function(){
		cuatro.setAttribute("style","transform:scale(0.95,0.95)")
	});
	cinco.addEventListener("mousedown",function(){
		cinco.setAttribute("style","transform:scale(0.95,0.95)")
	});
	seis.addEventListener("mousedown",function(){
		seis.setAttribute("style","transform:scale(0.95,0.95)")
	});
	siete.addEventListener("mousedown",function(){
		siete.setAttribute("style","transform:scale(0.95,0.95)")
	});
	ocho.addEventListener("mousedown",function(){
		ocho.setAttribute("style","transform:scale(0.95,0.95)")
	});
	nueve.addEventListener("mousedown",function(){
		nueve.setAttribute("style","transform:scale(0.95,0.95)")
	});
	punto.addEventListener("mousedown", function(){
		punto.setAttribute("style","transform:scale(0.95,0.95)")
	});
	on.addEventListener("mousedown", function(){
		on.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	sign.addEventListener("mousedown", function(){
		sign.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	raiz.addEventListener("mousedown",function(){
		raiz.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	mas.addEventListener("mousedown",function(){
		mas.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	menos.addEventListener("mousedown",function(){
		menos.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	div.addEventListener("mousedown",function(){
		div.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	por.addEventListener("mousedown",function(){
		por.setAttribute("style", "transform:scale(0.95,0.95)")
	});
	igual.addEventListener("mousedown",function(){
		igual.setAttribute("style", "transform:scale(0.95,0.95)")
	});

	//Restablece el tamano de la tecla al dejar de presionar el mouse
	cero.addEventListener("mouseup", function(){
		cero.setAttribute("style","transform:scale(1,1)")
	});
	uno.addEventListener("mouseup",function(){
		uno.setAttribute("style","transform:scale(1,1)")
	});
	dos.addEventListener("mouseup",function(){
		dos.setAttribute("style","transform:scale(1,1)")
	});
	tres.addEventListener("mouseup",function(){
		tres.setAttribute("style","transform:scale(1,1)")
	});
	cuatro.addEventListener("mouseup",function(){
		cuatro.setAttribute("style","transform:scale(1,1)")
	});
	cinco.addEventListener("mouseup",function(){
		cinco.setAttribute("style","transform:scale(1,1)")
	});
	seis.addEventListener("mouseup",function(){
		seis.setAttribute("style","transform:scale(1,1)")
	});
	siete.addEventListener("mouseup",function(){
		siete.setAttribute("style","transform:scale(1,1)")
	});
	ocho.addEventListener("mouseup",function(){
		ocho.setAttribute("style","transform:scale(1,1)")
	});
	nueve.addEventListener("mouseup",function(){
		nueve.setAttribute("style","transform:scale(1,1)")
	});
	punto.addEventListener("mouseup", function(){
		punto.setAttribute("style","transform:scale(1,1)")
	});
	on.addEventListener("mouseup", function(){
		on.setAttribute("style", "transform:scale(1,1)")
	});
	sign.addEventListener("mouseup", function(){
		sign.setAttribute("style", "transform:scale(1,1)")
	});
	raiz.addEventListener("mouseup",function(){
		raiz.setAttribute("style", "transform:scale(1,1)")
	});
	mas.addEventListener("mouseup",function(){
		mas.setAttribute("style", "transform:scale(1,1)")
	});
	menos.addEventListener("mouseup",function(){
		menos.setAttribute("style", "transform:scale(1,1)")
	});
	div.addEventListener("mouseup",function(){
		div.setAttribute("style", "transform:scale(1,1)")
	});
	por.addEventListener("mouseup",function(){
		por.setAttribute("style", "transform:scale(1,1)")
	});
	igual.addEventListener("mouseup",function(){
		igual.setAttribute("style", "transform:scale(1,1)")
	});

	//Eventos display
	cero.onclick = 	function(e){
		numero("0");
	}
	uno.onclick = function(e){
		numero("1");
	}
	dos.onclick = function(e){
		numero("2");
	}
	tres.onclick = function(e){
		numero("3");
	}
	cuatro.onclick = function(e){
		numero("4");
	}
	cinco.onclick = function(e){
		numero("5");
	}
	seis.onclick = function(e){
		numero("6");
	}
	siete.onclick = function(e){
		numero("7");
	}
	ocho.onclick = function(e){
		numero("8");
	}
	nueve.onclick = function(e){
		numero("9");
	}
	punto.onclick = function(e){
		numero(".");
	}
	sign.onclick = function(e){
		signo("-");
	}
	on.onclick = function(e){resetear();}
	mas.onclick = function(e){operandoa = resultado.textContent; operacion = "+"; limpiar(0);}
	menos.onclick = function(e){operandoa = resultado.textContent; operacion = "-"; limpiar(0);}
	por.onclick = function(e){operandoa = resultado.textContent; operacion = "*"; limpiar(0);}
	div.onclick = function(e){operandoa = resultado.textContent; operacion = "/"; limpiar(0);}
	igual.onclick = function(e){operandob = resultado.textContent; resolver();}

	//Funciones

	function numero(n){
		var num = resultado.textContent
		var limite = 9

		if (num.indexOf(".") != -1){
			if (n == "."){
				n =""
			}
			limite = 9
		}
		 if (num =="0" && n != "."){
			   num = ""
		   }

		if (resultado.textContent.length <9){
			resultado.textContent =num + n;
		}
	}

	function signo(){
		var cadena = resultado.textContent
		var i = cadena.indexOf("-")
		if(i == -1){
			resultado.textContent = "-" + cadena
		}
	}

	function limpiar(){
	  resultado.textContent = "";
	}

	function resetear(){
	  resultado.textContent = "0";
	  operandoa = "";
	  operandob = "";
	  operacion = "";
	}

	function resolver(){
	  var res = 0;
	  switch(operacion){
		case "+":
		  res = parseFloat(operandoa) + parseFloat(operandob);
		  break;
		case "-":
		  res = parseFloat(operandoa) - parseFloat(operandob);
		  break;
		case "*":
		  res = parseFloat(operandoa) * parseFloat(operandob);
		  break;
		case "/":
		  res = parseFloat(operandoa) / parseFloat(operandob);
		  break;
	  }
	  resetear();
	  resultado.textContent = res;
	}
}
calculadora();

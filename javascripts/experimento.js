/*
---
 1.- con el resultado presente (funcion continue):
	a.- si presiono un numero, guardar resultado, pero no borrarlo, borrar input 1 2 y 3
	b.- si presiono una operacion, ans, operacion y finalmente pedir input3
 2.- agregar una tabla al costado para usarla de memoria para la calculadora, 5 espacios
		2018-10-28 -- se agrego la memoria
 	a.- ser capaz de utilizar esos resultados como input1 al hacerle clic
 3.- agregar mas funciones según calculadora cientifica
 		2018-10-28 -- se agrego funcion logaritmica
 4.- create easter eggs for shit and giggles
 5.- agregar capacidad de ejecutar algebra simple (detectar valor de x) [extra points]
 ---
*/


const 	buttonArray		=document.querySelectorAll(".key"),
		operator		=document.querySelectorAll(".op"),
		input1			=document.querySelector(".firoper"),
		input2			=document.querySelector(".secoper"),
		input3			=document.querySelector(".thioper"),
		result			=document.querySelector(".result"),
		memory 			=document.querySelectorAll(".memory li"),
		memoryArray 	=[];
function resultFunction(){
	const 	x = input1.innerHTML,
			y = input2.innerHTML,
			z = input3.innerHTML;
	let equation;
	//armar la ecuacion
	switch(y){
		case "^":
			equation = x + "**" + z;
			break;
		case "sqroot":
		case "rootn":
			equation = x + " ** ( 1/" + z + " )";
			break;
		case "log10":
		case "xlog":
			equation = "math.log("+ x + ") / Math.log("+ z +")";
			break;
		case "ln":
			equation = "math.log(" + x + ")";
			break;
		case "!":
			equation = "math.factorial(" + x + ")"
			break;
		case "|x|":
			equation = "math.abs(" + x + ")";
			break;
		case "sin":
			equation = "Math.sin(" + x + ")";
			break;
		case "cos":
			equation = "Math.cos("+ x + ")";
			break;
		case "tan":
			equation = "Math.sin("+ x +")/Math.cos(" + x + ")";
			break;
		default:
			equation = x + y + z;
			break;
	}
	if ( x == "" || y == "" || z ==  ""){
				alert("you're missing something");
			return null;
		} else {
			return equation
		}
	};
function factorialCalculator(){
	let value = input1.innerHTML;
	console.log(value)
	for(let primer = 1 ; primer < value ; primer ++){
		value = value * primer ;
	};
	return equation = value;
}
//------------------------------
// codigo para que funcione con el teclado
//------------------------------

document.onkeypress = function(event){
	const key = event.charCode;
	let inputNumbers = input2.innerHTML.trim() === "" ? input1 : input3;
	if (key > 47 && key < 58){
		inputNumbers.innerHTML += (key-48)
		return
	};
	console.log(key);
	switch(key){
		case 42:
			input2.innerHTML = "*";
			break;
		case 43:
			input2.innerHTML = "+";
			break;
		case 45:
			input2.innerHTML = "-";
			break;
		case 46:
			inputNumbers.innerHTML += ".";
			break;
		case 47:
			input2.innerHTML = "/";
			break;
		case 113:
			input2.innerHTML = "sqroot";
			input3.innerHTML = "2" ;
			break;
		case 119:
			input2.innerHTML = "!";
			input3.innerHTML = "Return the factorial of X"
			break;
		case 101:
			input2.innerHTML = "ln";
			break;
		case 114:
			input2.innerHTML = "xlog";
			break;
		case 116:
			input2.innerHTML = "log10";
			input3.innerHTML = "10";
			break;
		case 97:
			input2.innerHTML = "^";
			break;
		case 115:
			input2.innerHTML =	"^";
			input3.innerHTML = "2";
			break;
		case 100:
			input2.innerHTML = "^";
			input3.innerHTML = "-1";
			break;
		case 102:
			input2.innerHTML = "xlog";
			break;
		case 103:
			input2.innerHTML = "sqroot";
			input3.innerHTML = "2";
			break;
		case 122:
			let invMul = input1.innerHTML
			input1.innerHTML = invMul * -1;
			break;
		case 120:
			input2.innerHTML = "|x|"
			input3.innerHTML = "Return positive value of X";
			break;
		case 99:
			input2.innerHTML = "sin(x)";
			input3.innerHTML = "Return the sin value of X";
			break;
		case 118:
			input2.innerHTML = "cos(x)";
			input3.innerHTML = "Return the cos value of X";
			break;
		case 98:
			input2.innerHTML = "tan(x)";
			input3.innerHTML = "return the tan value of X"
		case 13:
		case 61:
			let equation = resultFunction();
			  if (equation) {
				  try {		
					result.innerHTML = "" + eval(equation);
					let maxlength = 4;
					memoryArray.length > maxlength ? memoryArray.pop() && memoryArray.unshift( eval(equation) ) : memoryArray.unshift( eval(equation) );
					} catch (e) {
						console.log(equation);
						alert("ERROR");
					}
				};		    	
			break;
	    case 60:
			input1.innerHTML = null;
			input2.innerHTML = null;
			input3.innerHTML = null;
			result.innerHTML = null;
			break;
		case 124:
			// borrar
			let erase = inputNumbers.innerHTML;
			erase.isString();
			erase.pop();
			console.log(erase)
			break;
		case 32:
			input1.innerHTML =	result.innerHTML;
			input2.innerHTML = "";
			input3.innerHTML = "";
			result.innerHTML = "";
			break;
		default:					
			break;
	}
	document.getElementById('mem1').innerHTML= memoryArray[0];
	memoryArray[1] == null ? document.getElementById('mem2').innerHTML="" : document.getElementById('mem2').innerHTML= memoryArray[1];
	memoryArray[2] == null ? document.getElementById('mem3').innerHTML="" : document.getElementById('mem3').innerHTML= memoryArray[2];
	memoryArray[3] == null ? document.getElementById('mem4').innerHTML="" : document.getElementById('mem4').innerHTML= memoryArray[3];
	memoryArray[4] == null ? document.getElementById('mem5').innerHTML="" : document.getElementById('mem5').innerHTML= memoryArray[4];
}

//------------------------------
// codigo para que funcione con las teclas
//------------------------------

for(let idArray = 0; idArray < operator.length; idArray++){
	//la cosa para que funcione con clics
	operator[idArray].addEventListener('click', function(){
		const 	operatorValue 	= this.id ; 
				//añade casos especificos
		switch(operatorValue){
			case "+":
				input2.innerHTML = "+";
				break;
			case "-":
				input2.innerHTML = "-"
				break;
			case "/":
				input2.innerHTML = "/";
				break;
			case "*":
				input2.innerHTML = "*";
				break;
			case "root":
				input2.innerHTML = "sqroot";
				input3.innerHTML = "2" ;
				break;
			case "rootx":
				input2.innerHTML = "rootn";
				break;
			case "ans":
				input1.innerHTML =	result.innerHTML;
				input2.innerHTML = "";
				input3.innerHTML = "";
				result.innerHTML = "";
				break;
			case "clear":
		    	input1.innerHTML = "";
		        input2.innerHTML = "";
		        input3.innerHTML = "";
		        result.innerHTML = "";
        		break;
        	case "potency":
        			input2.innerHTML = "^";
        			break;
			case "square":
					input2.innerHTML = "^";
					input3.innerHTML = "2";
					break;
			case "logX":
				input2.innerHTML =	"xlog";
				break;
			case "log10":
				input2.innerHTML = "log10";
				input3.innerHTML = 10;
				break;
			case "equals":
				//let equation = resultFunction(); ;
				//if (equation) {
				//	try {		
				//		result.innerHTML = "" + eval(equation);
				//		let maxlength = 4;
				//		memoryArray.length > maxlength ? memoryArray.pop() && memoryArray.unshift( eval(equation) ) : memoryArray.unshift( eval(equation) );
				//		} 
				//	catch (e) {
				//	   alert("ERROR");
				//		};
				//};
				break;
			default:
				break;
		};
	document.getElementById('mem1').innerHTML= memoryArray[0];
	memoryArray[1] == null ? document.getElementById('mem2').innerHTML="" : document.getElementById('mem2').innerHTML= memoryArray[1];
	memoryArray[2] == null ? document.getElementById('mem3').innerHTML="" : document.getElementById('mem3').innerHTML= memoryArray[2];
	memoryArray[3] == null ? document.getElementById('mem4').innerHTML="" : document.getElementById('mem4').innerHTML= memoryArray[3];
	memoryArray[4] == null ? document.getElementById('mem5').innerHTML="" : document.getElementById('mem5').innerHTML= memoryArray[4];
	});
};
for(let idArray = 0; idArray < buttonArray.length; idArray++){
	buttonArray[idArray].addEventListener('click',function(){
		const 		buttonValue	= this.id;
		let inputValue = input2.innerHTML == "" ? input1 : input3;
		console.log(buttonValue);
		inputValue.innerHTML += buttonValue;
	});
};
//if (memoryArray.length > 0 ){
	for(let idArray = 0; idArray < memory.length; idArray++){
		memory[idArray].addEventListener('click',function(){
			const		memoryValue = this.id;
			console.log(memoryValue)
			switch(memoryValue){
				case "mem1":
					input1.innerHTML = document.getElementById('mem1').innerHTML;
					input2.innerHTML = "";
					input3.innerHTML = "";
					break;
				case "mem2":
					input1.innerHTML = document.getElementById('mem2').innerHTML;
					input2.innerHTML = "";
					input3.innerHTML = "";
					break;
				case "mem3":
					input1.innerHTML = document.getElementById('mem3').innerHTML;
					input2.innerHTML = "";
					input3.innerHTML = "";
					break;
				case "mem4":
					input1.innerHTML = document.getElementById('mem4').innerHTML;
					input2.innerHTML = "";
					input3.innerHTML = "";
					break;
				case "mem5":
					input1.innerHTML = document.getElementById('mem5').innerHTML;
					input2.innerHTML = "";
					input3.innerHTML = "";
					break;
			default:
				break;
				}
			});
		};
//	};




// ------
// 1.- con el resultado presente (funcion continue):
//	a.- si presiono un numero, guardar resultado, pero no borrarlo, borrar input 1 2 y 3
//	b.- si presiono una operacion, ans, operacion y finalmente pedir input3
// 2.- agregar una tabla al costado para usarla de memoria para la calculadora, 5 espacios //DONE
// 	a.- ser capaz de utilizar esos resultados como input1 al hacerle clic
// 3.- agregar mas funciones según calculadora cientifica
// 4.- create easter eggs for shit and giggles
// 5.- agregar capacidad de ejecutar algebra simple (detectar valor de x) [extra points]
// ---

const 	buttonArray		=document.querySelectorAll(".key"),
		operator		=document.querySelectorAll(".op"),
		input1			=document.querySelector(".firoper"),
		input2			=document.querySelector(".secoper"),
		input3			=document.querySelector(".thioper"),
		result			=document.querySelector(".result"),
		memory 			=document.querySelector(".memory li"),
		memoryArray 	=[];

function rootn(){
	//funcion raiz
	const 		x = input1.innerHTML,
				z = input3.innerHTML,
		checkOdd = z % 2;
	if (checkOdd === 1 || x < 0){
		x = -x;
	};
	const resultRoot = x ** 1/y ;
	const	norm = resultRoot ** y ;
	if (Math.abs( x - norm ) && ( x > 0 === norm > 0)){
		return	checkOdd ? resultRoot: -resultRoot;
		};
	};
/*
function continue(){
	if ( result.innerHTML != null && function(event) clic on memx){
		let value = this.innerHTML;
		input1.innerHTML = value;
		input2.innerHTML = "";
	}
}
*/
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
		case "rootn":
			equation = "rootn(" + x + "," + z + ")";
			break;
		case "sqroot":
			equation = "Math.sqrt(" + x + ")";
			break;
		default:
			equation = x + y + z;
			break;
	}
	if ( x == null || y == null || z ==  null){
				alert("you're missing something");
			return null;
		} else {
			return equation
		}
	};

//------------------------------
// codigo para que funcione con el teclado
//------------------------------

document.onkeypress = function(event){
	const key = event.charCode;
	let inputNumbers = input2.innerHTML.trim() === "" ? input1 : input3;
	if (key > 47 && key < 58){
		inputNumbers.innerHTML += (key-48)
		return
	}

	//alert(key); 		
//	console.log(key)
	switch(key){
		case 42:
			input2.innerHTML += "*";
			break;
		//tecla +
		  case 43:
			input2.innerHTML += "+";
			break;
		//tecla -
		  case 45:
			input2.innerHTML += "-";
			break;
		//tecla .
		  case 46:
			input2.innerHTML += ".";
			break;
		//tecla /
		case 47:
			input2.innerHTML += "/";
			break;
		//tecla q
		case 113:
			input2.innerHTML = "sqroot";
			input3.innerHTML = "2" ;
			break;
		//tecla w
		case 119:
			input2.innerHTML += "^";
			break;
		//tecla e
		case 101:
			input2.innerHTML = "^";
			input3.innerHTML = "2";
			break;
		//tecla r
		case 114:
			input2.innerHTML = "rootn";
			break;
		//tecla send
		case 13:
		//tecla =
		case 61:
			let equation = resultFunction();
			  if (equation) {
				   try {		
					result.innerHTML = "" + eval(equation);
					let maxlength = 4;
					memoryArray.length > maxlength ? memoryArray.pop() && memoryArray.unshift( eval(equation) ) : memoryArray.unshift( eval(equation) );
					} catch (e) {
					   alert("ERROR");
					}
				};		    	
			break;
		case 67:
		// tecla c
		case 99:
	    case 99:
			input1.innerHTML = null;
			input2.innerHTML = null;
			input3.innerHTML = null;
			result.innerHTML = null;
			break;
		//tecla a
		case 97:
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

for(let idArray = 0; idArray < buttonArray.length; idArray++){
	//la cosa para que funcione con clics
	operator[idArray].addEventListener('click', function(){
		const 	operatorValue 	= this.id ; 
				//añade casos especificos
//				console.log(operatorValue);
//				console.log(inputValue2)
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
			case "clear":
		    	input1.innerHTML = "";
		        input2.innerHTML = "";
		        input3.innerHTML = "";
		        result.innerHTML = "";
        		break;
        	case "potency":
        			input2.innerHTML += "^";
        			break;
			case "square":
					input2.innerHTML += "^";
					input3.innerHTML = "2";
					break;
			case "=":
				let equation = resultFunction();
				if (equation) {
					try {		
						result.innerHTML = "" + eval(equation);
						let maxlength = 4;
						memoryArray.length > maxlength ? memoryArray.pop() && memoryArray.unshift( eval(equation) ) : memoryArray.unshift( eval(equation) );
						} 
					catch (e) {
					   alert("ERROR");
						};
				};
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
	buttonArray[idArray].addEventListener('click',function(){
		const 		buttonValue	= this.id;
		let inputValue = input2.innerHTML == "" ? input1 : input3;
		inputValue.innerHTML += buttonValue;
	});
};


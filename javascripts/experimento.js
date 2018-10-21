const buttonArray		=document.querySelectorAll(".key td"),
	operator		=document.querySelectorAll(".op td"),
	input1			=document.querySelector(".firoper"),
	input2			=document.querySelector(".secoper"),
	input3			=document.querySelector(".thioper"),
	result			=document.querySelector(".result")
function rootn(){
	//funcion raiz
	const 		x = input1.innerHTML,
				y = input3.innerHTML,
		checkOdd = y % 2;
	if (checkOdd === 1 || x < 0){
		x = -x;
	};
	const resultRoot = x ** 1/y ;
	const	norm = resultRoot ** y ;
	if (Math.abs( x - norm ) && ( x > 0 === norm > 0)){
		return	checkOdd ? resultRoot: -resultRoot;
		};
	};
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
					   } 
					catch (e) {
					   alert("ERROR");
					}
				};		    	
			break;
		case 67:
		// tecla c
		  case 99:
			input1.innerHTML = null;
			input2.innerHTML = null;
			input3.innerHTML = null;
			result.innerHTML = null;
			break;
		default:
			if (input2.innerHTML != null){
				input3.innerHTML += input
			} else{
				input1.innerHTML += input
			};
			break;
	}
}

//------------------------------
// codigo para que funcione con las teclas
//------------------------------

for(let idArray = 0; idArray < buttonArray.length; idArray++){
	//console.log(idArray)
	//la cosa para que funcione con clics
	buttonArray[idArray].addEventListener('click',function(){
		const buttonValue	= this.id
		    inputValue1	= input1.innerHTML,
			inputValue2 = input2.innerHTML,
			inputValue3 = input3.innerHTML;
			//añade las funciones para clear e igual
			switch(buttonValue){
				case "clear":
		        input1.innerHTML = "";
		        input2.innerHTML = "";
		        input3.innerHTML = "";
		        result.innerHTML = "";
        		break;
				case "=":
					resultFunction();
					break;
				case "potency":
        			input2.innerHTML += "^";
        			break;
				case "square":
					input2.innerHTML += "^";
					input3.innerHTML = "2";
					break;
				default:
					if (input2.innerHTML != null){
						input3.innerHTML += input
					} else {
						input1.innerHTML += input
					}
					break;
			}
	});	
};
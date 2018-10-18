var buttonArray		=document.querySelectorAll(".key td");
	operator		=document.querySelectorAll(".op td");
	input1			=document.querySelector(".firoper");
	input2			=document.querySelector(".secoper");
	input3			=document.querySelector(".thioper");
	result			=document.querySelector(".result td");
function rootn(){
	//funcion raiz
	var x = input1.innerHTML
		y = input3.innerHTML
		checkOdd = y % 2;
	if (checkOdd == 1 || x < 0){
		x = -x;
	};
	var resultRoot = x ** 1/y ;
	var	norm = resultRoot ** y ;
	if (Math.abs( x - norm ) && ( x > 0 === norm > 0)){
		return	checkOdd ? resultRoot: -resultRoot;
		};
	};
function result(){
	var x = input1.innerHTML;
		y = input2.innerHTML;
		z = input3.innerHTML;
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
			return
				alert("you're missing something");
		} else {
			return
				equation
		}
	};
//------------------------------
//
//------------------------------
for(var idArray = 0; idArray < buttonArray.lenght; idArray++){
	//la cosa para que funcione con el teclado
	document.onkeypress = function(event){
		var key = event.charCode;
		for (var element = 0 ; element <= 10; element++){
			if (key === (48 + element)){
				element = input;
			}
		}
		console.log(key);
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
		    	result();
      			if (equation) {
   					try {		
		    		    result.innerHTML = eval(equation);
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
		    		input3.innerHTML = input
		    	} else{
		    		input1.innerHTML = input
		    	};
        		break;
		}
	}

	
	//la cosa para que funcione con clics
/*	buttonArray[idArray].addEventListener('click',function(){
				var buttonValue	=this.id;
					inputValue	=userInput.innerHTML;
			//añade las funciones para clear e igual
			switch(buttonValue){
				case "clear":
		        input1.innerHTML = "";
		        input2.innerHTML = "";
		        input3.innerHTML = "";
		        result.innerHTML = "";
        		break;
				case "=":
					result();
					break;
				case "potency":
        			input2.innerHTML += "**";
        			break;
				case "square":
					input2.innerHTML += "**2";
					break;
				default:
					input2 != null ? input3.innerHTML += buttonValue : input1.innerHTML += buttonValue
					break;
			}
	});
*/	
	//la cosa para que cambie de input si existe un operando
	//input2.innerHTML != null ? input3.innerHTML = input : input1.innerHTML = input;
};
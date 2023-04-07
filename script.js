function converter() {
  var x=document.getElementById("box").value;
	var data = parseFloat(document.getElementById("box").value);
	var choice = document.getElementById("cars").value;
     var indata = document.getElementById("input").value;
    
	   
	     if(choice == "Celcius" && indata=="Fahrenheit"){
	     print=(data-32)*5/9;
         // print=print+d;
	     document.getElementById("result").value=print+'\xB0C';
         }
         else if(choice == "Celcius" && indata=="Celcius"){
	     print=data
         // print=print+d;
	     document.getElementById("result").value=print+'\xB0C';
         }
         else if(choice == "Celcius" && indata=="Kelvin"){
	     print=(data-273.15);
         // print=print+d;
	     document.getElementById("result").value=print+'\xB0C';
         }

         else if(choice == "Fahrenheit" && indata=="Celcius"){
	     print=(data*9/5)+32;
	     document.getElementById("result").value=print+'\xB0F';

         }

         else if(choice == "Fahrenheit" && indata=="Fahrenheit"){
	     print=(data);
	     document.getElementById("result").value=print+'\xB0F';

         }

         else if(choice == "Fahrenheit" && indata=="Kelvin"){
	     print=(data-273.15) * 9/5 + 32;
	     document.getElementById("result").value=print+'\xB0F';

         }
         else if(choice == "Kelvin" && indata=="Celcius"){
          print=(data + 273.15);
          document.getElementById("result").value=print+'K';
         }
         else if(choice == "Kelvin" && indata=="Fahrenheit"){
          print=(data-32)*5/9+ 273.15;
          document.getElementById("result").value=print+'K';
         }
         else if(choice == "Kelvin" && indata=="Kelvin"){
          print=data;
          document.getElementById("result").value=print+'K';
         }

         else{
         	document.getElementById("result").value=" Please fill all entry correctly";
         }
        
        if (x=="") {
        	document.getElementById("result").value=" Please enter a number";
        }
}
function txt1(){
  document.getElementById("result").value="";
  document.getElementById("box").value="";
}
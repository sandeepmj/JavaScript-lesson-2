function myAlert(){
	alert('Hello again from button 1!');
}

function fillText(){
	document.getElementById("test").innerHTML = 
		"<br>Interactivity just added info to your page!";
}

var rent;
var income;
var percentage;

function rentCalc(){
	rent = document.getElementById("rent").value;
	income = document.getElementById("income").value;
	percentage = rent / income * 100;
	alert(percentage + 
		" percent of your $" + 
		income  + 
		" in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
	rightRent();
}

function rightRent(){
	if (percentage > 35) {
	alert("bad");	
	} else {
		alert("good!")
	}
	
}





/*var rent;
var income;
var percentage;

function rentCalc(){
	rent = document.getElementById("rent").value;
	income = document.getElementById("income").value;
	percentage = rent / income * 100;
	alert (percentage + 
		" percent of your $" + 
		income  + 
		" in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
}*/




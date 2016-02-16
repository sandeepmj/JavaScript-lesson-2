function myAlert(){
	alert('Hello again from button 1!');
}

function fillText(){
	document.getElementById("test").innerHTML = 
		"<br>Interactivity just added info to your page!";
}



function rentCalc(){
	var myRent = document.getElementById("rent").value;
	var myIncome = document.getElementById("income").value;
	var percentage = myRent / myIncome * 100;
	alert(percentage + 
		" percent of your $" + 
		myIncome  + 
		" in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
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




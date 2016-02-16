function myAlert(){
	alert('Hello again from button 1!');
}

function fillText(){
	document.getElementById("test").innerHTML = 
		"<br>Interactivity just added info to your page!";
}


function rentCalc(){
	var rent = document.getElementById("rent").value;
	var income = document.getElementById("income").value;
	var percentage = rent / income * 100;
	alert (percentage + 
		" percent of your $" + 
		income  + 
		" in income is spent on rent!");
	//alert("The rent is $" + rent + " and your income is $" + income);
}
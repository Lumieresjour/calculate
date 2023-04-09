<!DOCTYPE html>
<html>
<head>
	<title>Calculator</title>
	<script>
		function calculate() {
			// Get the values from the input fields
			var num1 = document.getElementById("num1").value;
			var num2 = document.getElementById("num2").value;
			
			// Perform the calculations
			var sum = Number(num1) + Number(num2);
			var difference = num1 - num2;
			var product = num1 * num2;
			var quotient = num1 / num2;
			
			// Display the results
			document.getElementById("sum").innerHTML = "Sum: " + sum;
			document.getElementById("difference").innerHTML = "Difference: " + difference;
			document.getElementById("product").innerHTML = "Product: " + product;
			document.getElementById("quotient").innerHTML = "Quotient: " + quotient;
		}
	</script>
</head>
<body>
	<h1>Calculator</h1>
	<label for="num1">Number 1:</label>
	<input type="number" id="num1"><br>
	<label for="num2">Number 2:</label>
	<input type="number" id="num2"><br>
	<button onclick="calculate()">Calculate</button>
	<p id="sum"></p>
	<p id="difference"></p>
	<p id="product"></p>
	<p id="quotient"></p>
</body>
</html>

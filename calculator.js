(function() {
	var expression = [];

	document.getElementById("button1").addEventListener(
			"click",
			function() {
				expression.push("1");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button2").addEventListener(
			"click",
			function() {
				expression.push("2");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button3").addEventListener(
			"click",
			function() {
				expression.push("3");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button4").addEventListener(
			"click",
			function() {
				expression.push("4");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button5").addEventListener(
			"click",
			function() {
				expression.push("5");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button6").addEventListener(
			"click",
			function() {
				expression.push("6");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button7").addEventListener(
			"click",
			function() {
				expression.push("7");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button8").addEventListener(
			"click",
			function() {
				expression.push("8");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button9").addEventListener(
			"click",
			function() {
				expression.push("9");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("button0").addEventListener(
			"click",
			function() {
				expression.push("0");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString().split(/[^0-9.]/g).pop();
			});

	document.getElementById("buttonDecimal").addEventListener(
			"click",
			function() {
				if (!expression.includes("."))
					expression.push(".");
				document.getElementById("txtDisplay").value = expression.join(
						'').toString();
			});

	document.getElementById("buttonCancel").addEventListener("click",
			function() {
				expression.splice(0, expression.length);
				document.getElementById("txtDisplay").value = "0";
			});

	document.getElementById("buttonDivide").addEventListener(
			"click",
			function() {
				expression.push('/');
				document.getElementById("txtDisplay").value = expression.join(
						"").toString().replace("/", "");
			});

	document.getElementById("buttonMultiply").addEventListener(
			"click",
			function() {
				expression.push('*');
				document.getElementById("txtDisplay").value = expression.join(
						"").toString().replace("*", "");
			});

	document.getElementById("buttonMinus").addEventListener(
			"click",
			function() {
				expression.push('-');
				document.getElementById("txtDisplay").value = expression.join(
						"").toString().replace("-", "");
			});

	document
			.getElementById("buttonPlusEquals")
			.addEventListener(
					"click",
					function() {
						if (expression.includes('-')
								|| expression.includes('*')
								|| expression.includes('/')
								|| expression.includes('+')) {
							var arrayLength = expression.length;
							var temp = "";
							var num1 = 0;
							var op = "";
							var calculation = 0;
							var values = [];
							for (var i = 0; i < arrayLength; i++) {
								if (expression[i] != '-'
										&& expression[i] != '*'
										&& expression[i] != '/'
										&& expression[i] != '+') {
									temp += expression[i].toString()
								} else {
									values.push(temp)
									values.push(expression[i])
									temp = ""
								}
							}
							values.push(temp)

							for (var j = 0; j < values.length; j++) {
								op = op + " " + values[j].toString()
							}
							document.getElementById("txtDisplay").value = eval(op);
							expression = [ eval(op) ]
						} else {
							expression.push('+');
							document.getElementById("txtDisplay").value = expression
									.join("").toString().replace("+", "");
						}
					});

	window.addEventListener("load", init, false);
})();
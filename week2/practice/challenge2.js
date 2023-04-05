let num1, pl, num2

function prompt__calculate() {
	num1 = prompt('숫자를 입력하세요')
	pl = prompt('부호를 입력하세요')
	num2 = prompt('숫자를 입력하세요')
	num1 = parseInt(num1)
	num2 = parseInt(num2)
}

function alert__calculate() {
	if (pl == '+') {
		let sum = num1I + num2I
		alert(num1I + ' + ' + num2I + '는 ' + sum + '입니다.')
	}
	if (pl == '-') {
		let sum = num1 - num2
		alert(num1 + ' - ' + num2 + '는 ' + sum + '입니다.')
	}
	if (pl == '*') {
		let sum = num1 * num2
		alert(num1 + ' * ' + num2 + '는 ' + sum + '입니다.')
	}
	if (pl == '%') {
		let sum = num1 % num2
		alert(num1 + ' % ' + num2 + '는 ' + sum + '입니다.')
	}
	if (pl == '/') {
		let sum = num1 / num2
		alert(num1 + ' / ' + num2 + '는 ' + sum + '입니다.')
	}
}

prompt__calculate()
alert__calculate()

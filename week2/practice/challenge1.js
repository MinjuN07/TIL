let num1 = prompt('숫자를 입력하세요')
num1 = parseInt(num1)
let pl = prompt('부호를 입력하세요')
let num2 = prompt('숫자를 입력하세요')
num2 = parseInt(num2)

if (pl == '+') {
	let sum = num1 + num2
	alert(num1 + ' + ' + num2 + '는 ' + sum + '입니다.')
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

let num1 = parseInt(prompt('숫자를 입력하세요'))
let pl = prompt('부호를 입력하세요')
let num2 = parseInt(prompt('숫자를 입력하세요'))

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

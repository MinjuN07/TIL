let num1 = prompt('숫자를 입력하세요')
let num1I = parseInt(num1)
let pl = prompt('부호를 입력하세요')
let num2 = prompt('숫자를 입력하세요')
let num2I = parseInt(num2)

if (pl == '+') {
	let sum = num1I + num2I
	alert(num1I + ' + ' + num2I + '는 ' + sum + '입니다.')
}
if (pl == '-') {
	let sum = num1I - num2I
	alert(num1I + ' - ' + num2I + '는 ' + sum + '입니다.')
}
if (pl == '*') {
	let sum = num1I * num2I
	alert(num1I + ' * ' + num2I + '는 ' + sum + '입니다.')
}
if (pl == '%') {
	let sum = num1I % num2I
	alert(num1I + ' % ' + num2I + '는 ' + sum + '입니다.')
}
if (pl == '/') {
	let sum = num1I / num2I
	alert(num1I + ' / ' + num2I + '는 ' + sum + '입니다.')
}

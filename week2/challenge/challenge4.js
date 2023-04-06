let cal = {
	num1: 0,
	num2: 0,
	pl: 0,
	sum: 0,
}
const prompt__calculate = () => {
	cal.num1 = prompt('숫자를 입력하세요')
	cal.pl = prompt('부호를 입력하세요')
	cal.num2 = prompt('숫자를 입력하세요')
	cal.num1 = parseInt(cal.num1)
	cal.num2 = parseInt(cal.num2)
	return cal.pl, cal.num1, cal.num2
}

const alert__calculate = () => {
	if (cal.pl == '+') {
		cal.sum = cal.num1 + cal.num2
		alert(`${cal.num1} + ${cal.num2} = ${cal.sum}입니다.`)
	}
	if (cal.pl == '-') {
		cal.sum = cal.num1 - cal.num2
		alert(`${cal.num1} - ${cal.num2} = ${cal.sum}입니다.`)
	}
	if (cal.pl == '*') {
		cal.sum = cal.num1 * cal.num2
		alert(`${cal.num1} * ${cal.num2} = ${cal.sum}입니다.`)
	}
	if (cal.pl == '%') {
		cal.sum = cal.num1 % cal.num2
		alert(`${cal.num1} % ${cal.num2} = ${cal.sum}입니다.`)
	}
	if (cal.pl == '/') {
		cal.sum = cal.num1 / cal.num2
		alert(`${cal.num1} / ${cal.num2} = ${cal.sum}입니다.`)
	}
}

prompt__calculate()
alert__calculate()

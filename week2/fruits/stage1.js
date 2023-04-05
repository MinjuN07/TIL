//let fruit = ["사과", "바나나", "복숭아"]
let a = 0,
	b = 0
function fruit() {
	a = prompt('과일을 하나 고르세요.')
	b = prompt('가격을 맘대로 정해주세요.')
	b = parseInt(b)
	if (a == '사과') {
		alert(`${a}는 ${b}원 입니다.`)
	} else if (a == '바나나') {
		alert(`${a}는 ${b}원 입니다.`)
	} else if (a == '복숭아') {
		alert(`${a}는 ${b}원 입니다.`)
	} else if (a == 수박) {
		alert(`${a}는 ${b}원 입니다.`)
	} else {
		alert(`${a}라는 과일은 재고가 없거나 존재하지 않습니다.`)
	}
}

fruit()

function fruit(x, y) {
	if (x == '사과') {
		alert(`${x}는 ${y}원 입니다.`)
	} else if (x == '바나나') {
		alert(`${x}는 ${y}원 입니다.`)
	} else if (x == '복숭아') {
		alert(`${x}는 ${y}원 입니다.`)
	} else if (x == '수박') {
		alert(`${x}는 ${y}원 입니다.`)
	} else {
		alert(`${x}라는 과일은 재고가 없거나 존재하지 않습니다.`)
	}
}

let z = prompt('과일을 하나 고르세요')
let t = prompt(`가격을 맘대로 골라주세요`)
fruit(z, t)

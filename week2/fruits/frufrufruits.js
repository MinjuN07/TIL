//실행시 오류남 고칠예정 봐주세용ㅜㅜ
const fruits = [
	{
		name: '사과',
		price: 4400,
	},
	{
		name: '바나나',
		price: 1200,
	},
	{
		name: '복숭아',
		price: 26000,
	},
	{
		name: '수박',
		price: 4000,
	},
	{
		name: '코코넛',
		price: 100000,
	},
	{
		name: '황금황제망고',
		price: 9999999,
	},
]

const fruit1 = prompt('첫 번째로 구매할 과일의 이름을 입력해주세요.')
const fruit2 = prompt('두 번째로 구매할 과일의 이름을 입력해주세요.')

if (fruit1 != fruits.name && fruit2 != fruits.name) {
	alert(`그러한 상품은 존재하지 않거나 품절되었습니다.`)
} else {
	const guessFruit = (fruit) => {
		let sumPrice = 0
		for (let i = 0; i < fruit.length; i++) {
			if (fruit1 == fruit[i].name || fruit2 == fruit[i].name) {
				sumPrice += fruit[i].price
			}
		}
		return sumPrice
	}
	const result = guessFruit(fruits)

	alert(`그러므로 총 계산하실 금액은 ${result}원 입니다.`)
}

/*let fruit = ["사과", "바나나", "복숭아"]
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

fruit()*/

/*function fruit(x, y) {
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
fruit(z, t)*/

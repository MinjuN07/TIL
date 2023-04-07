//Double Exclamation Marks Operator(느낌표2개 연산자) 사용 못함ㅠㅠ
let yourage = parseInt(prompt('나이를 숫자로 입력하세요.'))
if (!yourage) alert('나이가 글자로 입력되거나 입력되지 않았습니다.')

//const age = [7, 14, 19, 31, 65, 100]
const age = [
	{
		naem: 'error',
		age: 0,
	},
	{
		name: 'doge',
		age: 7,
	},
	{
		name: 'taketwo',
		age: 14,
	},
	{
		name: 'soju',
		age: 19,
	},
	{
		name: 'baskinrobbins',
		age: 31,
	},
	{
		name: 'dog',
		age: 65,
	},
	{
		name: 'who',
		age: 100,
	},
]

const agea = () => {
	if (yourage <= 6) {
		alert('당신은 유아입니다. 어떻게 이 프로그램을 쓰시나요?')
	} else if (yourage <= 13) {
		alert('당신은 초등학생입니다.')
	} else if (yourage <= 16) {
		alert('당신은 중학생입니다. 좋을 때 입니다. 좀 더 즐기시죠')
	} else if (yourage <= 19) {
		alert('당신은 고등학생입니다. 얼마 안 남았습니다. 힘내세요!!')
	} else if (yourage === 20) {
		alert('당신은 성인입니다. 그래도 노담 하시죠.')
	} else if (yourage <= 30) {
		alert('당신은 성인입니다. 청춘을 즐기고 계시나요?')
	} else {
		alert('당신은 성인입니다.')
	}
	for (let i = 0; i < age.length; i++) {
		yourage === age[i].age && alert(`당신은 어딘가에 사는 ${age[i].name}님과 나이가 같습니다.`)
	}
}
yourage > age[5].age ? alert('당신은 괴물인가요?') : agea()

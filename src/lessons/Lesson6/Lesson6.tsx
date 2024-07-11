function Lesson6() {
//1. типизация строк - string
let userName: string = 'Mary'
// userName = 'true'
let fullName: string = ""
fullName = `${userName} Smith`

let result: string = '2'
result = 1 + 2 + '4'
console.log(result)

//2. типизация чисел - number
let luckyNumber: number = 7
luckyNumber = 7.1
luckyNumber = -8
luckyNumber = -7/0
// luckyNumber = -7/NaN
// luckyNumber = 7 -'1' ошибка типа 
console.log(luckyNumber)

// 3. типизация догического типа = boolean
let isAdmin: boolean = true
isAdmin = false
isAdmin = 2 > 1
isAdmin = true || 1
console.log(isAdmin);

//4. типизация null и undefined
let emptyValue: null = null
// emptyValue = 0 ошибка типа только null
// emptyValue = NaN

let und: undefined = undefined
// und = 0

// 5. типизация Array
const colors: string[] = ['red', 'black', 'green']
colors.push("")
colors[0] = '12'
console.log(colors);

// 6. типизация tupel (кортеж)
const fruits: [string, string, number] = ['apple', 'grape', 12]
// fruits.push(24)
console.log(fruits);

// 7. типизация функции
const showMessage = (): void => {
    console.log('Hi');
}

const returnNumber = (): number => {
    return 7
}

const arrUser = (firstName: string, age: number = 30): [string, number] => {
    return [firstName, age]
}
console.log(arrUser('Tom', 23));
console.log(arrUser('Tom'));

// 8. Тип Any
let city: any = 23
city = 'Berlin'
city = [2002, 'Warsaw']

// 9. Автоматическое определение типа
let exStr = 'Ron'

let arrEx = [2, 4, 6]

// 10. Union type
let isManager: boolean | undefined  = undefined
isManager = true

let mixArr = [2, true, " Lime"]

  return <div>Lesson6 - example TS</div>;
}

export default Lesson6;

import { log } from "console"
import { title } from "process"

function Lesson7() {
    // 11. типизация обьектов через interface
interface User {
    name: string
    age?: number | string
}

interface User {
    role: string
}

interface Admin extends User{
    isAdmin: boolean
}

const adminData: Admin = {
    name: 'Tom',
    role: 'Manager',
    isAdmin: true
}

const userData: User = {
name: 'John',
age: 45,
role: 'Manager'
}

// 12.Типизация через type
type Weight = string | number

type Animal = {
    name: string,
    weight: Weight
}

const animal : Animal = {
    name: 'Lion',
    weight: '200'
}

type NewAnimal = Animal & {country: string}

const zebraAnimal: NewAnimal = {
    name: 'Zebra',
    weight: 150,
    country: 'Afrika'
} 

// 13. Generic & Type
type CustomTupel<T = string> = [number, string, T]

const arrayMix: CustomTupel<boolean> = [23, 'Bob', true]

const arrayMix2: CustomTupel<null> = [45, 'Mary', null]

const arrayMix3: CustomTupel = [30, 'Tom', 'Manager']

// 14. Generic & Interface
interface Fruit<T = string> {
    title: string,
    address: T
}

const fruit1: Fruit<number> = {
    title: 'Apple',
    address: 29
}

const fruit2: Fruit = {
    title: 'Grape',
    address: 'Berin street ...'
}

interface Address {
    country: string,
    city: string,
    code: number
}

const fruit3: Fruit<Address> = {
    title:'lemon',
    address: {
        country: 'Germany',
        city: 'Berlin',
        code: 29
    }
}

// 15. enum - тип перечисления(числовое)
enum Colors{
    Black,
    Red = 90,
    White
}

let color: Colors = Colors.White
console.log(color);

// 16. enum - тип перечисления(строковое)
enum UserRoles {
    ADMIN = 'Admin',
    USER = 'User',
    GUEST = 'Guest'
}

interface UserInt{
    name: string,
    role: UserRoles
}

const adminUser: UserInt = {
    name: 'Alex',
    role: UserRoles.ADMIN
}

  return <div>Lesson7 - example TS</div>;
}

export default Lesson7;

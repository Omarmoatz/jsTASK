const numbers = [2, 3, -1, 6.5, -17, 55, 12];
//1

//2
let newNum = numbers.forEach((name, index, onumbers) => {
    console.log(`the index is ${index} the value is ${name}`);
})

//3
let AddAllNumbers = numbers.reduce((first, second) => {
    return first + second
})

//4
let newNum3 = numbers.map((num, index, Onums) => {
    return num + num
})

//5
let newNum4 = numbers.filter((num, i, Onum) => {
    return num > 0
})

//6
let newNum5 = numbers.every((num) => {
    return num > 0
})

//7
let newNum6 = numbers.some((num) => {
    return num > 0
})
//____________________________
//2Q
"use strict"
console.log(this); //window

function test() {
    console.log(this);//window
}
test()

let click = document.getElementById("click");
click.onclick = () => {
    console.log(this);//window
};

let click1 = document.getElementById("click1");
click1.onclick = function () {
    console.log(this);//button
};

const obj = {
    name: "ahmed",
    test: function () {
        console.log(this);//object
    }
}
obj.test()

const obj1 = {
    name: "ahmed",
    test: () => {
        console.log(this);//window
    }
}
obj1.test()

const obj2 = {
    name: "ahmed",
    test: () => {
        let test2 = () => {
            console.log(this);//window
        }
        test2()
    }
}
obj2.test()

const obj3 = {
    name: "ahmed",
    test: function () {
        let test2 = () => {
            console.log(this);//object
        }
        test2()
    }
}
obj3.test()

//______________________________2ed task__________________________
//Q1
let address = "ahmed";
let name = "Egypt";

const box = name
name = address
address = box

[address, name] = [name, address]

//Q2
const car = {
    name: "BMW",
    motorCapacity: ["1600cc", "2000cc"],
    colors: {
        mainColors: {
            c1: "red",
            c2: "black",
            otherColors: ["yellow", "orange", ["blue", "pink"]]
        }
    },
}

function showCar( { name , motorCapacity:[m1,m2] ,colors:{mainColors:{otherColors:[c1,c2,[c3,c4]]}} }) {
    return `the name is ${name} and the motor is : ${m2} and the color is ${c3}`
} // expected return the name is BMW and the motor is 2000CC and the color is blue

console.log(showCar(car));

//Q3
let nums = [10,20,30,40]

let newnum = nums  //shallow clone

let newnums = [...nums] //deep clone





/*                        2ed task
1
 undifined :يعني في مكان محفوظ في الذاكره لاكن ملهوش قيمه
 null:يعني مفيش حاجه اصلا اتحفظت في الذاكره

 2
 number:  1 2 3 4  5
 string:  "omar"  'moataz'  `mahmoud`
 boolean:  true   false
 undefined: x= و اسيبها فاضيه
 function:
 object:
 null:    
*/

//3
var x = 10;
console.log(typeof x);

//4
var x = 10;
x += 2
console.log(x);

//5
var x = 3;
var y = 2;
var z = 5;

var result = ++x + --y != + 13 - 50 > 40 - --x;
/*
++3 + --2 != +13 -50 > 40- --3;
4 + 1 != 13 -50 > 40- 2;
5 != 37 > 38;
5 != false;
*/
console.log(result);

//6
var userName = "ahmed";
var password = "123456";
var dataBaseUserName = "ahmed";
var dataBasePassword = "12345";
var result1 = userName === dataBaseUserName && password === dataBasePassword;
var result2 = userName === dataBaseUserName || password === dataBasePassword;
/*
 &&: لازم كل الاطراف تكون صح عشان الناتج يطلع صح
 ||: لازم علي الاقل طرف واحد يكون صح عشان الناتج يطلع صح

 result 1 : عشان لازم الطرفين يطلعوا ب true
 */

//_____________________________3rd task___________________________
//1
function Add_4Nums(num1, num2, num3, num4) {
    result = num1 + num2 + num3 + num4
    return result;
}
console.log(Add_4Nums(50, 5, 8, 4));

//2
function Add_2str(str1, str2) {
    resulte = str1 + str2
    return resulte
}
console.log(Add_2str('omar ', 'moataz'));

//3
function serch_str(str, search) {
    return str.indexOf(search)
}
console.log(serch_str('omar', 'a'));

//4
function concat_str(str1, str2, str3, str4) {
    result = str1.concat(str2, str3, str4)
    return result
}
console.log(concat_str('omar ', 'moataz ', 'mahmoud ', 'abd el raouf'));

//5
var str = '  welcome mr ahmed  '
console.log(str.length);
console.log(str.indexOf('ahmed'));
console.log(str.slice(13, 18));
console.log(str.substr(13, 5));
console.log(str.charAt(13));
console.log(str.replace('ahmed', 'mohamed'));
console.log(str.includes('yaseer'));
console.log(str.trim());

//6
var num = ' 10.879879 ';
console.log(Number(num));
console.log(Number.isInteger(num));
console.log(parseFloat(num));
//console.log(num.toFixed(2));

//___________________________4th task____________________________________
//1
var firstName = "ahmed2020";
var lastName = "belal";

console.log(firstName.substr(0, 5));
console.log(firstName.length);
console.log(firstName.indexOf('m'));
console.log(firstName.includes('z'));
console.log(firstName.replace('ahmed', 'mohamed'));

//2
var student = ['mohamed', 'belal']
console.log(student.push(30));
console.log(student.splice(3, 0, 40));
console.log(student.push('egypt'));
console.log(student.splice(5, 0, 'egypt'));
console.log(student.unshift('grade 1'));
console.log(student.splice(0, 0, 'grade 1'));
console.log(student.splice(3, 0, 88, 79, 66));
// final array is 'egypt'
var student2 = ['football', 'swiming']
var new_array = student.concat(student2)
console.log(new_array);
console.log(new_array.reverse());

//3
var array1 = [10, 30, -5, 13, 6, 55];
var max = Math.max.apply(null, array1)
console.log(max);
var min = Math.min.apply(null, array1)
console.log(min);
console.log(array1.sort(function (x, y) {
    return y - x;
}));
//_________________________5th task________________________________

//1
var x = [
    {
        id: 1,
        title: 'Prduct1' ,
        desc: 'asdfgasdf' ,
        quantity: 10 ,
        oldPrice: 150,
        amountOfDiscount: 20,
        discount: true,
        colors: ['red' , 'green', 'blue'],
        get_full_data: function(){
            return 'title is : '+ this.title + ' and we have '+ this.quantity+' number in stock and the price is $'+
             this.oldPrice+' and we have these colors '+ this.colors[0] +' ,'+ this.colors[1]+' ,' +this.colors[2] 
        },
        price_after_discount: function(){
            result=this.oldPrice*(this.amountOfDiscount/100)
            return  this.oldPrice-result
        }
    },
    {
        id: 2,
        title: 'Prduct2' ,
        desc: 'asdfgasdf' ,
        quantity: 15 ,
        oldPrice: 200,
        amountOfDiscount: 25,
        discount: true,
        colors: ['red' , 'green', 'blue'],
        get_full_data: function(){
            return 'title is : '+ this.title + ' and we have '+ this.quantity+' number in stock and the price is $'+
             this.oldPrice+' and we have these colors '+ this.colors[0] +' ,'+ this.colors[1]+' ,' +this.colors[2] 
        },
        price_after_discount: function(){
            result=this.oldPrice*(this.amountOfDiscount/100)
            return  this.oldPrice-result
        }
    },
    {
        id: 3,
        title: 'Prduct3' ,
        desc: 'asdfgasdf' ,
        quantity: 20,
        oldPrice: 150,
        amountOfDiscount: 15,
        discount: true,
        colors: ['red' , 'green', 'blue'],
        get_full_data: function(){
            return 'title is : '+ this.title + ' and we have '+ this.quantity+' number in stock and the price is $'+
             this.oldPrice+' and we have these colors '+ this.colors[0] +' ,'+ this.colors[1]+' ,' +this.colors[2] 
        },
        price_after_discount: function(){
            result=this.oldPrice*(this.amountOfDiscount/100)
            return  this.oldPrice-result
        }
    },
    {
        id: 4,
        title: 'Prduct4' ,
        desc: 'asdfgasdf' ,
        quantity: 30 ,
        oldPrice: 250,
        amountOfDiscount: 10,
        discount: true,
        colors: ['red' , 'green', 'blue'],
        get_full_data: function(){
            return 'title is : '+ this.title + ' and we have '+ this.quantity+' number in stock and the price is $'+
             this.oldPrice+' and we have these colors '+ this.colors[0] +' ,'+ this.colors[1]+' ,' +this.colors[2] 
        },
        price_after_discount: function(){
            result=this.oldPrice*(this.amountOfDiscount/100)
            return  this.oldPrice-result
        }
    },
    {
        id: 5,
        title: 'Prduct5' ,
        desc: 'asdfgasdf' ,
        quantity: 50 ,
        oldPrice: 100,
        amountOfDiscount: 5,
        discount: true,
        colors: ['red' , 'green', 'blue'],
        get_full_data: function(){
            return 'title is : '+ this.title + ' and we have '+ this.quantity+' number in stock and the price is $'+
             this.oldPrice+' and we have these colors '+ this.colors[0] +' ,'+ this.colors[1]+' ,' +this.colors[2] 
        },
        price_after_discount: function(){
            result=this.oldPrice*(this.amountOfDiscount/100)
            return  this.oldPrice-result
        }
    }
]
console.log(x[0].get_full_data());
console.log(x[0].price_after_discount());

//2
var x= new Date()
console.log(x);

var y = new Date(2020,9,24,5,30,40)
console.log(y);
console.log(y.getFullYear());

var month_num = (y.getMonth())
var months =['jun','feb','mar','april','may','jun','july','aug','sep','oct','nov','dec']
var month = months[month_num]
console.log(month);

console.log(y.getDate());

var day_num = y.getDay()
var days = ['sun','mon','ters','wens','thrs','fri','sat']
var day = days[day_num]
console.log(day);

console.log(y.getHours());
console.log(y.getMilliseconds());
console.log(x.getTime());

var date = y.getHours() +'-' + y.getMinutes()+ '-' + y.getSeconds()
console.log(date);

//_________________________6th task_____________________________________

//1
var day_num = y.getDay()
var days = ['sun','mon','ters','wens','thrs','fri','Saterday']
var day = days[day_num]
var output = 'Today is : '+ day
console.log(output)

var date = x.getHours() +' AM :' + x.getMinutes()+ ' : ' + x.getSeconds()
var datee = 'Current time is : ' + date
console.log(datee);

//2
function area(num1) {
    return num1 * num1
}
console.log(area(5));

//3
var degree = [50]
if (degree >= 50 && degree < 65) {
    console.log('suceed');
} else if (degree >= 65 && degree < 75) {
    console.log('good');
} else if (degree >= 75 && degree < 85) {
    console.log('good');
} else if (degree >= 85 && degree <= 100) {
    console.log('excellent');
} else if (degree > 0 && degree < 50) {
    console.log('fail');
} else { console.log('Eror'); }

//4
function bigest_num(x, y) {
    return Math.max(x, y)
}
console.log(bigest_num(50, 70));

//5
function random_num(min, max) {
    return Math.abs(Math.round(Math.random() * (max - min) + min))
}
console.log(random_num(50, 90));
console.log(random_num(-20, 50));

//__________________________________7TH task ____________________________________
//___Q1___
/*
var text = "outside";  //global
function logIt() {
    console.log(text);  //undefined 
    //عشان كتبت ال لوج قبل ما اعرف التيكست
    var text = "inside";  //local
}
logIt();


if (true) {
    const message = "Hello"; // local
    console.log(message); // Hello
    //لان الكلمه لووكال جوا القواس بس
    }
    console.log(message); // eror
 

let x = 10; //global
if (true) {
    let x = 20; //local
    function test() {
        console.log(x); // undefined
        //عشان كتبت ال لوج قبل ما اعرف الx
        let x = 30; //local
        console.log(x); // 30
        //لان الx لوكال للfunction
    }
    test();
}
console.log(x);// 10
//لان ال x متعرفه جلوبال فووق
*/
//__Q2__

let h2 = document.getElementById('sec1')
console.log(h2);

let xx = document.querySelectorAll('div')
console.log(x);

let zz = document.getElementsByTagName('div')
console.log(z);

let omar = document.getElementsByClassName('pro pro3')
console.log(omar);

 document.getElementsByTagName('h2').innerHTML = 'Welcome from Div';


let add_word_toDiv = (name) =>{
    let elem = document.getElementById('proo')
    let word = document.createTextNode(name)
    elem.append(word) 
}
console.log(add_word_toDiv('omar')); 


let add_twoNumsAddedToDiv = (num1,num2) =>{
    let add = document.getElementById('pr')
    let result = num1 + num2
    add.append(result)
}
console.log(add_twoNumsAddedToDiv(50,96));


let add_word_ToSection= (namee) =>{
    let word =document.getElementById('name')
    word.innerHTML += namee
}
console.log(add_word_ToSection('omar'));











// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectArea(a,b){
    return a*b;
}
console.log(rectArea(4,6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circArea(r){
    return 3.14*(r*r);
}

console.log(circArea(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylArea(h,r){
    let pi = 3.14;
    return h*2*pi+2*pi*(r*r);
}

console.log(cylArea(5, 4));
// - створити функцію яка приймає масив та виводить кожен його елемент
function iterArray(arr){
    for(let el in arr){
        console.log(el);
    }
}
iterArray([1,23,43,"dog",324]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text){
    let par = document.createElement("p");
    par.innerText = text;
    document.body.appendChild(par);
}
createParagraph("potato is the best vegetable");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text){
    let list = document.createElement("ul");
    let item = document.createElement("li");
    item.innerText = text;
    list.appendChild(item);
    let item1 = document.createElement("li");
    item1.innerText = text;
    list.appendChild(item1);
    let item2 = document.createElement("li");
    item2.innerText = text;
    list.appendChild(item2);
    document.body.appendChild(list);
}

createList("List item");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createAdjustableList(text,itemCount){
    let list = document.createElement("ul");
    for(let i =0; i<itemCount;i+=1){
        let item = document.createElement("li");
        item.innerText = text;
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

createAdjustableList("Adjustable list item",5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function convertArrayToList(elements){
    let list = document.createElement("ul");
    for(let el in elements){
        let item = document.createElement("li");
        item.innerText = elements[el];
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

convertArrayToList([1,2,5,"hello",false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayPersons(persons){
    for(let i in persons){
        let person = persons[i];
        if(person.id != null && person.name != null && person.age != null){
            let personData = document.createElement("div");
            let id = document.createElement("p");
            let name = document.createElement("p");
            let age = document.createElement("p");
            id.innerText = `Id: ${person.id}`;
            name.innerText = `Name: ${person.name}`;
            age.innerText = `Age: ${person.age}`;
            personData.append(id,name,age);
            document.body.appendChild(personData);
        }
        else{
            console.log("Invalid person");
        }
    }
}

displayPersons([{id:1,name:"Petro",age:14},{id:2,name:"Oksana",age:23}]);
// - створити функцію яка повертає найменьше число з масиву
function getMin(arr){
    let min =  null
    for(let el in arr){
        if(min == null){
            min = arr[el];
        }
        if(arr[el] < min){

            min = arr[el];
        }
    }
    return min;
}

console.log(getMin([9,34,1,54,32,11,-5]));
console.log(getMin([1,2,3]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum = 0
    for(let el in arr){
        sum += arr[el];
    }
    return sum;
}

console.log(sum([4, 23, 18]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    let newArr = [];
    for(let el in arr){
        newArr[el] = arr[el];
    }
    newArr[index2] = arr[index1];
    newArr[index1] = arr[index2];
    return newArr;
}
let p = [1,2,3,4,5]
console.log(swap(p, 2, 4));
console.log(p);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,rates,currency){
    let rate = null;
    for(let el in rates){
        if(rates[el].currency === currency){
            rate = rates[el].value;
        }
    }
    if(rate == null){
        console.log("Selected currency not present in values");
        return -1;
    }else{
        return sumUAH/rate;
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
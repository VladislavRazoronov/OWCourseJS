// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
let len = (line) => console.log(line.length);

strings.forEach(len);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpr = (line) => line.toUpperCase();

let upperStrings = strings.map(toUpr);
console.log(upperStrings);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strings2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

let toLwr = (line) => line.toLowerCase();

let lowerStrings = strings2.map(toLwr);
console.log(lowerStrings);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';

console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';

let stringToArray = (str) => str.split(" ");

let arr = stringToArray(str1);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0];

let result = nums.map((num)=>""+num);
console.log(result);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums1 = [11,21,3];

let sortNums = (nums, order) =>{
    if(order === "ascending"){
        return nums.sort((a,b)=>a-b)
    }else if(order === "descending"){
        return nums.sort((a,b)=>b-a)
    }else console.log("wrong order")
}
console.log(sortNums(nums1, 'ascending')); // [3,11,21]
console.log(sortNums(nums1, 'descending')); // [21,11,3]

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

console.log(coursesAndDurationArray.sort((a,b)=>b.monthDuration - a.monthDuration)
    .filter((x)=>x.monthDuration > 5)
    .map((x)=>{return {id:x.title.charCodeAt(2)*x.monthDuration+100*x.title.charCodeAt(0),title:x.title,monthDuration:x.monthDuration}}))

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deck = []
for(let cardSuit of ['spade', 'diamond','heart', 'clubs']){
    let color;
    if(cardSuit === 'diamond' || cardSuit === 'heart'){
        color = 'red';
    }else{
        color = 'black';
    }
    for(let value of ['6','7','8','9','10','ace','jack','queen','king','joker']){
        deck.push({cardSuit:cardSuit,value:value,color:color});
    }
}
// - знайти піковий туз
console.log(deck.filter((card)=>card.cardSuit === 'spade' && card.value === "ace"))
// - всі шістки
console.log(deck.filter((card)=> card.value === "6"))
// - всі червоні карти
console.log(deck.filter((card)=> card.color === "red"))
// - всі буби
console.log(deck.filter((card)=> card.cardSuit === "clubs"))
// - всі трефи від 9 та більше
console.log(deck.filter((card)=>card.cardSuit === 'diamond' && !(card.value in ["6","7","8","9"])))
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let obj = {
    spades:[],
         diamonds:[],
     hearts:[],
     clubs:[]
 };

obj = deck.reduce((obj,card)=>{
    if(card.cardSuit === "spade") obj.spades.push(card);
    else if(card.cardSuit === "diamond") obj.diamonds.push(card);
    else if(card.cardSuit === "heart") obj.hearts.push(card);
    else if(card.cardSuit === "clubs") obj.clubs.push(card);
    return obj;
},obj);

console.log(obj);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter((course)=>course.modules.indexOf("sass") !== -1));

console.log(coursesArray.filter((course)=>course.modules.indexOf("docker") !== -1));
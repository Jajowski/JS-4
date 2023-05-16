let numbers=[5, 25, 89, 120, 36];

numbers.push('javascript', 'python');
numbers.unshift('html', 'css')
console.log(numbers.length)
numbers.shift()
numbers.pop()
console.log(numbers)

// 2
let khili=['portokhali', 'banani', 'mskali']
console.log(khili.length)
khili.push('vashli', 'ananasi')
khili.unshift('sazamtro')
console.log(khili.length)
khili.splice(2,0,'mango')
khili.shift()
khili.pop()
console.log(khili.length)


// 3
let array =[1, 2, 3, 4, 5];
array.splice(3,0, 'a', 'b', 'c');
console.log(array)

// 4
let arr = [1, 2, 3, 4, 5];
let sumvalue=0;
arr.forEach (function(element){
    sumvalue=sumvalue+=element;
});
console.log(sumvalue);


// 
let firstnumber=100;
for (let i=100; i>0; i--);
{console.loge(i)}

// 6
let ori= function(x,y){
    if (x>y) {console.log("num1 is the largest");}
    else if (y>x) { console.log ("num2 is the largest")}
    else {console.log('error')
}}
ori(1,2);

// 7
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];
let newarray2=array2.map(function(x){return x/3})
console.log(newarray2)

// 8
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let newlanguages=languages.filter(function(item){return item.length>3;})
console.log(newlanguages);

// 9
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let newwords=words.filter(function(item){return item.includes('m') ||('M');}) 
console.log(newwords);

// 10

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arrconcat=arr1.concat(arr2, arr3);
console.log(arrconcat);

// 11
let arr4 = [-1, -2, -3, 4].some(function(x){return x>0;})

// 12
let array3=[2, 15, 10, 24];
array3.splice (2,1);
//FOR
let myArray = [1,2,3,4,5];
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    console.log(i);
    console.log(myArray[i]);
    myArray[i] = myArray[i].toString();
}
console.log(typeof myArray[1]);
console.log(myArray);

//Foreach

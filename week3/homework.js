let myString = 'hello,this,is,a,difficult,to,read,sentence' ;
console.log(myString);
console.log(myString.length);

for(let i = 0 ;i < myString.length;i++){
    
let re = myString[i].replace(',',' ')
console.log(re);
}
let favoritAnimals = ['blowfisch','capricon','giraffe'] ;
favoritAnimals.push('turtle');
console.log(favoritAnimals);

favoritAnimals.splice(1 ,0,'meerkat');
console.log(favoritAnimals);
console.log(  'the array has a length of ' + favoritAnimals.length);
favoritAnimals.splice(3);
console.log(favoritAnimals);

console.log( 'the item you are looking for is at index :' +favoritAnimals.indexOf('meerkat'));
function sum (x,y,z){
 return console.log(x + y + z) ;   
}
function colorCar (color){
  return console.log('a ' + color + ' Car')  
}
sum(3,4,5);
function myFunction(arg) {
  console.log(arg.var1 + ' ' + arg.var2 + ' ' + arg.var3);
}

myFunction ({ var1: "Option 1", var2: "Option 2", var3: "Option 3" });

function vehicleType (color,code){
let type = {
car : 'Car',
motorbike : 'motorbike'
 }  ;
if (code === 1 ) {
console.log('a ' + color + ' ' + type.car);
}
else if (code === 2 ){
    console.log('a ' + color + ' ' + type.motorbike);
    
}

}
vehicleType('blue' , 2);
; 
console.log(3 === 3 ? true : false);
let type = ['Car' ,'motorbike','caravan','bike'];

function vehicle (color,code,age){

         let val ;     
         if (code ===  1 ) {
          age > 1 ? val = 'used' : val =  'new';
            console.log('a ' + color + ' ' +   val + ' ' + type[0]);
            }
            else if (code === 2   ){
          age > 1 ? val = 'used' : val =  'new';          
                console.log('a ' + color + ' '  +  val +  age +type[1]);
          
            }
           else if (code ===  3 ) {
          age > 1 ? val = 'used' : val =  'new';
          
                 console.log('a ' + color + ' ' +   val + ' ' + type[2]);
                 }
                 else if (code === 4  ){
          age > 1 ? val = 'used' : val =  'new';
          
                     console.log('a ' + color + ' '  +   val + ' '  + type[3]);
               
                 }

}
vehicle('blue',4 ,1);
// we get the third element using the name of object and the name of element in  this case type.caravan
// of we used a array the code will be array[index]

  let f = type.toString();
console.log('Amazing Joes Garage , we service ' + f);
vehicle("green" , 3, 1);



// i could not Creat the for loop because the for loop will print the sentence in every rond of the iteratio
// for (let i = 0 ; i < array.length ; i++  ){ the sentence}

let Obj = {

  teachers: ['jim','unmeshjoshi' , 'dine' , 'philipp'],
  languages : ['HTMl' , 'CSS' , 'JavaScript']

};
let x = [1,2,3];
let y = [1,2,3];
let z = y ;
// when we write == then we dont check the type of the value so x==y is true and when we use === the we check the typs of the varaibles
let bar = 42;
typeof typeof bar ;
// this wil return a string because we used a two times typeof and the last typeof is STRING
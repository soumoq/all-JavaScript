/*
var firstName='soumo';
console.log(firstName);
var  age = 20;
var fullAge=true;

console.log(fullAge);
*/

//Type coercion ------------------------
var name='soumo';
var isTrue=true;
console.log(name +' is programmer '+isTrue);

//variable mutation and alert and prompt------------------------
var age=28;
 name = 'ujjwal';

//var lastName=prompt('What is his last name: ');  //input from user
//alert(name+' '+lastName);


//typeof operator and logical operator--------------------------
 var soumoAge=23;
 var mistiAge= 22;
 var ageCompare=soumoAge>mistiAge;
 console.log(ageCompare);
 console.log(typeof ageCompare);



 //if else statement ---------------------------------------
 var stName='soumo';
 var stStatus='avg';
 if(stStatus === 'good')
   console.log(stName+' '+stStatus);
 else {
   console.log(stName+' '+stStatus);
 }



var high=0;
if(high || high === 0)
 console.log("variable is defile");
 else
 console.log("variable is not defile");


 var num=20;
 if(num=='20')
 console.log(true)
  if (num === '20')
  console.log(false)



 //Switch case --------------------------------

 var i=2;
 switch(true)
 {
   case i>1:
     console.log("case 1");
     break;
   case 22:
     console.log("case 2");
     break;
   default:
     console.log("case 3");
     break;
  
 }



 //function -----------------------------------

 function sum(a,b)
 {
   return a,b;
 }

 console.log(sum(33,55));

//function expression
var whatDOYouDo = function(a,b){
  return a+b;
}

console.log(whatDOYouDo(2,2));


//array in js
var allName =['soumo','Misti','Sree'];
var allNames=new Array('soumo','Misti','Sree');
console.log(allNames[2]);

//objects
var me={
  fastName: 'soumo',
  lastName: 'ganguly',
  cdob: 2020,
  family: ['mom','dad','brother','sister'],
  calculate: function (dob){
    return this.cdob-dob;
  }
};

console.log(me.calculate(1997))


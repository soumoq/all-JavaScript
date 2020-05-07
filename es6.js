// let and const--------------------------------
let name6='soumo';
const age=26;
console.log(age);

//IIFE-------------------------------
{
    const a=1;
    const b=2;
    console.log(a+b);
}

//String----------------------------
let fastname='soumo';
let title='ganguly';

function yob(age)
{
    return `The yob is ${2020-age}`;
}
 console.log(yob(26));
 

 //arrow function--------------------
 const year=[1990,1991,1992,1993];
 var age5=year.map(function(el){
    return 2020-el;
 });

console.log(age5);

let age6=year.map(el => 2020-el);
console.log(age6);

age6=year.map((el,index)=>`age element ${index+1}:${2020-el}`);
console.log(age6);

age6=year.map((el,index)=>{
  console.log(`inseide arrow function`);
  const now =new Date().getFullYear();
  const age=now - el;
  return age;
})

console.log(age6);


//this keyword

const persion = {
    name:`soumo`,
    age:23,
    
    dob:(arg)=>
    {
        console.log(`inside arrow function`);
        
        return `the arg is ${arg} and yob is ${2020-persion.age}`;
    }
}

console.log(persion.dob());


const obj={
    fastname1: 'Misti',
    lastname1: 'ganguly'
};
const{fastname1,lastname1}=obj;
console.log(fastname1);
console.log(lastname1);


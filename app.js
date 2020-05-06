//Inheritance in JS -------------------------------------
var Persion = function(name,dob,job)
{
    this.name=name;
    this.dob=dob;
    this.job=job;
};

Persion.prototype.calculateAge = function()
{
    console.log(2020-this.dob);
}

Persion.prototype.lastname='puchu'


var soumo = new Persion('soumo',1997,'programmer');
var misti=new Persion('Misti',1998,'developer');

soumo.calculateAge();
misti.calculateAge();
console.log(soumo.lastname);
console.log(misti.lastname);


//Object.create-----------------------------------------
var persionProto = {
    age: function()
    {
        console.log(2020-this.rage);
    }
}

var soumo = Object.create(persionProto);
soumo.name='soumo';
soumo.dob=1997;
soumo.lastname='ganguly';

var sree =Object.create(persionProto,{
    name : {value : 'sree'},
    dob : {value : 1999},
    job : {value : 'programmer head'},
    calculateAge : {value : function(){
        2020-this.dob;
    }}
});


//object vs premetive

var a=30;
var obj = {
    name : 'soumo',
    age : 20
};

var fun = function(a,b)
{
    a=20;
    b.age=25;
}

fun(a,obj);
console.log(obj.age);
console.log(a);


//call back function------------------------------------
var fun1=function(a)
{
    console.log("call fun1 "+a);
}

var fun2=function(arg)
{
    var a=20;
    console.log("call fun2");
    arg(a);
}

fun2(fun1);


//another way
var fun3=function(callback)
{
    console.log("call fun3");
    callback(30);
}

fun3(function fun4(a){
    console.log("call fun4 "+a);
});

//anonymous function --------------------------------

var fun5=function(callback,callback1)
{
    console.log("call fun5");
    callback();
    callback1(50);
}

fun5(function(){
    console.log("anonymous call fun 6");
},function (params) {
    console.log("anonymous call fun7 " +params);
});



//function return function --------------------------------

function interviewQue(job) {
    if(job==='programmer')
    {
        return function(name)
        {
            console.log(name+" is a programmer");
        }
    }
    else if(job==='teacher')
    {   
        return function(name)
        {
            console.log(name+" is a teacher");
        }
    }
    else{
        return function(name)
        {
            console.log(name+" go fuck your self");
        }
    }
}

var que=interviewQue('programmer');
que('Misti');
var que1=interviewQue('lol')('soumo');

//immediately invoked function expression ----------------------
function game() {
    var score=Math.random()*10;
    console.log(score>=5);
}
game();

(function()
{
    var score=Math.random()*10;
    console.log(score>=5);
})();

(function(goodluck)
{
    var score=Math.random()*10;
    console.log(score>=5-goodluck);
})(5);



//Closures-------------------------------------
function retuirment(rage,cuntry)
{
    var a=' years untill retirments'; //Closures
    return function(dob)
    {
        var age= 2020-dob;
        console.log(rage-age+a+" for "+cuntry);
    }
}

retuirment(65,'US')(1967);
retuirment(60,'India')(1967);
retuirment(67,'Iceland')(1967);
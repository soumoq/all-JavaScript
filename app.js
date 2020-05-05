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
})
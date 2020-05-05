
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
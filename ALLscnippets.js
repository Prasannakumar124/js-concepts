/*--------------------call Apply Bind---------------------*/
// var wipro={
//     empName:'prasanna',
//     empSalary:50000,
// }
// var GetEmpDetails=function(){
//     console.log('EmpName: '+this.empName +" "+'EmpSalary'+this.empSalary)
// }


// GetEmpDetails.call(wipro);

// GetEmpDetails.get();




        /* call with arguments*/
// var wipro={
//     empName:'prasanna',
//     empSalary:50000,

// }
// var GetEmpDetails=function(arg1,arg2,arg3){
//     console.log('EmpName: '+this.empName +" "+'EmpSalary'+this.empSalary
//     +" "+arg1+" "+arg2+" "+arg3)
// }

// // GetEmpDetails('niceperson','goodperson','excellentperson')

// GetEmpDetails.call(wipro,'niceperson','goodperson','excellentperson');

                /* apply*/

// var wipro={
//     empName:'prasanna',
//     empSalary:50000,

// }
// var GetEmpDetails=function(arg1,arg2,arg3){
//     console.log('EmpName: '+this.empName +" "+'EmpSalary'+this.empSalary
//     +" "+arg1+" "+arg2+" "+arg3)
// }

// // GetEmpDetails.apply(wipro,['niceperson','goodperson','excellentperson']);

// array=['niceperson','goodperson','excellentperson'];

// GetEmpDetails.apply(wipro,array);

/*Bind.js*/

// var fullNameofEmp=[{
//     firstName:'prasanna',
//     lastName:'kumar'
// }]
// var wipro={
//     empName:'prasanna',
//     empSalary:50000,
//     fullNameofEmp:[
//     {
//         firstName:'prasanna',
//         lastName:'kumar'

//     }
//     ]
// }
// var GetEmpDetails=function(){
//     console.log(
//     'EmpName: '+this.fullNameofEmp.firstName[0] 
//     +" "
//     +'LastName'+this.fullNameofEmp.lastNameName[1])
// }
// var calldata=GetEmpDetails;
// calldata.bind(wipro);

/*--------------------------Es6 Features--------------------------*/

// const a = {namv : "Jhon Doe"}
// // a = {name : "Jen Doe"} // this not allowed 
// a.name = "Jen Doe" // this allowed

/*-----------Interview Questions -------------- */
// var p= new Promise((resolve,reject)=>{
//     var x=10;
//     var y=20;
//     var res=x+y;
//     if(res==20){
//     resolve(res);    
//     }else{
//         reject(res);
//     }
// })
// p.then(
// (sucessdata)=>{console.log('result:',+sucessdata)},
// (unsucess)=>{console.log("Err",unsucess)}).catch(console.log("sum of data is not equal== 20"));

/*------------snippet 1-------------------*/
// const object1 = {
//   property1: 42
// }

// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

// console.log(descriptor1.configurable);


// console.log(descriptor1.value);


// function person(name,age){
//   this.name=name;
//   this.age=age;
//   this.details=function(){
//     console.log(this.name+""+this.age);
//   }
// }

// var obj=new person("pk",25);
// obj.details();

// function fun(input){
// let a=100;
// if(input){
//   let b=a+1;
//   return b;
// }
// return b;
// }
// fun(true);


/*-------------------snippet 12------------------- */

// let privateObj={
//     name:"kumar"
// }

//  const aboutHim=function(){
//     console.log(` Name : ${this.name} is a good person `);
// }

// aboutHim.call(privateObj)


// var poly=1235;
// res=poly
// var rem,final=0;
// while(poly>0){
//     rem=poly%10;
//     poly=parseInt(poly/10);
//     final=final*10+rem;


// }
// if(final==res){
//     console.log("polyndram")
// }
// else{
//     console.log("Not a polyndram");
// }






// var x=[1,2,3,4,5,6,7,8,9,10] 

// console.log(x); 

// console.log(x.slice(0,3)); 

// console.log(x.slice(3)); 
// console.log(x.slice(2,3)); 

// console.log(x.slice(0,-1)); 

// console.log(x.slice(0,-2)); 

// console.log(x.slice(1,-1)); 

// console.log(x.slice(-1));
// console.log(x.slice(-2,-1));
// console.log(x.slice(-1,-2));




// var counter = 5; 

//                 function add() { 

//                   var counter = 0; 

//                     counter =counter+ 1; 

//                     console.log(counter); 

//                 } 

//                 add(); 

//                 add(); 


//                 var x=[1,2,3,5,6,7,8] 

// var res=(acc,cur)=>acc+cur; 

// console.log(x.reduce(res)); 


// var a=[1,2,3,4,5]; 

  

// var result=a.map(n=> {return n*2}); 

// console.log(result); 



// for(var i=0;i<10;i++){ 

//     setTimeout(()=>{console.log(i)},0) 

// } 


// var a=[1,2,3,4,5]
// var b=6;
// var ar2=[6,7,8,9,10]
// if(a.find(i=>{return i==b})){
//     console.log(a.find(i=>{return i==b}))
//     console.log('found')
// }
// else{
//     console.log(a.find(i=>{return i==b}))
//     console.log('not found')
// }
// var result=a.concat(ar2);
// var result=a.push(ar2);
// console.log(result)



// let evilResponse = { 
//   "car" : 
//     { 
//        "color" : "red",
//        "model" : "2013"
//     },
//    "motorcycle": 
//     { 
//        "color" : "red",
//        "model" : "2016"
//     },
//    "bicycle": 
//     { 
//        "color" : "red",
//        "model" : "2011"
//     }
// }
// // Step 1. Get all the object keys.
// let evilResponseProps = Object.keys(evilResponse);
// // Step 2. Create an empty array.
// let goodResponse = [];
// // Step 3. Iterate throw all keys.
// for (prop of evilResponseProps) { 
//     goodResponse.push(evilResponseProps[prop]);
// }

// console.log(goodResponse);

/*----------------------snippet -12---------------*/
// console.log(true + false)
// console.log(12 / "6")
// console.log("number" + 15 + 3)
// console.log(15 + 3 + "number")
// console.log([1] > null)
// console.log("foo" + + "bar")
// console.log('true' == true)
// console.log(false == 'false')
// console.log(null == '')
// console.log(!!"false" == !!"true")
// // console.log([‘x’] == ‘x’)
// console.log([] + null + 1)
// console.log([1,2,3] == [1,2,3])
// console.log({}+[]+{}+[1])
// console.log(!+[]+[]+![])
// console.log(new Date(0) - 0)
// console.log(new Date(0) + 0)
/*----------------------snippet -2---------------*/

// function person(name,age){
// //     var data={}
//     data.name=name;
//     data.age=age;
// //     return data;
// }

// // var p1= person("pk",25)
// // console.log(p1);
// // var p2= person("kp",50);
// // console.log(p2);

// var p3=new person("yshu",35);
// console.log(p3);

// function employee(name,salary){
//  this.name=name;
//  this.salary=salary;

// }

// var emp1= new employee("prasanna",50000);
// console.log(emp1);


// setTimeout(()=>{
//     for(let i=0;i<=10;i++){
//     console.log(i)    
//     } 
// // console.log(i)
    
// },1000)


// setTimeout(()=>{
//     for(var i=0;i<=10;i++){
//     console.log(i)    
//     } },100)

/*----------------------snippet -3---------------*/
// //// const a ={
// //     name:"prasanna",
// //     age:27
// // }
// // const b=a;

// // b.name="kumar"
// // console.log(a.name);

// // const a=30;
// // const b=a;
// // // a=40;

// // console.log(a);
// // // b=44;
// // console.log(b);

// // var arr=[1,2,3,4]
// //  var sum=0;
// // for(i=0;i<=arr.length-1;i++)
// // {
// //     sum+=arr[i];

// // }
// // console.log(sum);

// // var sum=arr.reduce((a,b)=>{ return a+b; });
// // console.log(sum);

// // for(let i=0;i<=10;i++){
// //     setTimeout(()=>{console.log(i)},0)
// // }

// // let i=1;
// // function x(){
// //     console.log(i)
// // }
// // x();

// // if(true){
// //     let i=25;
// // let x=()=>{
// //     console.log(i)
// // }
// // }
// // x()

// // let x;
// // if(true){
// //     let i=25;
// //      x=()=>{
// //     console.log(i)
// // }
// // }
// // x()
// // console.log(i);



// let x;
// if(true){
//     let i=25;
//      x=()=>{
//     console.log(i)
// }
// }
// x()
// console.dir(x);

// function Details(fname,lname){
//     this.firstname=fname;
//     this.lastname=lname;
//     this.fullname=function(){
//         console.log(this.firstname+" "+this.lastname);
//     } 
// }
// var p1=new Details('prasanna','kumar')
// p1.fullname();
// var p2=new Details('Benson','Neal')
// p2.fullname();
// console.log(p1);
// console.log(p2);
// console.log(Details.prototype);

//  function Details(fname,lname){
//      this.firstname=fname;
//      this.lastname=lname;
//  }
//  Details.prototype.fullname=function(){
//     console.log(this.firstname+" "+this.lastname);     
//  }
// var p1=new Details('prasanna','kumar');
// // p1.fullname()
// console.log(p1)
// var p2=new Details('Benson','Neal');
// // p2.fullname();
// console.log(p2);

// function empty(){

// }

// empty.prototype.name="prasanna";
// empty.prototype.age=26;
// empty.prototype.fullname=()=>{
//     console.log( empty.prototype.name +"and Age is "+empty.prototype.age);
// }
// var p1 =new empty();
// console.log(p1);
// p1.name="prasanna"
// console.log(p1.name);
// console.log(p1.age);

// // data.fullname();

// var p2=new empty()
// p2.name="Benson";
// console.log(p2.name);
// console.log(p2.age);


// function empty(){
// }
// empty.prototype.name="prasanna";
// empty.prototype.age=26;
// empty.prototype.fullname=()=>{
//     console.log( empty.prototype.name +"and Age is "+empty.prototype.age);
// }
// empty.prototype.hobbies=['singing','reading','playing'];
// var p1 =new empty();
// console.log(p1.name);
// console.log(p1.hobbies);
// var p2=new empty()
// p2.name="pk"
// console.log(p2.name);
// console.log(p2.hobbies);
// p1.hobbies.push('eating');
// console.log(p1.hobbies);
// console.log(p2.hobbies);

// function empty(){
// }
// empty.prototype.name="prasanna";
// empty.prototype.age=26;
// empty.prototype.fullname=()=>{
//     console.log( empty.prototype.name +"and Age is "+empty.prototype.age);
// }
// empty.prototype.hobbies=['singing','reading','playing'];
// var p1 =new empty();
// console.log(p1.hobbies);
// var p2=new empty()
// console.log(p2.hobbies);
// p1.hobbies.push('eating');
// console.log(p1.hobbies);
// console.log(p2.hobbies);



// function empty(name,age){
//     this.name=name;//all specific properties inside constructor
//     this.age=age;
//     this.hobbies=["singing","reading","playing"];
// }
// empty.prototype.fullname=()=>{
//     //all shared properties and methods are inside prototype
//     console.log( this.name +"and Age is "+this.age+"hobbies are :"+ this.hobbies);
// }
// var p1 =new empty('prasanna',26);
// console.log(p1);
// p1.hobbies.push('eating');
// console.log(p1);
// var p2=new empty('Benson',26)
// console.log(p2);

/*----------------------snippet -4---------------*/
// function BasicDetails(name,age){
//     this.name=name;
//     this.age=age;
// }

// BasicDetails.prototype.GetBasicDetails=function(){
//     console.log(`Name : ${this.name} Age: ${this.age}`);
// }

// function CompanyDetails(name,age,CName,Csalary){
//     BasicDetails.call(this,name,age);
//     this.companyName=CName;
//     this.companySalary=Csalary;
// }

// CompanyDetails.prototype.GetCompanyDetails=function(){
//     console.log(` Name : ${this.name} Age: ${this.age} CompanyName: ${this.companyName} CompanySalary: ${this.companySalary}`);
// }


// // companyDetails.prototype= new BasicDetails('prasanna',26);

// // companyDetails.prototype=Object.create(BasicDetails,"prasanna",27);

// // var B1=new BasicDetails('prasanna',26)


// var person=new CompanyDetails("prasanna",26,"google",60000);

// // person.name="prasanna"
// // person.age=26;

// person.GetCompanyDetails();
/*----------------------snippet -5---------------*/
// function x(){
//     var a=10;
//     b=40
// }
// x()
// console.log(b);

// var a=[1,2,3,4,5];

// var result=a.map(n=> {return n*2});
// console.log(result);

// var output=a.reduce((ac,n)=>{ return ac+n})
// console.log(output);

// var even=a.filter(n=>{ return n%2==0})
// console.log(even);

// var emp={
//     name:'prasanna',
//     age:26,
//     skills:{
//         frontend:'javascript',
//         backend:'node'
//     }

// }
// let {name,age,skills}=emp

// // console.log(name+" "+age)
// // console.log(skills.frontend);

// function details({name,age,skills:{frontend,backend}}){
// console.log(frontend)
// console.log(backend)

// }
// details(emp)

// console.log(true<2>0)


// function xyz(arrray_){
//     arrray_.forEach((item)=>{console.log(item)})
// }
// // xyz(null);
// // xyz(undefined);
// xyz([1,2,3,4]);

// var a=[1,2,3]
// var b=[4,5,6]

// // var res=a.concat(b)
// var data=[...a,...b];
// console.log(data);

// var a={}
// var b={key:'b'};
// var c={key:'c'};
// a[b]=123;
// a[c]=464
// console.log(a[b]);


// function sum(x,y){
//     console.log(x+y);
// }
// function mul(x,y){
//     console.log(x*y);
// }

// function passfirstargument(arg1,callback){
//     callback(arg1,10)
// }

// passfirstargument(10,sum)
// passfirstargument(10,mul)

/*----------------------snippet -7---------------*/

var log=console.log;
var person={
    age:26
};

Object.defineProperty(person,'name',{
    value:"prasanna",
    writable:true,
    configurable:false,
    enumerable:false })

Object.defineProperties(person,{
    salary:{
        value:50000,
        writable:true,
        enumerable:true
    },
    mobileNo:{
        value:9550335422,
        enumerable:true
    },
    addres:{
        value:"12/16,xyz colony",
        enumerable:false
    }
})

// // for(key in person){
// //     console.log(key+":"+person[key]);
// // } 

// // console.log('addres' in person);
// // log(Object.isExtensible(person))
// person.position="software Engineer"
// // log(person)

// // Object.preventExtensions(person);

// // person.DOB="11-03-93"

// // log(person);

// // log(Object.isFrozen(person));

// for(key in person){
// //     console.log(key+":"+person[key]);
// //     console.log("data in obj : "+key+":"+person[key]+""+" \n" +"property of object : "+person.name);
// } 

// Object.freeze(person);

// log(Object.isFrozen(person));

// person.name="BensonNeal";
// person.age=50;
// log(person);

// delete person.age;
// log(person);

// log(Object.isSealed(person));
// // delete person.age
// log(person);

// Object.seal(person);
// log(Object.isSealed(person));
// delete person.age
// person.age=90;
// log(person)



// //if salary property is writable is false
// person.salary=25000;
// log(person.salary);

// //if salary property writable is true
// person.salary=90000;
// log(person.salary);

// for(key in person){
//     console.log(key+":"+person[key]);
// } 

// log(person)//if salary property is writable is false
// person.salary=25000;
// log(person.salary);

// //if salary property writable is true
// person.salary=90000;
// log(person.salary);

// for(key in person){
//     console.log(key+":"+person[key]);
// } 

// log(person)


// console.log(person,person.name);
// for(key in person){
//     console.log(key+":"+person[key]);
//     console.log("data in obj : "+key+":"+person[key]+""+" \n" +"property of object : "+person.name);
// } 
// log(Object.defineProperties(person,name));
// log(Object.getOwnPropertyNames(person));/*list of all propertyNames*/
// var res=Object.getOwnPropertyDescriptor(person,'name')
// log(res.configurable);



// const numbers = {
//   one: 1,
//   two:2
// };
// const objectArray = Object.entries(numbers);
// objectArray.forEach(([key, value]) => {
// //   console.log(key); // 'one'
// //   console.log(value); // 1
//   console.log(key +": "+ value)
// })

/*----------------------snippet -8---------------*/
// var emp={
//     name:'prasanna',
//     child:{
//         name:'kumar',
//         child:{
//             name:'hemu',
//             child:{
//                 name:'suku',
//                 child:null
//             }
//         }
//     }
// }

// var arr=[];

// function getdata(details){    
// details.name ? arr.push(details.name) : ""    
// details.child && details.child instanceof Object ? getdata(details.child) : ""
// return arr
// }

// console.log(getdata(emp))

// var z=[1,2,3];
// if(z instanceof Array){
// console.log(typeof(z));
// }

// console.log(!"true");

//  var obj={
//     company:'RR',
//     model:'R2500',
//     units:75
// }
// for( key in obj){
//      console.log(key+": " + obj[key] );
//  }

// var arr=[10,[10,11,23],{a:10,b:20},[20,{c:20,d:40,e:[3,3,{a:5,b:5}]}]]
// var newarray=[];
// function objiterator(obj){
//              for(key in obj){
//                  if(obj[key] instanceof Array){
//                      sumdata(obj[key])
//                  }else{
//                      newarray.push(obj[key])
//                  }
             
//         }   

// }

// function sumdata(data){
// for(var i=0;i<=length;i++){
//  typeof(data[i])==='number'?newarray.push(data[i]):
//  data[i] instanceof Array?sumdata(data[i]):
//  data[i] instanceof Object?objiterator(data[i]):''     
//             }
// }
// sumdata(arr);
// console.log(newarray.reduce((acc,value)=>{ return acc+value}));
/*----------------------Object creation vs constructor-------------*/

// function x(name){
//     this.Name=name
// }
// x.prototype.xNamedetails=function(){
//     console.log(" X prototype function Name details")
// }
// y
// function y(Age){
//     this.age=Age;
// }
// y.prototype.yAgeDetails=function (){ console.log("y prototype Age Details")}


// var xdata=new x('prasanna');

// y.call(xdata);

// var ydata=new y(25);

// // console.log(xdata);
// // xdata.xNamedetails()

// console.dir(y);
// console.log(ydata);
// ydata.yAgeDetails()
// // ydata.xNamedetails();// TypeError: ydata.xNamedetails is not a function

// function x(name){
//     this.Name=name
// }
// x.prototype.xNamedetails=function(){
//     console.log(" X prototype function Name details")
// }
// // function y(Age){
// //     this.age=Age;
// // }
// // y.prototype.yAgeDetails=function (){ console.log("y prototype Age Details")}
// var xdata=new x('prasanna');
// var ydata=Object.create(x);

// console.log(xdata);
// console.log(ydata);

// function x(name,age){
//     this.name=name;
//     this.age=age;
//     this.details=function(){
//         console.log(this.name+"" +this.age)
//     }
// }

// var c1=new x('kumar',25)
// console.log(c1);
// c1.salary=25000;
// console.log(c1);
// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };
// console.log(person);

// const me = Object.create(person);
// console.log(me);
// me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// // expected output: "My name is Matthew. Am I human? true"

/*-----------------prototype---------------------- */
// what is prototype?

// The prototype is an object that is associated with every functions and objects by default in JavaScript,
// where function's prototype property is accessible and modifiable and
// object's prototype property (aka attribute) is not visible.

// Every function includes prototype object by default.

// function x(name){
//     this.name=name
// }
// console.dir(x);

/* OUTPUT:
arguments: null
caller: null
length: 1
name: "x"
prototype:
constructor: ƒ x(name)
                arguments: null
                caller: null
                length: 1
                name: "x"

__proto__: Object
            constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

__proto__: ƒ ()

[[FunctionLocation]]: prototype.js:7
[[Scopes]]: Scopes[1]
*/

// function company(){
//                 this.name='gk group';
//                 this.founder='pk'

// }
// var cmp1=new company()
// company.prototype.place='banglore';
// console.log(cmp1);//place is enumerable property in prototype object
// var cmp2=new company();
// console.log(cmp2);//place is enumerable property in prototype object
// console.log(cmp2.place);
//console.log(company.prototype);
// console.log(cmp1.prototype);



// var arr=[3,4,5];
// Array.prototype.first=function(){
//                 return this[0];
// }
// console.log(arr.first());









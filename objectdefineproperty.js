00/***************************************
Property Descriptors Methods and Usage
Object.defineProperty(obj, propName, {} )
Object.defineProperties(obj, props)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertyDescriptor(obj, prop)
Object.getOwnPropertyDescriptors(obj)
Object.keys(obj) - list of enumerable properties
Object.values(obj) - list of enumerable prop values
obj.propertyIsEnumerable(prop)
obj.hasOwnProperty(prop)

Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props can't be deleted or configured
            but are values can be changed


Object PROPERTIES can be 
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Configurable - change the property descriptors

Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)

Descriptor Groups
DATA            ACCESSOR          
value           get
writable        set
configurable    configurable
enumerable      enumerable
****************************************/

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
        writable:false,
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

for(key in person){
    console.log(key+":"+person[key]);
} //it wont dispay enumerable:false properties

log(person);//it display all properties

log(Object.getOwnPropertyNames(person));/*list of all propertyNames*/

log(Object.getOwnPropertyDescriptor(person,'name'))/*{value: "prasanna", writable: true, enumerable: true, configurable: false} */
log(Object.getOwnPropertyDescriptor(person,'age'))/*{value: 26, writable: true, enumerable: true, configurable: true} */

log(Object.getOwnPropertyDescriptors(person));

log(Object.keys(person));//list of enumerable properties

log(Object.values(person))  //list of enumerable prop values

log(person.propertyIsEnumerable('name'));//false to check what the Enumerable value
log(person.propertyIsEnumerable('age'));//true

log(person.hasOwnProperty('name'));//true to check the property is there or not in that object
log(person.hasOwnProperty('addres'))//true

log('addres' in person);// true it go through the prototype chain 

log(Object.isExtensible(person))//true

person.position="software Engineer"

log(person)

Object.preventExtensions(person); // it prevents extension of person object

person.DOB="11-03-93"

log(person);

log(Object.isFrozen(person)); //false

for(key in person){
    console.log(key+":"+person[key]);
    // console.log("data in obj : "+key+":"+person[key]+""+" \n" +"property of object : "+person.name);
} 

// Object.freeze(person);/* freeze is active stage Is sealed is also true */

log(Object.isFrozen(person)); // values doesnt change

person.name="BensonNeal";
person.age=50;
log(person.name);//prasanna
log(person.age);//25

log(person);

// delete person.age;// can not be deleted bcz it is in froozen state

log(person);

log(Object.isSealed(person));

Object.seal(person);

delete person.age

log(person);

person.age=90;

log(person);

//if salary property is writable is false
person.salary=25000;
log(person.salary);

//if salary property writable is true
person.salary=90000;
log(person.salary);

for(key in person){
    console.log(key+":"+person[key]);
} 

log(person)

// console.log(person,person.name);for(key in person){
    // console.log(key+":"+person[key]);
    // console.log("data in obj : "+key+":"+person[key]+""+" \n" +"property of object : "+person.name);
// } 
// log(Object.defineProperties(person,name));
// log(Object.getOwnPropertyNames(person));/*list of all propertyNames*/
// var res=Object.getOwnPropertyDescriptor(person,'name')
// log(res.configurable);

// var person={
//     name:'prasanna',
//     age:27,
//     getDetails:()=>{
//         return(`Name of person '${person.name}'  Age of Person: '${person.age}' `)
//     },
//     phoneNo:{
//         mobile:9550335422,
//         landline:16113165161,
//     }

// }    
// // console.log(person.getDetails());

// //object.defineProperties

// // Object.defineProperties(person, {
// //   name: {
// //     value:'prasanna',
// //     writable: true,
// //     enumerable:true,
// //     // configurable:true
// //   },
// //  age: {
// //     value:27,
// //     writable:true,
// //     configurable:true,
// //     enumerable:true
// //   }
// // });
// person.name='pk'
// console.log(person)
// // for( data in person){
// //     console.log(data +" : "+person[data]);
// // }




// //Constructor function

// function person1(name,age){
//     this.name=name;
//     this.age=age;
//     this.getData=()=>{
//         return (` Name of Person: '${this.name}' Age of Person: '${this.age}'`)
//     }
// }

// var p=new person1('Kumar',26);
// p.age="28";
// p.newProperty="Welcome New property"
// var p1=new person1('chinna',16);

// console.log(p.getData())
// console.log(p1.getData())
// console.log(p)


// //Object.create()

// const patient={
//     patientID:'P100',
//     condition:'high',
//     result:'cured',
//     Details:function(){
//         return(
//             `PatienID: ${this.patientID}
//              condition:${this.condition}
//              result:${this.result} 
//              MobileNO: ${this.mobileNo}
             
//             `
//         )
//     }
// }

// const newPatient=Object.create(patient);

// newPatient.patientID="P200"
// newPatient.condition='normal'
// newPatient.mobileNo=9550543030

// console.log(newPatient.Details());
// console.log(newPatient)



// /* Setter and Getters */  

/*
var person={ 

    firstname:"prasanna", 

    lastname:"kumar", 

    get fullname(){ 

        console.log("your FullName is: "+this.firstname+ " "+this.lastname); 

    }, 

    set fullname(name){ 

        var word=name.toString().split(' '); 

        this.firstname=word[0]; 

        this.lastname=word[1]; 

    } 

} 

person.fullname; 

person.fullname="Benson Neal" 

person.fullname; */
/*
var person={ 

    firstname:"prasanna", 

    lastname:"kumar", 

} 

Object.defineProperty(person,'fullname',{ 

    set:function(name){ 

        var words=name.toString().split(' '); 

        this.firstname=words[0]; 

        this.lastname=words[1]; 

    }, 

    get:function(){ 

          console.log("your fullname is : "+this.firstname+" "+this.lastname );   

    } 

}); 

person.fullname; 

person.fullname="Benson Neal"; 

person.fullname; 
*/
  
// var person={ 

//     firstname:"prasanna", 

//     lastname:"kumar", 

// } 

// Object.defineProperty(person,'age',{ 

//     value:26 ,
//     configurable:true

// }) 

// console.log(person.age); 

// person.age=55; 

// console.log(person.age); 

/*Classe */

// class vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine
//     }
//     getData(){
//         return(`
//         NameOfcar:${this.name},
//         NameOfMaker:${this.maker},
//         NameOfEngine:${this.engine}
//         `)
//     }
// }

// var car1=new vehicle('swift','pk','cz1000')
// var car2=new vehicle('BMW','kumar','cz2000');
// console.log(car1.getData());
// console.log(car2.getData());

//TraditionalWay

// function Vehicle(NAME,MAKER,ENGINE){
//     this.NAME=NAME,
//     this.MAKER=MAKER,
//     this.ENGINE=ENGINE
// }

// Vehicle.prototype.getvechicleDetails=function(){
//     return(`
// NameOfcar:${this.NAME},
// NameOfMaker:${this.MAKER},
// NameOfEngine:${this.ENGINE}
// `)
// }

// var car1=new Vehicle('swift','pk','cz1000')
// var car2=new Vehicle('BMW','kumar','cz2000');
// console.log(car1.getvechicleDetails());
// console.log(car2.getvechicleDetails());


/*Encapulsation = binding of member and membersfuntction into single unit*/

/*Inheritances  using class*/

// class EMPData{
//     constructor(EmpName,Empage){
//         this.EmpName=EmpName;
//         this.Empage=Empage;
//     }
//     // getEmpDetails(){
//     //     return(
//     //         `EmployeeName: ${this.EmpName}
//     //          EmployeeAge:${this.Empage}
//     //         `
//     //     )
// // }
//         getPersonalDetails(){
//             return(
//                 ` EmployeeName: ${this.EmpName}
//              EmployeeAge:${this.Empage}
//                 `
//             )
//         }
//     }

// class PersonalDetails extends EMPData{
//     constructor(EmpName,Empage,Address,mobileNO){
//         super(EmpName,Empage);
//         this.Address=Address;
//         this.mobileNO=mobileNO;

//     }
//     getPersonalDetails(){
        
//         return(
//             // `${super.getEmpDetails()}

//             `
//             ${super.getPersonalDetails()}
//              EmployeeName: ${this.EmpName}
//              EmployeeAge:${this.Empage}
//              EmployeeAdress: ${this.Address}
//              EmployeeMobileNumber:${this.mobileNO}
//            `
//         )
//     }
// }

// var emp1=new PersonalDetails('prasannaKumar',27,'Hno:13/243',9550335422)
// console.log(emp1.getPersonalDetails());

/*Inheritance in Traditional Way */

//1Way //using call()
/*function EmpData(EmpName,Empage){
            this.EmpName=EmpName;
            this.Empage=Empage;
        }

    EmpData.prototype.getEmpDetails=function(){
        return(
            `
            EmployeeName: ${this.EmpName} 
            EmployeeAge:${this.Empage}
            `
        )
    }
function PersonalDetails(EmpName,Empage,Address,MobileNO){
    EmpData.call(this,EmpName,Empage)
    this.Address=Address;
    this.MobileNO=MobileNO;


}

PersonalDetails.prototype.getpersonalDetails=function(){
    return(
        // EmployeeName: ${this.EmpName} 
        // EmployeeAge:${this.Empage}
        // ${this.EmpData.getEmpDetails()}
        `
        EmployeeName: ${this.EmpName} 
        EmployeeAge:${this.Empage}
        EmployeeAdress: ${this.Address}
        EmployeeMobileNumber:${this.mobileNO}
        ` )
}
var p1=new PersonalDetails('pk',25,'hn:13/243',9550335422)
console.log(p1.getpersonalDetails())

*/

/*//2Way   NOt Working //using 

function EmpData(EmpName,Empage){
    this.EmpName=EmpName;
    this.Empage=Empage;
}
EmpData.prototype.getEmpDetails=function(){
return(
    `
    EmployeeName: ${this.EmpName} 
    EmployeeAge:${this.Empage}
    `
)
}
function PersonalDetails(EmpName,Empage,Address,MobileNO){
this.Address=Address;
this.MobileNO=MobileNO;
}
PersonalDetails.prototype.getpersonalDetails=function(){
return(
// EmployeeName: ${this.EmpName} 
// EmployeeAge:${this.Empage}
// ${this.EmpData.getEmpDetails()}
`
EmployeeName: ${this.EmpName} 
EmployeeAge:${this.Empage}
EmployeeAdress: ${this.Address}
EmployeeMobileNumber:${this.mobileNO}
` )
}
PersonalDetails.prototype=Object.create(EmpData.prototype)
var p1=new PersonalDetails('prasanna',27,'hn:13/243',9550335422)
console.log(p1.getpersonalDetails())
*/

//prgm remove duplication of array


// var arr=[1,2,1,1,24,5,7,6,6,6] 
// var duparr=[]; 

// console.log("check:"+arr.indexOf(6));
/* forEach fetches values directly without iteration

example :

 arr.forEach(item=>console.log(item))

 */

// arr.forEach(ite => duparr.indexOf(ite) === -1 ? duparr.push(ite) : ''); 
//indexof() returns -1 the value of search never ocuurs
// console.log(duparr.sort((a,b)=>{return b-a}));

// for(var i=0;i<=arr.length-1;i++){
//     console.log(duparr.indexOf(arr[i]))
//     if(duparr.indexOf(arr[i])===-1){
        
//         duparr.push(arr[i])
//     }
// }

// console.log(duparr.sort((a, b) => { return a-b})); 
// console.log(duparr.reduce((acc,item)=>acc+item))












// function empty(){ 

  

// } 

//  empty.prototype.name="prasanna"; 

// empty.prototype.age=26; 

// empty.prototype.fullname=()=>{ 

//     console.log( empty.prototype.name +"and Age is "+empty.prototype.age); 

// } 

// var p1 =new empty(); 

// console.log(p1); 

// // data.fullname(); 

//  var p2=new empty() 

// p2.name="Benson"; 

// console.log(p2.name); 

// console.log(p2.age); 

//  function empty(){ 

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



/*CAll()*/ 

    var pokemon = { 

        firstname: 'Pika', 

        lastname: 'Chu ', 

        getPokeName: function() { 

            var fullname = this.firstname + ' ' + this.lastname; 

            return fullname; 

        } 

    }; 

    var pokemonName = function(string) { 

        console.log(this.getPokeName() + 'I choose you!'); 

        console.log(this) 

    }; 

    // pokemonName() 

    pokemonName.call(pokemon); 
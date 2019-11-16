var request=new XMLHttpRequest()
request.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)
request.onload=function(){
// console.log('json data here')

var data=this.response
// console.log(this.response);
// for(var i=0;i<data.length;i++){
    
//     document.writeln(data[i]);
// }
document.writeln(data);
// console.log(data[0]);
}
request.send()
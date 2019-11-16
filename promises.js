// var promise=new Promise(
// (resolve,reject)=>{
//     var request = new XMLHttpRequest()
//     request.open('GET',"https://jsonplaceholder.typicode.com/todos",true);
//     request.onload=()=>{
//      data = JSON.parse(this.response)
//      request.send();
//      resolve(data)   
//  }   
//  reject('bad request')
// }
// )

// promise.then(
//     (data)=>{console.log("data:"+data)}
// )

// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open("GET", url);
//       xhr.onload = () => resolve(xhr.responseText);
//     //   xhr.onerror = () => reject(xhr.statusText);
//     reject(url)
//       xhr.send();
//     });
//   }
//   myAsyncFunction("https://jsonplaceholder.typicode.com/todos").then(
//       (data)=>{console.log(data)}
//   ).catch(
//       (err)=>{
//           console.log("Bad request",+err)
//         }
//   )

  var urls=[
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/photos"
  ]

  let req=urls.map(url=>fetch(url));
  Promise.all(req).then((res)=>{console.log(res)})
  .then(responses => Promise.all(responses.map(r => console.log(r.json()))))

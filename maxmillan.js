// const getUser = () => {
//     setTimeout(() => {
//       return { name: 'Max' }
//     }, 2000)
//   }
  
//   const user = getUser() // This doesn't actually fetch the user
//   console.log(user.name) 

                  // window.onload=function(){

                  // var button = document.querySelector("button");
                  // var div = document.querySelector("div");
                  // button.addEventListener("click", () => {
                  //   checkAuth(auth => {
                  //     if (auth) {
                  //       fetchUser(user => {
                  //         setText(user.name)
                  //       });
                  //     }
                  //   });
                  // },false);

                  // const setText = (text) => {
                  //   div.textContent = text
                  // }

                  // const checkAuth = cb => {
                  //   setText('Checking Auth...')
                  //   setTimeout(() => {
                  //     cb(true);
                  //   }, 2000);
                  // };
                  
                  // const fetchUser = cb => {
                  //   setText('Fetching User...')
                  //   setTimeout(() => {
                  //     cb({ name: "Max" });
                  //   }, 2000);
                  // };
                  // }

                  const button = document.querySelector("button");
                  const observable =Observable.fromEvent(button, "click");  
                  observable.subscribe(()=>{
                    console.log(this.event);
                  });
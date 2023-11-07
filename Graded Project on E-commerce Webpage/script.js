//get request in ajax
// let getData = document.getElementById("getData");
// // console.log(getData);
// getData.addEventListener('click',()=>{
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','ajaxdata.txt',true);
//     // console.log("I am get request");

//     xhr.onprogress=function(){
//         console.log("I am progressing");
//     }
//     xhr.onreadystatechange=function(){
//         console.log("Ready state is" + xhr.readyState);
//     }
// xhr.onload=function(){
//     if(this.status===200){
//         console.log(this.responseText);
//     }else{
//         console.log("Page Not Found");
//     }
// }
// xhr.send();
// console.log("I am last line");
// })

//post request in ajax

let getData = document.getElementById("getData");
getData.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://fakestoreapi.com/products.txt',true);
    xhr.onprogress=function(){
        console.log("I am progressing");
    }
    xhr.onreadystatechange=function(){
        console.log("Ready state is" + xhr.readyState);
    }
xhr.onload=function(){
    if(this.status===200){
        console.log(this.responseText);
    }else{
        console.log("Page Not Found");
    }
}
data={"title":"Ajax tutoria"};
xhr.send(data);
console.log("I am last line");
})

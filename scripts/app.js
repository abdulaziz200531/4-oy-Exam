let inputEL = document.querySelector("#input");
let formEl = document.querySelector(".form");
let wordEl = document.querySelector(".text-box__title");
let desc = document.querySelector(".desc");
let example = document.querySelector(".example");
let text = document.querySelector(".text");
let example2 = document.querySelector(".example2");
let text2 = document.querySelector(".text2");

let wrapper=document.querySelector(".wrapper")


inputEL.addEventListener("keypress",(e)=>{

  wrapper.innerHTML="";

  fetchData(e.target.value)


})


async function fetchData(input){

    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    const result=await response.json()

    console.log(result)

}









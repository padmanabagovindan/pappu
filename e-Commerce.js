var overlay =document.querySelector(".popup-overlay")
var popbox=document.querySelector('.popup-box')
var addbtn =document.getElementById("add-popup-btn")

addbtn.addEventListener("click",function(){
  overlay.style.display="block"
  popbox.style.display="block"

})
var cancelpop = document.getElementById("Cancel-pop")

cancelpop.addEventListener("click",function(){
     overlay.style.display="none"
  popbox.style.display="none"
})
//book-title-input // book-author-input // txt-area //add-book

var container =document.querySelector(".container")
var addbook =document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var txtarea=document.getElementById("txt-area")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${txtarea.value}</p>
    <button onclick="delnote(event)">Delete</button>`
   container.append(div)
     overlay.style.display="none"
  popbox.style.display="none"

})

delnote = (event)=>
    event.target.parentElement.remove();

    

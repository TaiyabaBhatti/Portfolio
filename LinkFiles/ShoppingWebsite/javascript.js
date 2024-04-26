let iconStatus=false;
let rightNavlinks=document.getElementById("right-nav");
let navLinks=rightNavlinks.getElementsByTagName("ul")[0];
let barElement=document.getElementById("bar-icon");
console.log(navLinks);

let mediaQNav=window.matchMedia("(max-width:775px)");


function displaySidebar(){
navLinks.style.display="flex";
 }
 function hideSidebar(){
    navLinks.style.display="none";
     }









   //   Functionality for Quantity of products
let quantityField = document.getElementById("quantity");
let invalidField = document.getElementById("invalid");
quantityField.addEventListener('input',(key) => {
let number=key.target.value;
   if(isNaN(number)){
invalidField.style.display="inline";
    invalidField.textContent="Invlid Number"
   }
   else if(number<0 || number>10){
      invalidField.style.display="inline";
          invalidField.textContent="Cannot add to cart"
         }
else{
      invalidField.style.display="none";
         }
}  );


// Functionality for slider

let slideImages=document.getElementsByClassName("image");
let mainImage=document.getElementById("product");

Array.from(slideImages).forEach(element => {
element.addEventListener("click",() => {
mainImage.src=element.src;
})
});














   



     






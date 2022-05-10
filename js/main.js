//get slider item|Array.from[ES6 Features]
var sliderImages=Array.from(document.querySelectorAll(".slider-container img"));
//get number of slides
var slidesCount=sliderImages.length;
//set Current Slide
var currentSlide=1;
//slide Number Element
var slideNumberElement=document.getElementById("slide-number");
//previous and next button
var nextButton=document.getElementById("next");
var prevButton=document.getElementById("prev");
//next slide function
function nextSlide(){
  if(nextButton.classList.contains("disabled")){
   //nothing
  }else{
    currentSlide++;
    theChekker();
  }
}
nextButton.onclick=nextSlide;
//previous slide function
function prevSlide(){
    if(prevButton.classList.contains("disabled")){
     //nothing
    }else{
      currentSlide--;
      theChekker();
    }
  }
  prevButton.onclick=prevSlide;
//create the main ul element
var paginationElement=document.createElement("ul");
//set id on created ul element
paginationElement.setAttribute("id","pagination-ul");

//create list item based on slides count
for(var i=1;i<=slidesCount;i++){
    var paginationItem=document.createElement("li");
    paginationItem.setAttribute("data-index",i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

//Add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement);
//get the new created ul
var paginationCreatedUl=document.getElementById("pagination-ul");

//get slider item|Array.from[ES6 Features]
var paginationsBullets=Array.from(document.querySelectorAll("#pagination-ul li"));
//loop through pagination bullets
for(var i=0;i<paginationsBullets.length;i++){
    paginationsBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute("data-index"));
        theChekker();
    };
    }
//trigger the chekker function
theChekker();

//create the chekker function
function theChekker(){
    //set the slide number
 
   slideNumberElement.textContent="slide #"+(currentSlide)+" of "+(slidesCount);
   //Remove all active classes
   removeAllActive()
   //set active classs on current slide
   sliderImages[currentSlide-1].classList.add("active");
   //set active classs on current pagination item
   paginationCreatedUl.children[currentSlide-1].classList.add("active");
//    removeAllActive()

}
//remove all active classes from images and pagination bullets
function removeAllActive(){
    //loop through images
    sliderImages.forEach(function(img){
        img.classList.remove("active")
    });
    //loop through bullets
    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove("active")
    })

//check if the current slide is the first
if(currentSlide==1){
    //add disabled class to prevButton
    prevButton.classList.add("disabled")
    //remove disabled class from prevButton
}else{
    prevButton.classList.remove("disabled")
};
//check if the current slide is the last
if(currentSlide==slidesCount){
    //add disabled class to nextButton
    nextButton.classList.add("disabled")
}else{
    //remove disabled class from nextButton
    nextButton.classList.remove("disabled")
};
}
setInterval(nextSlide,3000);
// setInterval(prevSlide,1000);
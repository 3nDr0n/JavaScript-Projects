let slideIndex = 0; //declares variable that is limited to the scope of block statement
showSlides();

function showSlides() { //creates function that show slides on loop
  let i;
  let slides = document.getElementsByClassName("mySlides"); 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Changes image every 3 seconds
}

function countdown() {  //countdown function that counts down based on user input
  var seconds=document.getElementById("seconds").value;

  function tick() {  //displays ticking countdown
    seconds = seconds -1;
    timer.innerHTML=seconds;
    setTimeout(tick, 1000);
  if(seconds ==-1) {  //conditional statement displays message when countdiwn reached 0 
    alert("Thats enough now, you'll get hungry!");
  }  
      }
      tick();
}
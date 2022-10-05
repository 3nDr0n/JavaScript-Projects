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

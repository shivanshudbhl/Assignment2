function validateForm(){
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var contact = document.myForm.phone.value
    var query = document.myForm.query.value;
    console.log(name);
    console.log(email);
    console.log(contact);
    console.log(query);

    if (name.length===0) {
        alert("name can't be empty")
        return false;

    }

    if(contact.length!==10){
        alert("Enter a number of 10 characters")
        return false;
    }

    if(query.length < 30){
        alert("Enter at least 30 words")
        return false;
    }
}

function showAnswer(e) {

    var all =document.getElementsByClassName('showme');
    for(let i=0;i<all.length;i++){
       all[i].style.display='none';
       }
    
    var div = e.nextSibling.nextElementSibling;
    div.style.display = "block";
    
      
    }

    var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}

cname = "shivanshu dobhal";
cvalue = "UE203110";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
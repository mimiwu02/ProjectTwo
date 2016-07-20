window.onload= function(){
  console.log("happy thoughts");

/* This if scripting for the homepage*/

var quote = document.getElementById('quote'); //hide the quote on load
quote.style.display = "none";

var quoteBtn = document.getElementById('quote-icon');
quoteBtn.addEventListener('click', function(ev){
  ev.preventDefault();
quoteBtn.style.display= "none";
quote.style.display= "block";

// var endpoint
});
}

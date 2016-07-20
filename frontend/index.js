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

var query = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand"

$.ajax({
  url: query,
  dataType: 'jsonp',
}).done(function(data){
  console.log(data);

  var content= data[0].content;
  console.log(content);
  var newQuote = document.querySelector('quote');
  newQuote.innerHTML = content;
});
});
}

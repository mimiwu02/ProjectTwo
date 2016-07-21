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


var endpoint = "http://quotesondesign.com/wp-json/posts"
var query = endpoint + "?filter[orderby]=rand&filter[posts_per_page]=" + Math.floor(Math.random()*50); // randomizes the amount of post per page so it returns a different quote everytime page refreshes
console.log(query);


$.ajax({
  url: query
}).done(function(data){
  console.log(data);

  var content= data[0].content + "<p>&mdash; " + data[0].title;
  console.log(content);
  var newQuote = document.getElementById('quote');
  newQuote.innerHTML = content;
});
});
}

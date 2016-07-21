window.onload= function(){
  console.log("happy thoughts");

/***** Part 1 - This is scripting for the homepage*****/

var btnNote = document.getElementById('btn-note');
var quote   = document.getElementById('quote'); //hide the quote on load
quote.style.display = "none";

//hide pages
var actionPage           = document.querySelector(".actions");
actionPage.style.display ="none";
var notePage             = document.querySelector(".notes");
notePage.style.display   ="none";

var quoteBtn= document.getElementById('quote-icon');
quoteBtn.addEventListener('click', function(ev){
  ev.preventDefault();
btnNote.style.display    = "none";
quoteBtn.style.display   = "none";
quote.style.display      = "block";


var endpoint = "http://quotesondesign.com/wp-json/posts"
var query    = endpoint + "?filter[orderby]=rand&filter[posts_per_page]=" + Math.floor(Math.random()*50); // randomizes the amount of post per page so it returns a different quote everytime page refreshes
console.log(query);


$.ajax({
  url: query
}).done(function(data){
  console.log(data);

  var content        = data[0].content + "<p>&mdash; " + data[0].title;
  console.log(content);
  var newQuote       = document.getElementById('quote');
  newQuote.innerHTML = content;
});
 // create an event listener for next button to hide homepage and bring up next page that allows user to select a set of actions
 var homepage = document.querySelector('.homepage');
 var nextBtn  = document.getElementById('next-btn');
 nextBtn.addEventListener('click', function(ev){
   ev.preventDefault();
   homepage.style.display   = "none";
   actionPage.style.display ="block";


/***** Part 2 - This is scripting for the actions page*****/
var currentDate = Date();
document.getElementById('currentDate').innerHTML= "Today is" + " " + currentDate;

//grab all element to create navigation
var weatherRoute = document.getElementById('weather');
var newsRoute    = document.getElementById('news');
var notesRoute   = document.getElementById('notes');
//end of part 2

/***** Part 3 - This is scripting for the notes page*****/
var notesPage    = document.querySelector('.notes');
notesRoute.addEventListener('click', function(ev){
   ev.preventDefault();
   homepage.style.display   ="none";
   actionPage.style.display ="none";
   notesPage.style.display  ="block";




}); //end end of event listener for notes icon
}); //end of event listener for quote icon
}); //end of event listener for next button
} //end window load

let api_url = "http://api.quotable.io/random";
let Quote  = document.getElementById('Quote');
let author = document.getElementById('author');

async function getQuote(url){
   const response = await fetch(url);
   var data = await response.json();
   Quote.innerHTML = data.author  ;
   author.innerHTML = data.content;
   
}
getQuote(api_url);
let api_url = "http://api.quotable.io/random";
let author = document.getElementById('author');
let Quote = document.getElementById('Quote');

async function getQuote(url){
   const response = await fetch(url);
   var data = await response.json();
   Quote.innerHTML = data.author;
   author.innerHTML = data.content;
   
}
getQuote(api_url);

function tweet(){
   window.open(href="https://twitter.com/intent/tweet?text=" + Quote.innerHTML +  "-------by"   +  author.innerHTML , "Tweet Window" , "width= 600, height= 300")
}
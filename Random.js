const api_url = "http://api.quotable.io/random";
const Quote = document.getElementById('.Quote');
const auther =document.getElementById('.auther');

async function getQuote(url){
   const response = await fetch();
   var data = await response.json();
   
   Quote.innerHTML= data.content;
   auther.innerHTML= data.auther;
}

getQuote();
const quote = document.getElementById('quote');


function getQuote(){
    console.warn("clicked",)
    fetch("http://api.quotable.io/random",{
        method:"GET"
    })
    .then((response)=> response.json())
    .then((data)=>quote.innerHTML = data.content)
    .catch((error)=>{
        console.error("Error:",error);
    });
};
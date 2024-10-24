const mybox = document.getElementById('catfactdiv');
const catfun1 = "https://catfact.ninja/fact";
const btn = document.getElementById('btn');

async function catfact() {
    const response = await fetch(catfun1);
    const data = await response.json();
    mybox.innerText = data.fact;
}

btn.addEventListener('click', () => {
    catfact();
});



const mybox2 = document.getElementById('img');
const catfun2 = "https://api.thecatapi.com/v1/images/search";
const btn2 = document.getElementById('btn2');

async function catfact1() {
    const response = await fetch(catfun2);
    const data1 = await response.json();
    console.log(data1);
    
    mybox2.innerHTML = `<img src="${data1[0].url}" alt="Cat Image" style="max-width: 100%; height: auto;">`;
}

btn2.addEventListener('click', () => {
    console.log("btn clicked");
    catfact1();
});

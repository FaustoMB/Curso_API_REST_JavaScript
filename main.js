const button = document.getElementById('reload');
const URL = "https://api.thecatapi.com/v1/images/search?limit"

button.addEventListener('click',fetchData)

async function fetchData(){
    const res = await fetch(URL)
    const data = await res.json()
    const img = document.querySelector('img')
    img.src = data[0].url;
}

fetchData();
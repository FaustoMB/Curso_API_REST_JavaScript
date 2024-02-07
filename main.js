const button = document.getElementById('reload');
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_TQm4B9BJPOqRCtyTg0AfFmAduA9AIi8mVtjyja4oWg0gYuz8f6QJTePk7dwI17MB"
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_TQm4B9BJPOqRCtyTg0AfFmAduA9AIi8mVtjyja4oWg0gYuz8f6QJTePk7dwI17MB"
const spanError = document.getElementById('error');


button.addEventListener('click',loadRandomCats)

async function loadRandomCats(){
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random');
    console.log(data);

    if (res.status !== 200){
        spanError.innerText = "Hubo un error: " + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function loadFavoriteCats(){
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites');
    console.log(data);

    if (res.status !== 200){
        spanError.innerText = "Hubo un error: " + res.status;
    }



loadRandomCats();
loadFavoriteCats();
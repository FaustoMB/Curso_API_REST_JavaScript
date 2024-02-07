const button = document.getElementById('reload');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_TQm4B9BJPOqRCtyTg0AfFmAduA9AIi8mVtjyja4oWg0gYuz8f6QJTePk7dwI17MB"
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?api_key=live_TQm4B9BJPOqRCtyTg0AfFmAduA9AIi8mVtjyja4oWg0gYuz8f6QJTePk7dwI17MB"
const spanError = document.getElementById('error');


button.addEventListener('click',loadRandomCats);
btn1.addEventListener('click',saveFavoriteCat)
btn2.addEventListener('click',saveFavoriteCat)

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

        btn1.onclick = () => saveFavoriteCat(data[0].id);
        btn2.onclick = () => saveFavoriteCat(data[1].id);
    }
}

async function loadFavoriteCats(){
    const res = await fetch(API_URL_FAVORITES);
    const data = await res.json();
    console.log('Favorites');
    console.log(data);

    if (res.status !== 200){
        spanError.innerText = "Hubo un error: " + res.status;
    } else{
        data.forEach(cat => {
            const section = document.getElementById('favoriteCats');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('Elimina al gato de favoritos');

            btn.appendChild(btnText);
            img.src = cat.image.url;
            img.width = 150;
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
            
        })
    }


}

async function saveFavoriteCat(id){
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        }),        
    });

    const data = await res.json();

    if (res.status !== 200){
        spanError.innerText = "Hubo un error: " + res.status + data.message;
    }

    console.log("save");
    console.log(res)
}




loadRandomCats();
loadFavoriteCats();
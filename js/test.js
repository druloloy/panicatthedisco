const aid = '20JZFwl6HVl6yg8a4H3ZqK';

async function getArtist() {

    await fetch(`https://api.spotify.com/v1/artists/${aid}/albums`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.log(err));
}
getArtist();
export default function getAlbums() {
    const requestURL = 'https://druloloy.github.io/panicatthedisco/data/albums.json'; // API URL

    fetch(requestURL) // use fetch to get connection to the API
    .then(response=>response.json()) // response: the data returned by the fetch, it contains data gathered from the API. We used .json() to parse the data into JSON. 
    .then(data=>{ 
        // to get the exact data, we need to have another promise
        const albumHolder = data.map(album=>{
            return `
            <div class="album">
                <img src="${album["album art"]}" alt="${album.title}">

                <h4 id="title">${album.title}</h4>
                <p id="year-published">${album["year released"]}</p>
            </div>
            `
        })
        .join("");
        // breakdown all data inside the array JSON and make a new div for it's container. We use join to remove impurities between data containers.
        document.querySelector('.albums-container').insertAdjacentHTML('afterbegin', albumHolder); // just like appendChild but it can take whole HTML
    })
    .catch(err=>{
        console.log("error");
    });
}

const getImagenes = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=l0AWGmGnUEXwTFAJCb9NI0Tg2mr4iOcW&q=${category}&limit=20`;

    const res = await fetch(url);
    const {data} =  await res.json();
    
    const gif = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gif;
}

export default getImagenes;
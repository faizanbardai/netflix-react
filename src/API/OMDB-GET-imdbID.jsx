const OMDBGETimdbID = async (imdbID) => {
    let URL = "https://www.omdbapi.com/?apikey=251ff3f5&i=".concat(imdbID);
        try {
            let response = await fetch(URL, {
                method: "GET"
            })
            if (response.ok) {
                return await response.json()
            }
        } catch (error) {
            console.log(error);
        }
}

export default OMDBGETimdbID;
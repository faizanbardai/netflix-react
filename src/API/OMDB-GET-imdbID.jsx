import authorization from './Authorization';
const credentials = authorization();
const apikey = credentials.apikey;
const OMDBGETimdbID = async (imdbID) => {
    let URL = "https://www.omdbapi.com/?apikey=" + apikey + "i=".concat(imdbID);
    console.log(URL);
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
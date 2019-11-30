import authorization from './Authorization';
const credentials = authorization("OMDB");
const apikey = credentials.apikey;
const baseURL = credentials.baseURL;
const OMDBGETimdbID = async (imdbID) => {
    let URL = baseURL + apikey + "i=".concat(imdbID);
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
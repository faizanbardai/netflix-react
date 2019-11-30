import authorization from './Authorization';
const credentials = authorization("OMDB");
const apikey = credentials.apikey;
const baseURL = credentials.baseURL;
const OMDBGETSearch = async (searchQuery) => {
    let URL = baseURL + apikey + "&s=".concat(searchQuery);
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

export default OMDBGETSearch;
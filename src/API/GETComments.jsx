const username = "user24";
const password = "48D4vaVh6Ra3DD8w";
const auth = btoa(username + ":" + password);
const headers = new Headers({
    "Authorization": "Basic " + auth,
    "Content-Type": "application/json"
});

const GETComments = async (imdbID) => {
    let URL = "https://strive-school-testing-apis.herokuapp.com/api/comments/".concat(imdbID);
        try {
            let response = await fetch(URL, {
                method: "GET",
                headers
                })
            if (response.ok) {
                return await response.json()
            }
        } catch (error) {
            console.log(error);
        }
}

export default GETComments;
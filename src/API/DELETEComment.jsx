import authorization from './Authorization';
const credentials = authorization();
const username = credentials.username;
const password = credentials.password;
const auth = btoa(username + ":" + password);
const headers = new Headers({
    "Authorization": "Basic " + auth,
    "Content-Type": "application/json"
});

const GETComments = async (commentID) => {
    let URL = "https://strive-school-testing-apis.herokuapp.com/api/comments/".concat(commentID);
    try {
        let response = await fetch(URL, {
            method: "DELETE",
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
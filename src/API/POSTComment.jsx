import authorization from './Authorization';
const credentials = authorization();
const username = credentials.username;
const password = credentials.password;
const auth = btoa(username + ":" + password);
const headers = new Headers({
    "Authorization": "Basic " + auth,
    "Content-Type": "application/json"
});

const GETComments = async (comment) => {
    let URL = "https://strive-school-testing-apis.herokuapp.com/api/comments/";
        try {
            let response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(comment),
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
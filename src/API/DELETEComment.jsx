import authorization from './Authorization';
const credentials = authorization("striveComment");
const baseURL = credentials.baseURL;
const username = credentials.username;
const password = credentials.password;
const auth = btoa(username + ":" + password);
const headers = new Headers({
    "Authorization": "Basic " + auth,
    "Content-Type": "application/json"
});

const DELETEComments = async (commentID) => {
    let URL = baseURL.concat(commentID);
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

export default DELETEComments;
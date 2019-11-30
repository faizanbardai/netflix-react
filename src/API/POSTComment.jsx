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

const GETComments = async (comment) => {
    let URL = baseURL;
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
const authorization = (serverName) => {
    const credentials =
    {
        "striveComment": {
            "baseURL": "https://strive-school-testing-apis.herokuapp.com/api/comments/",
            "username": "user24",
            "password": "48D4vaVh6Ra3DD8w"
        },
        "OMDB": {
            "baseURL": "https://www.omdbapi.com/?apikey=",
            "apikey": "251ff3f5&"
        }
    };
    return credentials[serverName];
};

export default authorization;
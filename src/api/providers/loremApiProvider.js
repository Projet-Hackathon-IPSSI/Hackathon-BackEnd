const axios = require('axios');

const baseUrl = "https://loripsum.net/api";


exports.getRandomText = (res) => {

    return axios.get(baseUrl + '/plaintext', {
            responseType: "text"
        })
        .then((response) => {
            return (response.data)

        })
        .catch((error) => {
            // console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        })
}

exports.getRandomImage = () => {

    return new Promise((resolve, reject) => {

        resolve("image.png");

    })
}
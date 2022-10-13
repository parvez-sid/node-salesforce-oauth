const axios = require('axios');

exports.getPosts = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if(response){
            res.send({statusCode: 200, data: response.data})
        }
    } catch (error) {
        res.send({statusCode: 400, data: error})
    }
}
const axios = require('axios');
let config = {}
function connectShimli(url, json){
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(json);
        var config = {
            method: 'post',
            url: url,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
    
        axios(config)
        .then(function (response) {
            resolve({
                data: response.data
            })
        })
        .catch(function (error) {
            resolve({
                error: true,
                message: error
            })
        });
    })
}

module.exports = {
    config: config,
    sendMessage: (type, body, to, instance, caption = null, filename = null,lat = null, lng = null) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            let data_ = {
                "token": config.token,
                "type": type, 
                "body": body, 
                "to": to,
                "instance": instance
            };
            if(caption)
                data_['caption'] = caption;
            if(filename)
                data_['filename'] = filename;
            if(lat)
                data_['lat'] = lat;
            if(lng)
                data_['lng'] = lng;
            const result = await connectShimli(
                'https://api.shimli.app/v1/msg-wh',
                data_
            );
            resolve(result);
        })
    }
}
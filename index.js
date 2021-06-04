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
    sendWhatsApp: (type, body, to, instance, caption = null, filename = null,lat = null, lng = null) => {
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
    },
    sendFbMessenger: (type, body, to, instance, caption = null) => {
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
            const result = await connectShimli(
                'https://api.shimli.app/v1/facebook/send-messenger',
                data_
            );
            resolve(result);
        })
    },
    sendWhBusinessApi: (type, body, to, instance, caption = null) => {
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
            const result = await connectShimli(
                'https://api.shimli.app/v1/whatsapp-api',
                data_
            );
            resolve(result);
        })
    },
    leadInsert: (to, instance, text, channel = 'whatsapp', area = null, agent = null, process = null, tags = null) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            let data_ = {
                "token": config.token,
                "to": to,
                "instance": instance,
                "text": text,
                "channel": channel
            };
            if(area)
                data_['area'] = area;
            if(agent)
                data_['agent'] = agent;
            if(process)
                data_['process'] = process;
            if(tags)
                data_['tags'] = tags;
            const result = await connectShimli(
                'https://api.shimli.app/v1/crm',
                data_
            );
            resolve(result);
        })
    }
}
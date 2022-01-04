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
    sendWhatsApp: (message) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                return resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            message['token'] = config.token;
            if(message.type == 'location'){
                if(!message.lat || !message.lng){
                    return resolve({error: true, txt: 'It is necessary to send the latitude and longitude variables'});
                }
            }
            if(message.type == 'buttons'){
                if(!message.buttons){
                    return resolve({error: true, txt: 'The buttons variable is required'});
                }
                if(message.buttons.length == 0){
                    return resolve({error: true, txt: 'The buttons variable is required'});
                }
            }
            if(message.type == 'lists'){
                if(!message.sections || !message.title || !message.action){
                    return resolve({error: true, txt: 'You need to send the section, title and action variables'});
                }
            }
            const result = await connectShimli(
                'https://api.shimli.app/v1/msg-wh',
                message
            );
            resolve(result);
        })
    },
    sendFbMessenger: (message) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                return resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            message['token'] = config.token;
            const result = await connectShimli(
                'https://api.shimli.app/v1/facebook/send-messenger',
                message
            );
            resolve(result);
        })
    },
    sendWhBusinessApi: (message) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                return resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            message['token'] = config.token;
            const result = await connectShimli(
                'https://api.shimli.app/v1/whatsapp-api',
                message
            );
            resolve(result);
        })
    },
    leadInsert: (lead) => {
        return new Promise(async (resolve, reject) => {
            if(!config.token){
                return resolve({
                    error: true,
                    txt: 'Configurate Token'
                })
            }
            lead['token'] = config.token;
            const result = await connectShimli(
                'https://api.shimli.app/v1/crm',
                lead
            );
            resolve(result);
        })
    }
}
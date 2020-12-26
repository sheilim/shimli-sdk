# shimli-sdk

Use of the Shimli api to send and read messages from the channels available in Shimli (WhatsApp, SMS, Telegram, Facebook Messanger and Instagram)

# Installation

`npm i @sheilim/shimli-sdk --save`

## How is it used?

```
const shimli = require('@sheilim/shimli-sdk);

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = shimli.sendMessage("chat", "Hi!! 👋", "14243962506", "ID_INSTANCE");
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options
* *type* - _string_ I could be chat, image, video, audio, location, document, sticker, gif
* *body* - _string_ Message text or url of the media file to send
* *to* - _string_ WhatsApp number to which the message will be sent
* *instance* - _string_ Id of the instance connected to Shimli
* *caption* - _string_ (optional) Image or video caption
* *filename* - _string_ (optional) Name of the document to send
* *lat* - _string_ Required if it is of type location
* *lng* - _string_ Required if it is of type location
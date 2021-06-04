# shimli-sdk

Use of the Shimli api to send and read messages from the channels available in Shimli (WhatsApp, SMS, Telegram, Facebook Messanger and Instagram)

Link: <https://www.shimli.app>

# Installation

`npm i @sheilim/shimli-sdk --save`

## How is it used?
## Send WhatsApp

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.sendWhatsApp("chat", "Hi!! 👋", "14243962506", "ID_INSTANCE");
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendWhatsApp
* *type* - _string_ I could be chat, image, video, audio, location, document, sticker, gif
* *body* - _string_ Message text or url of the media file to send
* *to* - _string_ WhatsApp number to which the message will be sent
* *instance* - _string_ Id of the instance connected to Shimli
* *caption* - _string_ (optional) Image or video caption
* *filename* - _string_ (optional) Name of the document to send
* *lat* - _string_ Required if it is of type location
* *lng* - _string_ Required if it is of type location

## Send Facebook Messenger

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.sendFbMessenger("text", "Hi!! 👋", "PSID", "ID_INSTANCE");
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendFbMessenger
* *type* - _string_ I could be text, image, video, audio, file
* *body* - _string_ Message text or url of the media file to send
* *to* - _string_ PSID
* *instance* - _string_ Id of the instance connected to Shimli
* *caption* - _string_ (optional) Image or video caption

## Send WhatsApp Business API

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await sendWhBusinessApi.sendFbMessenger("text", "Hi!! 👋", "14243962506", "ID_INSTANCE");
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendWhBusinessApi
* *type* - _string_ I could be text, image, video, audio, document
* *body* - _string_ Message text or url of the media file to send
* *to* - _string_ WhatsApp number to which the message will be sent
* *instance* - _string_ Id of the instance connected to Shimli
* *caption* - _string_ (optional) Image or video caption

## Add Lead to Shimli

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.leadInsert("ID_CLIENT", "ID_INSTANCE", "Insert Lead! 👋", "whatsapp");
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options leadInsert
* *to* - _string_ PSID (Facebook Messenger) or WhatsApp number
* *instance* - _string_ Id of the instance connected to Shimli
* *text* - _string_ Lead opening text
* *channel* - _string_ whatsapp or fb-messenger
* *area* - _string_ (optional) Id area Shimli
* *agent* - _string_ (optional) Id agent Shimli
* *process* - _string_ (optional) Id process
* *tags* -  _string_ (optional) example ["customer service", "sales"]
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
    const result = await shimli.sendWhatsApp({
        "type": "chat",
        "body": "Hi!! 👋",
        "to": "14243962506",
        "instance": "ID_INSTANCE"
    });
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendWhatsApp

- _type_ - _string_ I could be chat, image, video, audio, location, document, sticker, gif, buttons, lists
- _body_ - _string_ Message text or url of the media file to send
- _to_ - _string_ WhatsApp number to which the message will be sent
- _instance_ - _string_ Id of the instance connected to Shimli
- _caption_ - _string_ (optional) Image or video caption
- _filename_ - _string_ (optional) Name of the document to send
- _lat_ - _string_ Required if it is of type location
- _lng_ - _string_ Required if it is of type location

## Send Facebook Messenger

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.sendFbMessenger({
        "type": "text",
        "body": "Hi!! 👋",
        "to": "PSID",
        "instance": "ID_INSTANCE"
    });
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendFbMessenger

- _type_ - _string_ I could be text, image, video, audio, file
- _body_ - _string_ Message text or url of the media file to send
- _to_ - _string_ PSID
- _instance_ - _string_ Id of the instance connected to Shimli
- _caption_ - _string_ (optional) Image or video caption

## Send WhatsApp Business API

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.sendWhBusinessApi({
        "type": "text",
        "body": "Hi!! 👋",
        "to": "14243962506",
        "instance": "ID_INSTANCE"
    });
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options sendWhBusinessApi

- _type_ - _string_ I could be text, image, video, audio, document
- _body_ - _string_ Message text or url of the media file to send
- _to_ - _string_ WhatsApp number to which the message will be sent
- _instance_ - _string_ Id of the instance connected to Shimli
- _caption_ - _string_ (optional) Image or video caption

## Add Lead to Shimli

```
const shimli = require('@sheilim/shimli-sdk');

(function(){
    shimli.config['token'] = "YOUR_TOKEN";
    const result = await shimli.leadInsert({
        to: "ID_CLIENT",
        instance: "ID_INSTANCE",
        text: "Insert Lead! 👋", channel: "whatsapp"
    });
    if(result.error)
        console.log(result.message);
    else
        console.log(result);
})();
```

## Options leadInsert

- _to_ - _string_ PSID (Facebook Messenger) or WhatsApp number
- _instance_ - _string_ Id of the instance connected to Shimli
- _text_ - _string_ Lead opening text
- _channel_ - _string_ whatsapp or fb-messenger
- _area_ - _string_ (optional) Id area Shimli
- _agent_ - _string_ (optional) Id agent Shimli
- _process_ - _string_ (optional) Id process
- _tags_ - _string_ (optional) example ["customer service", "sales"]

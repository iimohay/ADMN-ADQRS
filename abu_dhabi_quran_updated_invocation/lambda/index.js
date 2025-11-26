const Alexa = require('ask-sdk-core');

const STREAM_URL = "https://vo-live-media.cdb.cdn.orange.com/Content/Channel/quran_kareem/HLS/variant.m3u8?md5=xR7Z2bMCXlYMsZqrWBD3rg&expires=1764111333";

const PlayRadioIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlayRadioIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak("Playing Abu Dhabi Quran")
            .addAudioPlayerPlayDirective('REPLACE_ALL', STREAM_URL, STREAM_URL, 0, null)
            .getResponse();
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak("Playing Abu Dhabi Quran")
            .addAudioPlayerPlayDirective('REPLACE_ALL', STREAM_URL, STREAM_URL, 0, null)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PlayRadioIntentHandler,
    )
    .lambda();

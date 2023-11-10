/*
 * SPDX-License-Identifier: Apache-2.0
 */
var utils = require('./utils/utils.js');
const fs = require('fs');
const nodersa = require('node-rsa');
//username: String con el nombre de usuario
var methods = {};


methods.test = async function(){
    try{        
        console.log("----------- test.js test: ***START*** ----------");

        const _LASTACTIVE_EUR = 0;
        const _LASTACTIVE_INT = 1;
        const _CARD_EUROPE = 2;
        const _CARD_INTERNATIONAL = 3;
        const _CURRENT_CARD = 4;
        let response = null;

        const infodata = utils.getData();
        let lastactive_eur = infodata[_LASTACTIVE_EUR];
        let lastactive_int = infodata[_LASTACTIVE_INT];
        let card_europe = infodata[_CARD_EUROPE];
        let card_international = infodata[_CARD_INTERNATIONAL];
        let current_card = infodata[_CURRENT_CARD];
        
        response =  {"lastactive_eur": lastactive_eur, "lastactive_int": lastactive_int, "card_europe": card_europe, "card_international": card_international, "current_card": current_card};
   
        console.log("----------- test.js test: ***END*** ----------");
        return response;
    }catch (error) {
        console.error(`***ERR test.js test: --> Failed rest call: ${error}`);
        process.exit(1);
    }
}

module.exports = methods;

// let test = require('./infocards.js');
// test.obtenerClave();

/*
 * SPDX-License-Identifier: Apache-2.0
 */
var utils = require('./utils/utils.js');
const fs = require('fs');
const nodersa = require('node-rsa');
const _INTERNATINAL = 'INTERNATIONAL';
const _EUROPE = 'EUROPE';
//username: String con el nombre de usuario
var methods = {};
let keyString = 'KeyMustBe16ByteOR24ByteOR32ByT3!';

methods.obtenerClave = function(){
    try{       

        const privateKey = fs.readFileSync('/opt/creditcardsrest/certs/key.pem', 'utf8');
        const original = new nodersa(privateKey).encrypt(keyString, 'utf8');
        console.log(original);

        const publicKey = fs.readFileSync( '/opt/creditcardsrest/certs/cert.pem', "utf8" );
        const decrypted = new nodersa(publicKey).decrypt(original, 'base64' );
        console.log(decrypted);
        
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.getInfoCards = async function(username){
    try{        
        console.log("----------- inforcards.js getInfoCards: ***START*** ----------");

        const _LASTACTIVE_EUR = 0;
        const _LASTACTIVE_INT = 1;
        const _CARD_EUROPE = 2;
        const _CARD_INTERNATIONAL = 3;
        const _CURRENT_CARD = 4;
        let response = null;
        const usernames = utils.getUserNames();

        let userfound = false;
        usernames.forEach(element => {
            if(username == element){                
                userfound = true;
            }
        });

        if(!userfound){
            response = {'records':[
                {error: 'User not found'},                         
              ]};  
        } else{
            const infodata = utils.getData();
            let lastactive_eur = infodata[_LASTACTIVE_EUR];
            let lastactive_int = infodata[_LASTACTIVE_INT];
            let card_europe = infodata[_CARD_EUROPE];
            let card_international = infodata[_CARD_INTERNATIONAL];
            let current_card = infodata[_CURRENT_CARD];
            
            response =  {"lastactive_eur": lastactive_eur, "lastactive_int": lastactive_int, "card_europe": card_europe, "card_international": card_international, "current_card": current_card};
                       
        }  

        console.log("----------- inforcards.js getInfoCards: ***END*** ----------");
        return utils.encrypt(keyString,JSON.stringify(response));
    }catch (error) {
        console.error(`***ERR inforcards.js getInfoCards --> Failed rest call: ${error}`);
        process.exit(1);
    }
}

methods.enableCard = async function(username,cardtype){
    try{        
        console.log("----------- inforcards.js enableCard: ***START*** ----------");

        const _LASTACTIVE_EUR = 0;
        const _LASTACTIVE_INT = 1;
        const _CARD_EUROPE = 2;
        const _CARD_INTERNATIONAL = 3;
        const _CURRENT_CARD = 4;
        let response = null;
        const usernames = utils.getUserNames();

        let userfound = false;
        usernames.forEach(element => {
            if(username == element){                
                userfound = true;
            }
        });

        if(!userfound){
            response = {'records':[
                {error: 'User not found'},                         
              ]};  
        } else{
            if(cardtype != _INTERNATINAL && cardtype != _EUROPE){
                response = {'records':[
                    {error: `El tipo de tarjeta ${cardtype} no existe en el sistema`},                         
                  ]}; 
            } else{
                const records = utils.getData();
                if(records[_CURRENT_CARD] == cardtype){
                    response = {'records':[
                        {error: 'Esa tarjeta ya está activada'},                         
                      ]};
                } else{
                    if(records[_CURRENT_CARD] == _INTERNATINAL){
                        utils.setCurrentCard(_EUROPE);
                        utils.setLastActive(_INTERNATINAL);
                    } else if(records[_CURRENT_CARD] == _EUROPE){
                        utils.setCurrentCard(_INTERNATINAL);
                        utils.setLastActive(_EUROPE);
                    }
                    
                    const infodata = utils.getData();

                    let lastactive_eur = infodata[_LASTACTIVE_EUR];
                    let lastactive_int = infodata[_LASTACTIVE_INT];
                    let card_europe = infodata[_CARD_EUROPE];
                    let card_international = infodata[_CARD_INTERNATIONAL];
                    let current_card = infodata[_CURRENT_CARD];

                    response =  {"lastactive_eur": lastactive_eur, "lastactive_int": lastactive_int, "card_europe": card_europe, "card_international": card_international, "current_card": current_card};  
                }
            }            
        }  
        console.log(`----------- inforcards.js enableCard: RESPONSE ${JSON.stringify(response)}`);
        console.log("----------- inforcards.js enableCard: ***END*** ----------");
        return utils.encrypt(keyString,JSON.stringify(response));
    }catch (error) {
        console.error(`***ERR inforcards.js enableCard --> Failed rest call: ${error}`);
        process.exit(1);
    }
}

module.exports = methods;

// let test = require('./infocards.js');
// test.obtenerClave();

/*
 * SPDX-License-Identifier: Apache-2.0
 */

var uuid = require('uuid-random');
var Cipher = require('aes-ecb');

var lastactive_eur;
var lastactive_int;
const _INTERNATINAL = 'INTERNATIONAL';
const _EUROPE = 'EUROPE';
var currentCard = _INTERNATINAL;
var lastactive_eur = new Date(2019,11,7);
var lastactive_int = new Date(2020,01,26);
var methods = {};
methods.generateUniqueId = function(){
    try{               
        var randomuuid = uuid();;
        var uniqueid = randomuuid.replace(/-/g,'');
        return uniqueid.toString();        
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.getTimestamp = function(){
    try{            
        let timestamp = Date.now();  
        return timestamp.toString();  
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.todayAddDays = function(days){
    try{        
        let today = Date.now();
        let newDate = today + (days*86400000);      
        return newDate.toString();  
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.timestampAddDays = function(timestamp, days){
    try{        
        let newDate = timestamp + (days*86400000);      
        return newDate.toString();  
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.random = function(n1, n2){
    try{        
        const min = Math.ceil(n1);
        const max = Math.floor(n2);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.getUserNames = function(){
    try{        
        const records = ['user1','user2','user3','user4','user5'];
        return records; 
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.getData = function(){
    try{        
        const records = [];
        
        const card_europe = '5500 0000 0000 0004';
        const card_international = '3400 0000 0000 009'; 

        records.push(lastactive_eur);
        records.push(lastactive_int);
        records.push(card_europe);
        records.push(card_international);
        records.push(currentCard);
        
        return records; 
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.setCurrentCard = function(cardtype){
    try{        
        if(cardtype == _INTERNATINAL){
            currentCard = _INTERNATINAL;
        }
        else if(cardtype == _EUROPE){
            currentCard = _EUROPE;
        }
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.setLastActive = function(cardtype){
    try{        
        if(cardtype == _INTERNATINAL){
            lastactive_int = new Date(Date.now());
        }
        else if(cardtype == _EUROPE){
            lastactive_eur = new Date(Date.now());
        }
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.encrypt = function(keyString,input){
    try{        
        return Cipher.encrypt(keyString, input);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

methods.decrypt = function(keyString,input){
    try{        
        return Cipher.decrypt(keyString, input);
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

module.exports = methods;

 //var utils = require('../utils/utils.js');
 //var encriptado = utils.encrypt('Hello world!');
 //console.log(encriptado);
 //var decriptado = utils.decrypt('x0yt2+YAiWFlNXWmazdHPZvJMEBiluGy07JrrUUwdU6UgvWUs8nuQVrTkkPap4DVjZ/Flx+5hkC/RzvOs5OW8g==');
 //console.log('DECRIPTED---->' + decriptado);
// //let hola = utils.todayAddDays(1);
// let hola = utils.random(1,10);
// console.log('1,10 ' + hola);
// hola = utils.random(1,100);
// console.log('1,100 ' + hola);
// hola = utils.random(1,1000);
// console.log('1,1000 ' + hola);
// hola = utils.random(10,15);
// console.log('10,15 ' + hola);
// hola = utils.random(15,20);
// console.log('15,20 ' + hola);
// hola = utils.random(100,200);
// console.log('100,200 ' + hola);
// hola = utils.random(1000,2000);
// console.log('1000,2000 ' + hola);
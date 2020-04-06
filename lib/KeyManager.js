/**
 * This file contains the library that supplies the functionality to the command actions in the 
 *  file ./commands/key.js
 */

const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
   constructor(){
       /**
        * instanciate a new configstore and give it the name of our application retrived form 
        *  our ./package.json file
        */
       this.conf = new Configstore(pkg.name);
   }

   /**
    * implement class methods
    */

   // saving our API key
   setKey(key){
       this.conf.set('apiKey', key);
       return key;
   }

   //retrive API key
   getKey(){
       const key = this.conf.get('apiKey');

       // throw an error if we didn't set our API key yet
       if(!key){
           throw new Error('No API Key Found - Get a key at https://nomics.com/ ');
       }

       return key;
   }

   // delete API key 
   deleteKey(){
       const key = this.conf.get('apiKey');

       // throw an error if we didn't set our API key yet
       if(!key){
           throw new Error('No API Key Found - Get a key at https://nomics.com/ ');
       }

       // remove the key from configstore
       this.conf.delete('apiKey');

       return;
   }



}

//exporting the library
module.exports = KeyManager;
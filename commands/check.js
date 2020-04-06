/**
 * this file contains sub-commands' action functions for the main command (key) inside the 
 *  file ./bin/schecker-check.js .
 */

const KeyManager = require('../lib/KeyManager.js');
const CryptoAPI = require('../lib/cryptoAPI.js');


const check = {
    async price(cmd){
        /**
         * catch Errors coming from keys operations or API call
         */
        try{
            /**
            * instanciate a new KeyManager and getting the Key from it
            */
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            /**
             * instanciate a new cryptoApi, then make the API call, using the key and cmd  both 
             * options
             */
            const api = new CryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            /**
             * success
             */
            console.log(priceOutputData);

        } catch(err){
            console.error(err.message.red);
        }
    }

}


module.exports = check;
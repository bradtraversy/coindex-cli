/**
 * This file contains the library that will deal with nomics API then supplies the functionality to 
 * the command actions in the 
 *  file ./commands/check.js
 */

const axios = require('axios');
const colors = require('colors');

class CryptoAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        /**
         * base url for the api call, we are going to add parameters to it dynamically
         */
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    /**
     * handling API requests
     */
    async getPriceData(coinOption, curOption){
        /**
         * catch no options passed, or Errors on connection
         */
        try{
            /**
             * initializing currency formatter
             */
            const formatter = Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: curOption
            })
            /**
             * waiting API response
             *  building API url, using our API key, and --options for check commands
             */
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

            /**
             * reforming API response
             */
            let output = '';

            /**
             * loop over currency data array responded by the API, each Element is an object -
             * contains all data for a specific currency
             */
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${ formatter.format( coin.price).green} | Rank: ${coin.rank.blue} \n`
            });

            /**
             * sending output to the main scoop
             */
            return output;
             
        } catch(err){
            /**
             * handling Error 401, 404 and others.
             */
            handleAPIError(err);
        }
    }
}


function handleAPIError(err){
    if(err.response.status === 401) {
        throw new Error ('Your API key is Invalid - Go to https://nomics.com/ ');
    } else if (err.response.status === 404) {
        throw new Error ('Your API is not Responding');
    } else {
        throw new Error(' something is not working');
    }
}

/**
 * exporting
 */
module.exports = CryptoAPI;
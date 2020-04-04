const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
  async price(cmd) {
    try {
      keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (err) {
      console.error(err.message.red);
    }
  }
};

module.exports = check;

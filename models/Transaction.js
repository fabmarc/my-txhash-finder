export default class Transaction {

  static find(txhash) {
    return fetch(`http://api.ethplorer.io/getTxInfo/${txhash}?apiKey=freekey`)
      .then((response) => response.json())
      .then((json) => {
        const { error, input } = json;
        if (error) return Promise.reject(error.message);
        return Promise.resolve(input);
      });
  }
}
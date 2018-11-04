import { request } from "../utils/request";

export default class Transaction {

  static find(txhash) {
    return request('get', `/getTxInfo/${txhash}`);
  }
}

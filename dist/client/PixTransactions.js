'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PixTransactionsAPI = void 0;
class PixTransactionsAPI {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  list(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield this.apiClient.get('/pix/transactions', {
          params,
        });
        return response.data;
      } catch (error) {
        console.error('Erro ao obter a lista de transações Pix:', error);
        throw error;
      }
    });
  }
}
exports.PixTransactionsAPI = PixTransactionsAPI;
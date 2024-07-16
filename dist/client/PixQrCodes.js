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
exports.PixQrCodesAPI = void 0;
class PixQrCodesAPI {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  newStatic(params) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield this.apiClient.post('/pix/qrCodes/static', {
          params,
        });
        return response.data;
      } catch (error) {
        console.error('Erro ao criar QR Code estático:', error);
        throw error;
      }
    });
  }
}
exports.PixQrCodesAPI = PixQrCodesAPI;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallmentsAPI = void 0;
class InstallmentsAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get('/installments', { params });
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a lista de cobranças:', error);
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/installments/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a cobrança:', error);
                throw error;
            }
        });
    }
    paymentBook(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/installments/${id}/paymentBook`, { params });
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a linha digiável do boleto da cobrança:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.delete(`/installments/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao deletar o parcelamento:', error);
                throw error;
            }
        });
    }
    refund(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/installments/${id}/refund`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao estornar o parcelamento:', error);
                throw error;
            }
        });
    }
}
exports.InstallmentsAPI = InstallmentsAPI;

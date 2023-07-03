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
exports.PaymentsAPI = void 0;
class PaymentsAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    new(paymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post('/payments', paymentData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao criar a cobrança:', error);
                throw error;
            }
        });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get('/payments', { params });
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
                const response = yield this.apiClient.get(`/payments/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a cobrança:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.delete(`/payments/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao deletar a cobrança:', error);
                throw error;
            }
        });
    }
    restore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/payments/${id}/restore`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao restaurar a cobrança:', error);
                throw error;
            }
        });
    }
    updateById(id, paymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/payments/${id}`, paymentData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao atualizar a cobrança:', error);
                throw error;
            }
        });
    }
    refund(id, refundData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/payments/${id}/refund`, refundData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao estornar a cobrança:', error);
                throw error;
            }
        });
    }
    getIdentificationField(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/payments/${id}/identificationField`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a linha digiável do boleto da cobrança:', error);
                throw error;
            }
        });
    }
    getPixQrCode(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/payments/${id}/pixQrCode`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter o QR Code Pix da cobrança:', error);
                throw error;
            }
        });
    }
    receiveInCash(id, paymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/payments/${id}/receiveInCash`, paymentData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao confirmar recebimento em dinheiro da cobrança:', error);
                throw error;
            }
        });
    }
    undoReceivedInCash(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/payments/${id}/undoReceivedInCash`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao desfazer a confirmação de recebimento em dinheiro da cobrança:', error);
                throw error;
            }
        });
    }
    limits() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/payments/limits`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter os limites diários de cobrança:', error);
                throw error;
            }
        });
    }
}
exports.PaymentsAPI = PaymentsAPI;

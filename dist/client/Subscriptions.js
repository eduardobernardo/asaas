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
exports.SubscriptionsAPI = void 0;
class SubscriptionsAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post('/subscriptions', params);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao criar uma nova assinatura:', error);
                throw error;
            }
        });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get('/subscriptions', { params });
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a lista de assinaturas:', error);
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/subscriptions/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a assinatura:', error);
                throw error;
            }
        });
    }
    getPayments(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/subscriptions/${id}/payments`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter as cobranças da assinatura:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.delete(`/subscriptions/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao deletar a assinatura:', error);
                throw error;
            }
        });
    }
    updateById(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/subscriptions/${id}`, params);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao atualizar a assinatura:', error);
                throw error;
            }
        });
    }
}
exports.SubscriptionsAPI = SubscriptionsAPI;

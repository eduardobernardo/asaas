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
exports.CustomersAPI = void 0;
class CustomersAPI {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    new(customerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post('/customers', customerData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao criar o cliente:', error);
                throw error;
            }
        });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get('/customers', { params });
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter a lista de clientes:', error);
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.get(`/customers/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao obter o cliente:', error);
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.delete(`/customers/${id}`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao deletar o cliente:', error);
                throw error;
            }
        });
    }
    restore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/customers/${id}/restore`);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao restaurar o cliente:', error);
                throw error;
            }
        });
    }
    updateById(id, customerData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.apiClient.post(`/customers/${id}`, customerData);
                return response.data;
            }
            catch (error) {
                console.error('Erro ao atualizar o cliente:', error);
                throw error;
            }
        });
    }
}
exports.CustomersAPI = CustomersAPI;

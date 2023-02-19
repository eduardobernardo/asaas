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
exports.setBaseUrl = void 0;
const node_fetch_1 = require("node-fetch");
let baseUrl = 'https://www.asaas.com';
// let baseUrl: string = 'https://sandbox.asaas.com'; //Sandbox
function setBaseUrl(url) {
    baseUrl = url;
}
exports.setBaseUrl = setBaseUrl;
function post(url, token, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullUrl = baseUrl + url;
        const response = yield (0, node_fetch_1.default)(fullUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'access_token': `${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to post ${fullUrl}: ${response.status} ${response.statusText}`);
        }
        return yield response.json();
    });
}
function get(url, token, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let fullUrl = baseUrl + url;
        if (data) {
            const queryString = new URLSearchParams(JSON.stringify(data));
            fullUrl += `?${queryString.toString()}`;
        }
        const response = yield (0, node_fetch_1.default)(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access_token': `${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch ${fullUrl}: ${response.status} ${response.statusText}`);
        }
        return yield response.json();
    });
}
function del(url, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullUrl = baseUrl + url;
        const response = yield (0, node_fetch_1.default)(fullUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access_token': `${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to delete ${fullUrl}: ${response.status} ${response.statusText}`);
        }
    });
}
const customers = {
    list: (token, data) => get(`/api/v3/customers/`, token, data),
    getById: (token, id, data) => get(`/api/v3/customers/${id}`, token, data),
    delete: (token, id) => del(`/api/v3/customers/${id}`, token),
    restore: (token, id) => post(`/api/v3/customers/${id}/restore`, token, {}),
    updateById: (token, id, data) => post(`/api/v3/customers/${id}`, token, data),
    create: (token, data) => post('/api/v3/customers', token, data),
};
const payments = {
    list: (token, data) => get(`/api/v3/payments/`, token, data),
    getById: (token, id, data) => get(`/api/v3/payments/${id}`, token, data),
    delete: (token, id) => del(`/api/v3/payments/${id}`, token),
    restore: (token, id) => post(`/api/v3/payments/${id}/restore`, token, {}),
    refund: (token, id) => post(`/api/v3/payments/${id}/refund`, token, {}),
    updateById: (token, id, data) => post(`/api/v3/payments/${id}`, token, data),
    create: (token, data) => post('/api/v3/payments', token, data),
    createInstallment: (token, data) => post('/api/v3/payments', token, data),
    tokenize: (token, data) => post('/api/v3/creditCard/tokenize', token, data),
    getBoletoBarCode: (token, id, data) => get(`/api/v3/payments/${id}/identificationField`, token, data),
    getPixQrCode: (token, id, data) => get(`/api/v3/payments/${id}/pixQrCode`, token, data),
    receiveInCash: (token, id, data) => post(`/api/v3/payments/${id}/receiveInCash`, token, data),
    undoReceivedInCash: (token, id) => post(`/api/v3/payments/${id}/undoReceivedInCash`, token, {}),
    getInstallmentsById: (token, id, data) => get(`/api/v3/installments/${id}`, token, data),
    listInstallments: (token, data) => get(`/api/v3/installments`, token, data),
    deleteInstallment: (token, id) => del(`/api/v3/installments/${id}`, token),
    refundInstallment: (token, id) => post(`/api/v3/installments/${id}/refund`, token, {}),
};
const subscriptions = {
    create: (token, data) => post('/api/v3/subscriptions', token, data),
    getById: (token, id, data) => get(`/api/v3/subscriptions/${id}`, token, data),
    getPaymentsById: (token, id, data) => get(`/api/v3/subscriptions/${id}/payments`, token, data),
    list: (token, data) => get(`/api/v3/subscriptions/`, token, data),
    delete: (token, id) => del(`/api/v3/subscriptions/${id}`, token),
    // restore: (token: string, id: string) => post(`/api/v3/subscriptions/${id}/restore`, token, {}),
    refund: (token, id) => post(`/api/v3/subscriptions/${id}/refund`, token, {}),
    updateById: (token, id, data) => post(`/api/v3/subscriptions/${id}`, token, data),
    getInvoicesById: (token, id, data) => get(`/api/v3/subscriptions/${id}/invoices`, token, data),
};
const accounts = {
    create: (token, data) => post('/api/v3/accounts', token, data),
    getById: (token, data) => get(`/api/v3/accounts`, token, data),
    list: (token, data) => get(`/api/v3/accounts`, token, data),
};
const custom = {
    get: (token, url, data) => get(url, token, data),
    delete: (token, url) => del(url, token),
    post: (token, url, data) => post(url, token, data),
};
const asaas = {
    setBaseUrl,
    customers,
    payments,
    subscriptions,
    accounts,
    custom
};
exports.default = asaas;

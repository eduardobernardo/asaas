"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsaasClient = void 0;
const axios_1 = require("axios");
const Customers_1 = require("../client/Customers");
class AsaasClient {
    constructor(apiKey, options = {}) {
        this.apiKey = apiKey;
        const baseURL = options.sandbox ? (options.sandboxUrl || 'https://sandbox.asaas.com/api/v3') : options.baseUrl ? options.baseUrl : 'https://www.asaas.com/api/v3';
        const apiClient = axios_1.default.create({
            baseURL,
            headers: {
                'access_token': this.apiKey
            }
        });
        this.customers = new Customers_1.CustomersAPI(apiClient);
    }
}
exports.AsaasClient = AsaasClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsaasClient = void 0;
const axios_1 = require("axios");
const Customers_1 = require("./Customers");
const Payments_1 = require("./Payments");
const Installments_1 = require("./Installments");
const Subscriptions_1 = require("./Subscriptions");
class AsaasClient {
    constructor(apiKey, options = {}) {
        this.apiKey = apiKey;
        const apiClient = axios_1.default;
        apiClient.defaults.baseURL = options.sandbox ? (options.sandboxUrl || 'https://sandbox.asaas.com/api/v3') : options.baseUrl ? options.baseUrl : 'https://api.asaas.com/v3';
        apiClient.defaults.headers.common['access_token'] = this.apiKey;
        this.customers = new Customers_1.CustomersAPI(apiClient);
        this.payments = new Payments_1.PaymentsAPI(apiClient);
        this.installments = new Installments_1.InstallmentsAPI(apiClient);
        this.subscriptions = new Subscriptions_1.SubscriptionsAPI(apiClient);
    }
}
exports.AsaasClient = AsaasClient;

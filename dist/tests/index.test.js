'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const AsaasClient_1 = require('../client/AsaasClient');
jest.mock('axios');
describe('AsaasClient', () => {
  test('construtor deve inicializar corretamente em modo Sandbox', () => {
    const apiKey = 'my-api-key';
    const options = { sandbox: true };
    const client = new AsaasClient_1.AsaasClient(apiKey, options);
    expect(client.customers).toBeDefined();
    expect(client.payments).toBeDefined();
    expect(client.installments).toBeDefined();
    expect(client.subscriptions).toBeDefined();
    expect(client.webhooks.payments).toBeDefined();
  });
});

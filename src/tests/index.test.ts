// Preferência no import do index pra garantir que tudo relevante está sendo exportado
import { AsaasClient, parseWebhookPayload } from '../index';

import webhookPaymentJSON from './fixtures/webhook_payment.json';
import invalidWebhookJSON from './fixtures/invalid_webhook.json';

jest.mock('axios');
describe('AsaasClient', () => {
  test('construtor deve inicializar corretamente em modo Sandbox', () => {
    const apiKey = 'my-api-key';
    const options = { sandbox: true };
    const client = new AsaasClient(apiKey, options);

    expect(client.customers).toBeDefined();
    expect(client.payments).toBeDefined();
    expect(client.installments).toBeDefined();
    expect(client.subscriptions).toBeDefined();
    expect(client.webhooks).toBeDefined();
    expect(client.pixTransactions).toBeDefined();
    expect(client.pixQrCodes).toBeDefined();
    expect(client.invoices).toBeDefined();
  });
});

describe('Webhooks', () => {
  test('parse de payment webhook', () => {
    const parsed = parseWebhookPayload({ ...webhookPaymentJSON });
    expect(parsed).not.toBeNull();

    // typescript infer no atributo payment
    expect(
      parsed && 'payment' in parsed ? parsed.payment.id : null,
    ).not.toBeNull();

    // typescript infer no atributo invoice
    expect(parsed && 'invoice' in parsed ? parsed.invoice.id : null).toBeNull();
  });

  test('parse de webhook não mapeado deve retornar null', () => {
    const parsed = parseWebhookPayload({ ...invalidWebhookJSON });
    expect(parsed).toBeNull();
  });
});

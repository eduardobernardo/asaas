// Preferência no import do index pra garantir que tudo relevante está sendo exportado
import { AsaasClient, parseWebhookPayload } from '../index';
import axios from 'axios';

import webhookPaymentJSON from './fixtures/webhook_payment.json';
import invalidWebhookJSON from './fixtures/invalid_webhook.json';

jest.mock('axios');
// Implementação real para o mock do console.error
jest.spyOn(console, 'error').mockImplementation(() => undefined);

describe('AsaasClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('constructor should initialize correctly in Sandbox mode', () => {
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
    expect(client.bill).toBeDefined();
    expect(client.transfers).toBeDefined();
    expect(client.myAccount).toBeDefined();
    expect(client.accounts).toBeDefined();
  });

  test('should initialize printError as true by default', async () => {
    // Mock axios to throw an error
    const mockError = new Error('API Error');
    (axios.create as jest.Mock).mockReturnValue({
      post: jest.fn().mockRejectedValue(mockError),
      get: jest.fn().mockRejectedValue(mockError),
      delete: jest.fn().mockRejectedValue(mockError),
    });

    const apiKey = 'my-api-key';
    const client = new AsaasClient(apiKey);

    // We need to test the real implementation, not a mock
    try {
      await client.payments.new({
        customer: '123',
        billingType: 'BOLETO',
        dueDate: new Date(),
        value: 100,
      });
      // If we reach here, the test should fail
      fail('Expected an error to be thrown');
    } catch (error) {
      // Verifying that console.error was called
      expect(console.error).toHaveBeenCalled();
      expect(error).toBe(mockError);
    }
  });

  test('should disable error logs when printError is false', async () => {
    // Mock axios to throw an error
    const mockError = new Error('API Error');
    (axios.create as jest.Mock).mockReturnValue({
      post: jest.fn().mockRejectedValue(mockError),
      get: jest.fn().mockRejectedValue(mockError),
      delete: jest.fn().mockRejectedValue(mockError),
    });

    const apiKey = 'my-api-key';
    const options = { printError: false };
    const client = new AsaasClient(apiKey, options);

    // We need to test the real implementation, not a mock
    try {
      await client.payments.new({
        customer: '123',
        billingType: 'BOLETO',
        dueDate: new Date(),
        value: 100,
      });
      // If we reach here, the test should fail
      fail('Expected an error to be thrown');
    } catch (error) {
      // Verifying that console.error was not called
      expect(console.error).not.toHaveBeenCalled();
      expect(error).toBe(mockError);
    }
  });

  test('should pass printError value to all API instances', () => {
    const apiKey = 'my-api-key';
    const options = { printError: false };
    const client = new AsaasClient(apiKey, options);

    // Acessando propriedades para teste
    const payments = client.payments as unknown as { printError: boolean };
    const customers = client.customers as unknown as { printError: boolean };
    const subscriptions = client.subscriptions as unknown as {
      printError: boolean;
    };

    expect(payments.printError).toBe(false);
    expect(customers.printError).toBe(false);
    expect(subscriptions.printError).toBe(false);
  });
});

describe('Webhooks', () => {
  test('should parse payment webhook correctly', () => {
    const parsed = parseWebhookPayload({ ...webhookPaymentJSON });
    expect(parsed).not.toBeNull();

    // typescript infer on payment attribute
    expect(
      parsed && 'payment' in parsed ? parsed.payment.id : null,
    ).not.toBeNull();

    // typescript infer on invoice attribute
    expect(parsed && 'invoice' in parsed ? parsed.invoice.id : null).toBeNull();
  });

  test('parse of unmapped webhook should return null', () => {
    const parsed = parseWebhookPayload({ ...invalidWebhookJSON });
    expect(parsed).toBeNull();
  });
});

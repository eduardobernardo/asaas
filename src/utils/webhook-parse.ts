import {
  IAsaasWebhook,
  IAsaasWebhookInvoice,
  IAsaasWebhookPayment,
} from '@/types';

export function parseWebhookPayload(payload: {
  event: string;
}): IAsaasWebhook | null {
  if (payload.event.startsWith('PAYMENT_')) {
    return payload as IAsaasWebhookPayment;
  }

  if (payload.event.startsWith('INVOICE_')) {
    return payload as IAsaasWebhookInvoice;
  }

  return null;
}

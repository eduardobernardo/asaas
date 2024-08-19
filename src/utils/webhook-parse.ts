import {
  IAsaasWebhook,
  IAsaasWebhookAccountStatus,
  IAsaasWebhookBill,
  IAsaasWebhookInvoice,
  IAsaasWebhookPayment,
  IAsaasWebhookTransfer,
} from '@/types';

export function parseWebhookPayload(payload: {
  event: string;
}): IAsaasWebhook | null {
  if (payload.event.startsWith('ACCOUNT_STATUS_')) {
    return payload as IAsaasWebhookAccountStatus;
  }

  if (payload.event.startsWith('BILL_')) {
    return payload as IAsaasWebhookBill;
  }

  if (payload.event.startsWith('TRANSFER_')) {
    return payload as IAsaasWebhookTransfer;
  }

  if (payload.event.startsWith('PAYMENT_')) {
    return payload as IAsaasWebhookPayment;
  }

  if (payload.event.startsWith('INVOICE_')) {
    return payload as IAsaasWebhookInvoice;
  }

  return null;
}

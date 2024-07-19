import { InvoicesWebhook } from '@/enums/InvoicesWebhook';
import { PaymentsWebhook } from '@/enums/PaymentsWebhook';
import { IAsaasPagination, IAsaasPaymentResponse } from '@/types/AsaasTypes';

export interface ICreateWebhookParams {
  name: string;
  url: string;
  email: string;
  sendType: 'SEQUENTIALLY' | 'NON_SEQUENTIALLY';
  enabled?: boolean; // default true
  interrupted?: boolean; // default false
  authToken?: string;
  events: (InvoicesWebhook | PaymentsWebhook)[];
}

export type IUpdateWebhookParams = ICreateWebhookParams;

export interface IWebhookResponse extends ICreateWebhookParams {
  id: string;
}

export type IListWebhooksResponse = IAsaasPagination<IWebhookResponse>;

interface IAsaasWebhookBase {
  id: string;
  dateCreated: string;
}

export interface IAsaasWebhookPayment extends IAsaasWebhookBase {
  event: PaymentsWebhook;
  payment: IAsaasPaymentResponse & {
    subscription?: string; // somente quando pertencer a uma assinatura
  };
}

export interface IAsaasWebhookInvoice extends IAsaasWebhookBase {
  event: InvoicesWebhook;
  invoice: unknown; // @TO-DO arrumar
}

export type IAsaasWebhook = IAsaasWebhookPayment | IAsaasWebhookInvoice;

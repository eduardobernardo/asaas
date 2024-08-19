import { InvoicesWebhook } from '@/enums/InvoicesWebhook';
import { PaymentsWebhook } from '@/enums/PaymentsWebhook';
import { IAsaasPagination, IAsaasPaymentResponse } from '@/types/AsaasTypes';
import { IInvoiceResponse } from '@/types/InvoiceTypes';
import { IBillResponse } from '@/types/BillTypes';
import {
  AccountStatusWebhook,
  BillWebhook,
  PhoneRechargeWebhook,
  ReceivableWebhook,
  TransferWebhook,
} from '@/enums';
import { ITransferResponse } from './TransferTypes';
import { IAccountStatus } from './AccountTypes';

export type WebhookSendType = 'SEQUENTIALLY' | 'NON_SEQUENTIALLY';

export interface ICreateWebhookParams {
  name: string;
  url: string;
  email: string;
  sendType: WebhookSendType;
  enabled?: boolean; // default true
  interrupted?: boolean; // default false
  authToken?: string;
  events: (
    | AccountStatusWebhook
    | BillWebhook
    | InvoicesWebhook
    | PaymentsWebhook
    | PhoneRechargeWebhook
    | ReceivableWebhook
    | TransferWebhook
  )[];
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

export interface IAsaasWebhookAccountStatus extends IAsaasWebhookBase {
  event: AccountStatusWebhook;
  accountStatus: IAccountStatus;
}

export interface IAsaasWebhookBill extends IAsaasWebhookBase {
  event: BillWebhook;
  bill: IBillResponse;
}

export interface IAsaasWebhookTransfer extends IAsaasWebhookBase {
  event: TransferWebhook;
  bill: ITransferResponse;
}

export interface IAsaasWebhookPayment extends IAsaasWebhookBase {
  event: PaymentsWebhook;
  payment: IAsaasPaymentResponse & {
    subscription?: string; // somente quando pertencer a uma assinatura
  };
}

export interface IAsaasWebhookInvoice extends IAsaasWebhookBase {
  event: InvoicesWebhook;
  invoice: IInvoiceResponse;
}

export type IAsaasWebhook =
  | IAsaasWebhookAccountStatus
  | IAsaasWebhookBill
  | IAsaasWebhookTransfer
  | IAsaasWebhookPayment
  | IAsaasWebhookInvoice;

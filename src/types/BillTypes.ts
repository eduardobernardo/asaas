import { IAsaasPagination } from '@/types/AsaasTypes';

export interface ICreateBillParams {
  identificationField: string;
  scheduleDate?: string;
  description?: string;
  discount?: number;
  interest?: number;
  fine?: number;
  dueDate?: string;
  value?: number;
  externalReference?: string;
}

export type IUpdateBillParams = ICreateBillParams;

export type BillStatusType =
  | 'PENDING'
  | 'PAID'
  | 'CANCELLED'
  | 'REFUNDED'
  | 'BANK_PROCESSING'
  | 'FAILED'
  | 'AWAITING_CHECKOUT_RISK_ANALYSIS_REQUEST';

export interface IBillResponse extends ICreateBillParams {
  object: string;
  id: string;
  status: BillStatusType;
  paymentDate: string;
  fee: number;
  companyName: string;
  transactionReceiptUrl: string;
  canBeCancelled: boolean;
  failReasons: string[];
}

export interface IListBillsParams {
  offset?: number;
  limit?: number;
}

export type IListBillsResponse = IAsaasPagination<IBillResponse>;

export interface IListSimulateBillParams {
  identificationField?: string;
  barCode?: string;
}

export interface IBankSlipInfoResponse {
  identificationField: string;
  value: number;
  dueDate: string;
  companyName: string;
  bank: string;
  beneficiaryCpfCnpj: string;
  beneficiaryName: string;
  allowChangeValue: boolean;
  minValue: number;
  maxValue: number;
  discountValue: number;
  interestValue: number;
  fineValue: number;
  originalValue: number;
  totalDiscountValue: number;
  totalAdditionalValue: number;
  isOverdue: boolean;
}

export interface ISimulateBillResponse {
  minimumScheduleDate: string;
  fee: number;
  bankSlipInfo: IBankSlipInfoResponse;
}

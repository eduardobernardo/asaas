import { IAsaasPagination } from '@/types/AsaasTypes';

export interface IBank {
  code: string;
}

export interface IBankAccount {
  bank: IBank;
  accountName?: string;
  ownerName: string;
  ownerBirthDate?: string;
  cpfCnpj: string;
  agency: string;
  account: string;
  accountDigit: string;
  bankAccountType: BankAccountType;
  ispb: string;
}

export interface ICreateTransferParams {
  value: number;
  bankAccount: IBankAccount;
  operationType?: OperationType;
  pixAddressKey?: string;
  pixAddressKeyType?: PixAddressKeyType;
  description: string;
  scheduleDate: string;
}

export type BankAccountType = 'CONTA_CORRENTE' | 'CONTA_POUPANCA';

export type OperationType = 'PIX' | 'TED';

export type OperationResponseType = 'PIX' | 'TED' | 'INTERNAL';

export type PixAddressKeyType = 'CPF' | 'CNPJ' | 'EMAIL' | 'PHONE' | 'EVP';

export type TransferType = 'ASAAS_ACCOUNT' | 'BANK_ACCOUNT';

export type TransferStatusType =
  | 'PENDING'
  | 'BANK_PROCESSING'
  | 'DONE'
  | 'CANCELLED'
  | 'FAILED';

export interface IBankResponse extends IBank {
  ispb: string;
  name: string;
}

export interface IBankAccountResponse
  extends Omit<IBankAccount, 'ownerBirthDate' | 'bankAccountType'> {
  bank: IBankResponse;
  pixAddressKey: string;
}

export interface ITransferResponse
  extends Omit<ICreateTransferParams, 'bankAccount' | 'operationType'> {
  object: string;
  id: string;
  type: TransferType;
  dateCreated: string;
  netValue: number;
  status: TransferStatusType;
  transferFee: number;
  effectiveDate: any;
  endToEndIdentifier: any;
  authorized: boolean;
  failReason: string;
  bankAccount: IBankAccountResponse;
  transactionReceiptUrl: string;
  operationType: OperationResponseType;
}

export interface ICreateInternalTransferParams {
  value: number;
  walletId: string;
}

export interface ITransferInternalResponse extends ITransferResponse {
  walletId: string;
}

export interface IListTransfersParams {
  'dateCreated[ge]'?: string;
  'dateCreated[le]'?: string;
  'transferDate[ge]'?: string;
  'transferDate[le]'?: string;
  type?: TransferType;
}

export type IListTransfersResponse = IAsaasPagination<ITransferResponse>;

export interface IListSimulateTransferParams {
  identificationField?: string;
  barCode?: string;
}

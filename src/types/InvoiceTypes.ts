import { IAsaasPagination } from '@/types/AsaasTypes';

export interface IInvoiceTaxes {
  retainIss: boolean;
  iss: number;
  cofins: number;
  csll: number;
  inss: number;
  ir: number;
  pis: number;
}

export interface ICreateInvoiceParams {
  payment?: string;
  installment?: string;
  customer?: string;
  serviceDescription: string;
  observations: string;
  externalReference?: string;
  value: number;
  deductions: number;
  effectiveDate: string;
  municipalServiceId?: string;
  municipalServiceCode?: string;
  municipalServiceName: string;
  updatePayment?: boolean;
  taxes: IInvoiceTaxes;
}

export type IUpdateInvoiceParams = ICreateInvoiceParams;

export type InvoiceStatusType =
  | 'SCHEDULED'
  | 'SYNCHRONIZED'
  | 'AUTHORIZED'
  | 'PROCESSING_CANCELLATION'
  | 'CANCELED'
  | 'CANCELLATION_DENIED'
  | 'ERROR';

export interface IInvoiceResponse extends ICreateInvoiceParams {
  object: string;
  id: string;
  type: string;
  status: InvoiceStatusType;
  statusDescription: string;
  pdfUrl: string;
  xmlUrl: string;
  rpsSerie: string;
  rpsNumber: string;
  number: string;
  validationCode: string;
  estimatedTaxesDescription: string;
}

export interface IListInvoicesParams {
  'effectiveDate[ge]'?: string;
  'effectiveDate[le]'?: string;
  payment?: string;
  installment?: string;
  externalReference?: string;
  status?: InvoiceStatusType;
  customer?: string;
  offset?: number;
  limit?: number;
}

export type IListInvoicesResponse = IAsaasPagination<IInvoiceResponse>;

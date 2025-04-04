export interface AsaasOptions {
  sandbox?: boolean;
  sandboxUrl?: string;
  baseUrl?: string;
  userAgent?: string;
  printError?: boolean;
}

export interface APIOptions {
  printError?: boolean;
}

export interface IAsaasPagination<T> {
  object: 'list';
  hasMore: boolean;
  totalCount: number;
  limit: number;
  offset: number;
  data: T[];
}

export interface IAsaasCustomer {
  name: string;
  cpfCnpj: string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  postalCode?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  externalReference?: string;
  notificationDisabled?: boolean;
  additionalEmails?: string;
  municipalInscription?: string;
  stateInscription?: string;
  observations?: string;
}

export interface IAsaasCustomerResponse {
  object?: string;
  id: string;
  dateCreated?: string;
  name?: string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
  postalCode?: string;
  cpfCnpj?: string;
  personType?: string;
  deleted?: boolean;
  additionalEmails?: string;
  externalReference?: string;
  notificationDisabled?: boolean;
  city?: number;
  state?: string;
  country?: string;
  observations?: string;
}

export interface IListCustomersParams {
  name?: string;
  email?: string;
  cpfCnpj?: string;
  groupName?: string;
  externalReference?: string;
  offset?: number;
  limit?: number;
}

export type IListAsaasCustomerResponse =
  IAsaasPagination<IAsaasCustomerResponse>;

export interface IAsaasDeleteResponse {
  deleted?: boolean;
  id?: string;
}

//Payments
export interface IAsaasPayment {
  customer: string;
  billingType: string;
  dueDate: Date;
  value: number;
  description?: string;
  externalReference?: string;
  paymentExternalReference?: string;
  creditCard?: CreditCard;
  creditCardHolderInfo?: CreditCardHolderInfo;
  creditCardToken?: string;
  installmentCount?: number;
  installmentValue?: number;
  totalValue?: number;
  remoteIp?: string;
  discount?: Discount;
  fine?: Fine;
  interest?: Fine;
  postalService?: boolean;
  authorizedOnly?: boolean;
  split?: Split[];
  callback?: Callback;
}

export interface IAsaasPaymentResponse {
  object?: string;
  id?: string;
  dateCreated?: Date;
  customer?: string;
  paymentLink?: null;
  installment?: string;
  dueDate?: Date;
  value?: number;
  netValue?: number;
  billingType?: string;
  canBePaidAfterDueDate?: boolean;
  pixTransaction?: null;
  status?: string;
  description?: string;
  externalReference?: string;
  confirmedDate?: Date;
  originalValue?: null;
  interestValue?: null;
  originalDueDate?: Date;
  paymentDate?: null;
  clientPaymentDate?: null;
  installmentNumber?: null;
  transactionReceiptUrl?: null;
  nossoNumero?: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  invoiceNumber?: string;
  discount?: Discount;
  fine?: Fine;
  interest?: Fine;
  deleted?: boolean;
  postalService?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
  refunds?: null;
  creditCard?: CreditCardResponse;
}

export interface IListPaymentsParams {
  customer?: string;
  customerGroupName?: string;
  billingType?: string;
  status?: string;
  subscription?: string;
  installment?: string;
  externalReference?: string;
  paymentDate?: string;
  estimatedCreditDate?: string;
  pixQrCodeId?: string;
  anticipated?: boolean;
  'dateCreated[ge]'?: string;
  'dateCreated[le]'?: string;
  'paymentDate[ge]'?: string;
  'paymentDate[le]'?: string;
  'estimatedCreditDate[ge]'?: string;
  'estimatedCreditDate[le]'?: string;
  'dueDate[ge]'?: string;
  'dueDate[le]'?: string;
  user?: string;
  offset?: number;
  limit?: number;
}

export type IListAsaasPaymentsResponse =
  IAsaasPagination<IAsaasPaymentResponse>;

export interface IAsaasPaymentRefund {
  value?: number;
  description?: string;
}

export interface IAsaasPaymentBoletoResponse {
  identificationField?: string;
  nossoNumero?: string;
  barCode?: string;
}

export interface IAsaasPaymentPixQrCodeResponse {
  encodedImage?: string;
  payload?: string;
  expirationDate?: Date;
}

export interface IAsaasPaymentReceivedInCash {
  paymentDate?: Date;
  value?: number;
  notifyCustomer?: boolean;
}

export interface CreditCard {
  holderName?: string;
  number?: string;
  expiryMonth?: string;
  expiryYear?: string;
  ccv?: string;
}

export interface CreditCardHolderInfo {
  name?: string;
  email?: string;
  cpfCnpj?: string;
  postalCode?: string;
  addressNumber?: string;
  addressComplement?: null;
  phone?: string;
  mobilePhone?: string;
}

export interface CreditCardResponse {
  creditCardNumber?: string;
  creditCardBrand?: string;
  creditCardToken?: string;
}

export type DiscountType = 'FIXED' | 'PERCENTAGE';

export interface Discount {
  value?: number;
  dueDateLimitDays?: number;
  type?: DiscountType;
}

export interface Fine {
  value?: number;
}

export interface Split {
  walletId: string;
  fixedValue?: number;
  percentualValue?: number;
  description?: string;
}

export interface IAsaasPaymentLimitResponse {
  creation?: Creation;
}

export interface Creation {
  daily?: Daily;
}

export interface Daily {
  limit?: number;
  used?: number;
  wasReached?: boolean;
}

export interface IListInstallmentsParams {
  offset?: number;
  limit?: number;
}

export interface IAsaasPaymentInstallment {
  object?: string;
  id?: string;
  value?: number;
  netValue?: number;
  paymentValue?: number;
  installmentCount?: number;
  billingType?: string;
  paymentDate?: null;
  description?: string;
  expirationDay?: number;
  deleted?: boolean;
  dateCreated?: Date;
  customer?: string;
  paymentLink?: string;
  transactionReceiptUrl?: null;
  chargeback?: Chargeback;
}

export interface Chargeback {
  status?: string;
  reason?: string;
}

export type IListAsaasInstallmentsResponse =
  IAsaasPagination<IAsaasPaymentInstallment>;

export interface IInstallmentsParams {
  sort?: string;
  order?: string;
}

export type SubscriptionCycleType =
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'MONTHLY'
  | 'BIMONTHLY'
  | 'QUARTERLY'
  | 'SEMIANNUALLY'
  | 'YEARLY';

export type SubscriptionBillingType =
  | 'UNDEFINED'
  | 'BOLETO'
  | 'CREDIT_CARD'
  | 'PIX';

// Subscriptions
// https://docs.asaas.com/reference/criar-nova-assinatura
export interface ICreateSubscriptionParams {
  customer: string;
  billingType: SubscriptionBillingType;
  value: number;
  nextDueDate: string;
  discount?: Discount;
  interest?: Fine;
  fine?: Fine;
  cycle: SubscriptionCycleType;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  externalReference?: string;
  split?: Split[];
  callback?: Callback;
}

// https://docs.asaas.com/reference/criar-assinatura-com-cartao-de-credito
export interface ICreateSubscriptionWithCreditCardParams
  extends ICreateSubscriptionParams {
  creditCard?: CreditCard;
  creditCardHolderInfo?: CreditCardHolderInfo;
  creditCardToken?: string;
  remoteIp?: string;
}

export interface IListSubscriptionsParams {
  customer?: string;
  customerGroupName?: string;
  billingType?: string;
  status?: string;
  deletedOnly?: boolean;
  includeDeleted?: boolean;
  externalReference?: string;
  order?: string;
  sort?: string;
  offset?: number;
  limit?: number;
}

export type IListSubscriptionsResponse = IAsaasPagination<ISubscription>;

export type SubscriptionStatusType = 'ACTIVE' | 'INACTIVE';

export interface IUpdateSubscriptionParams
  extends Partial<ICreateSubscriptionParams> {
  updatePendingPayments?: boolean;
  status?: SubscriptionStatusType;
}

export interface ISubscription {
  object?: string;
  id?: string;
  dateCreated?: string;
  customer?: string;
  paymentLink?: string;
  billingType?: string;
  value?: number;
  cycle?: string;
  nextDueDate?: string;
  description?: string;
  status?: string;
  deleted?: boolean;
  discount?: Discount;
  fine?: Fine;
  interest?: Fine;
  creditCard?: CreditCardResponse;
}

export interface ISubscriptionPayment {
  object?: string;
  id?: string;
  dateCreated?: string;
  customer?: string;
  paymentLink?: string;
  value?: number;
  netValue?: number;
  originalValue?: string;
  interestValue?: string;
  description?: string;
  billingType?: string;
  canBePaidAfterDueDate?: boolean;
  status?: string;
  dueDate?: string;
  originalDueDate?: string;
  paymentDate?: string;
  clientPaymentDate?: string;
  installmentNumber?: string;
  invoiceUrl?: string;
  invoiceNumber?: string;
  externalReference?: string;
  deleted?: boolean;
  bankSlipUrl?: string;
  postalService?: boolean;
  anticipated?: boolean;
  anticipable?: boolean;
}

export type IListSubscriptionPaymentsResponse =
  IAsaasPagination<ISubscriptionPayment>;

export interface IPixTransaction {
  id: string;
  transferId: string;
  endToEndIdentifier?: string;
  finality?: string;
  value: number;
  changeValue?: number;
  refundedValue: number;
  dateCreated: string;
  effectiveDate: string;
  scheduledDate?: string;
  status: string;
  type: string;
  originType: string;
  conciliationIdentifier?: string;
  description?: string;
  transactionReceiptUrl?: string;
  chargedFeeValue: number;
  canBeRefunded: boolean;
  refundDisabledReason?: string;
  refusalReason?: string;
  canBeCanceled: boolean;
  originalTransaction?: string;
  externalAccount: PixTransactionExternalAccount;
  qrCode?: string;
  payment?: string;
  addressKey?: string;
  addressKeyType?: string;
  externalReference?: string;
}

export interface PixTransactionExternalAccount {
  ispb: number;
  ispbName: string;
  name: string;
  agency: string;
  account: string;
  accountDigit: string;
  accountType: string;
  cpfCnpj: string;
  addressKey?: string;
  addressKeyType?: string;
}

export type IListPixTransactionsResponse = IAsaasPagination<IPixTransaction>;

export interface IListPixTransactionsParams {
  offset?: number;
}

export interface IPixStaticQrCode {
  addressKey: string;
  description?: string;
  value: number;
  format?: string;
  expirationDate?: string;
  expirationSeconds?: number;
  allowsMultiplePayments?: boolean;
}

export interface IPixStaticQrCodeResponse {
  id: string;
  encodedImage?: string;
  payload?: string;
  allowsMultiplePayments: boolean;
  expirationDate: string;
}

export interface Callback {
  successUrl: string;
  autoRedirect?: boolean;
}

export interface ICity {
  object: string;
  id: number;
  ibgeCode: string;
  name: string;
  districtCode: string;
  district: string;
  state: string;
}

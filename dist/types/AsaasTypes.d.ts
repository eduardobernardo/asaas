export interface AsaasOptions {
    sandbox?: boolean;
    sandboxUrl?: string;
    baseUrl?: string;
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
export interface IListAsaasCustomerResponse {
    object: string;
    hasMore: boolean;
    totalCount: number;
    limit: number;
    offset: number;
    data: IAsaasCustomerResponse[];
}
export interface IAsaasDeleteResponse {
    deleted?: boolean;
    id?: string;
}
export interface IAsaasPayment {
    customer: string;
    billingType: string;
    dueDate: Date;
    value: number;
    description?: string;
    externalReference?: string;
    creditCard?: CreditCard;
    creditCardHolderInfo?: CreditCardHolderInfo;
    creditCardToken?: string;
    installmentCount?: number;
    installmentValue?: number;
    remoteIp?: string;
    discount?: Discount;
    fine?: Fine;
    interest?: Fine;
    postalService?: boolean;
    authorizedOnly?: boolean;
    split?: Split;
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
    "dateCreated[ge]"?: string;
    "dateCreated[le]"?: string;
    "paymentDate[ge]"?: string;
    "paymentDate[le]"?: string;
    "estimatedCreditDate[ge]"?: string;
    "estimatedCreditDate[le]"?: string;
    "dueDate[ge]"?: string;
    "dueDate[le]"?: string;
    user?: string;
    offset?: number;
    limit?: number;
}
export interface IListAsaasPaymentsResponse {
    object?: string;
    hasMore?: boolean;
    totalCount?: number;
    limit?: number;
    offset?: number;
    data?: IAsaasPaymentResponse[];
}
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
export interface Discount {
    value?: number;
    dueDateLimitDays?: number;
}
export interface Fine {
    value?: number;
}
export interface Split {
    walletId: string;
    fixedValue?: number;
    percentualValue?: number;
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
export interface IListAsaasInstallmentsResponse {
    object?: string;
    hasMore?: boolean;
    totalCount?: number;
    limit?: number;
    offset?: number;
    data?: IAsaasPaymentInstallment[];
}
export interface IInstallmentsParams {
    sort?: string;
    order?: string;
}
export interface ICreateSubscriptionParams {
    customer: string;
    billingType: string;
    value: number;
    nextDueDate: string;
    discount?: Discount;
    interest?: Fine;
    fine?: Fine;
    cycle: string;
    description?: string;
    endDate?: string;
    maxPayments?: number;
    updatePendingPayments?: boolean;
    externalReference?: string;
    split?: Split;
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
export interface IListSubscriptionsResponse {
    object?: string;
    hasMore?: boolean;
    totalCount?: number;
    limit?: number;
    offset?: number;
    data?: ISubscription[];
}
export interface IUpdateSubscriptionParams {
    billingType: string;
    nextDueDate: string;
    value: number;
    discount?: Discount;
    interest?: Fine;
    fine?: Fine;
    cycle: string;
    description?: string;
    updatePendingPayments?: boolean;
    externalReference?: string;
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
export interface IListSubscriptionPaymentsResponse {
    object?: string;
    hasMore?: boolean;
    totalCount?: number;
    limit?: number;
    offset?: number;
    data?: ISubscriptionPayment[];
}

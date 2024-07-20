import { IAsaasPagination, ICity } from './AsaasTypes';
import { ICreateWebhookParams } from './WebhookTypes';

/* ---------------- MY ACCOUNT ---------------- */

export type PersonType = 'FISICA' | 'JURIDICA';

export type CompanyType = 'MEI' | 'LIMITED' | 'INDIVIDUAL' | 'ASSOCIATION';

export interface IUpdateCommercialInfo {
  personType?: PersonType;
  cpfCnpj?: string;
  name?: string;
  companyName?: string;
  birthDate?: string;
  companyType?: CompanyType;
  incomeValue?: number;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  site?: string;
  postalCode?: string;
  address?: string;
  addressNumber?: string;
  complement?: string;
  province?: string;
}

export type CommercialInfoStatusType =
  | 'APPROVED'
  | 'AWAITING_ACTION_AUTHORIZATION'
  | 'DENIED'
  | 'PENDING';

export interface ICommercialInfoResponse
  extends Required<IUpdateCommercialInfo> {
  status: CommercialInfoStatusType;
  incomeRange: string;
  city: ICity;
  denialReason: string;
}

export interface IUpdatePaymentCheckoutConfig {
  logoBackgroundColor: string;
  infoBackgroundColor: string;
  fontColor: string;
  enabled?: boolean;
  logoFile?: string;
}

export type UpdatePaymentCheckoutConfigStatusType =
  | 'AWAITING_APPROVAL'
  | 'APPROVED'
  | 'REJECTED';

export interface IPaymentCheckoutConfigResponse
  extends IUpdatePaymentCheckoutConfig {
  object: string;
  observations: string;
  status: UpdatePaymentCheckoutConfigStatusType;
}

export interface IAccountNumberResponse {
  agency: string;
  account: string;
  accountDigit: string;
}

export interface IAccountFeesResponse {
  payment: {
    bankSlip: {
      defaultValue: number;
      discountValue: number;
      expirationDate: string;
      daysToReceive: number;
    };
    creditCard: {
      operationValue: number;
      oneInstallmentPercentage: number;
      upToSixInstallmentsPercentage: number;
      upToTwelveInstallmentsPercentage: number;
      discountOneInstallmentPercentage?: number;
      discountUpToSixInstallmentsPercentage?: number;
      discountUpToTwelveInstallmentsPercentage?: number;
      discountExpiration?: string;
      daysToReceive: number;
    };
    debitCard: {
      operationValue: number;
      defaultPercentage: number;
      daysToReceive: number;
    };
    pix: {
      fixedFeeValue?: number;
      fixedFeeValueWithDiscount?: number;
      percentageFee: number;
      minimumFeeValue: number;
      maximumFeeValue: number;
      discountExpiration?: string;
      monthlyCreditsWithoutFee: number;
      creditsReceivedOfCurrentMonth: number;
    };
  };
  transfer: {
    monthlyTransfersWithoutFee: number;
    ted: {
      feeValue: number;
      consideredInMonthlyTransfersWithoutFee: boolean;
    };
    pix: {
      feeValue: number;
      discountValue: number;
      expirationDate: number;
      consideredInMonthlyTransfersWithoutFee: boolean;
    };
  };
  notification: {
    phoneCallFeeValue: number;
    whatsAppFeeValue: number;
    messagingFeeValue: number;
  };
  creditBureauReport: {
    naturalPersonFeeValue: number;
    legalPersonFeeValue: number;
  };
  invoice: {
    feeValue: number;
  };
  anticipation: {
    creditCard: {
      detachedMonthlyFeeValue: number;
      installmentMonthlyFeeValue: number;
    };
    bankSlip: {
      monthlyFeePercentage: number;
    };
  };
}

export type AccountStatusType =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED'
  | 'AWAITING_APPROVAL';

export interface IAccountStatus {
  id: string;
  commercialInfo: AccountStatusType;
  bankAccountInfo: AccountStatusType;
  documentation: AccountStatusType;
  general: AccountStatusType;
}

export interface IWallet {
  object: string;
  id: string;
}

export type IListAccountWallets = IAsaasPagination<IWallet>

export interface IDeleteAccountParams {
  removeReason: string;
}

export interface IDeleteAccountResponse {
  observations: string;
}

/* ---------------- ACCOUNTS ---------------- */

export interface ICreateAccountParams {
  name: string;
  email: string;
  loginEmail?: string;
  cpfCnpj: string;
  birthDate?: string;
  companyType?: CompanyType;
  phone?: string;
  mobilePhone: string;
  site?: string;
  incomeValue: number;
  address: string;
  addressNumber: string;
  complement?: string;
  province: string;
  postalCode: string;
  webhooks?: ICreateWebhookParams[];
}

export type IncomingRangeType =
  | 'UP_TO_5K'
  | 'FROM_5K_TO_10K'
  | 'FROM_10K_TO_20K'
  | 'ABOVE_20K'
  | 'UP_TO_50K'
  | 'FROM_50K_TO_100K'
  | 'FROM_100K_TO_250K'
  | 'FROM_250K_TO_1MM'
  | 'FROM_1MM_TO_5MM ABOVE_5MM';

export interface IAccountResponse
  extends Omit<ICreateAccountParams, 'webhooks'> {
  object: string;
  id: string;
  personType: PersonType;
  city: number;
  state: string;
  country: string;
  tradingName: string;
  incomeRange: IncomingRangeType;
  walletId: string;
  accountNumber: IAccountNumberResponse;
}

export interface IAccountResponseWithApiKey extends IAccountResponse {
  apiKey: string;
}

export interface IListAccountsParams {
  cpfCnpj?: string;
  email?: string;
  name?: string;
  walletId?: string;
  offset?: number;
  limit?: number;
}

export type IListAccountsResponse = IAsaasPagination<IAccountResponse>

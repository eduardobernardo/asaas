import { AxiosInstance } from "axios";
import { IAsaasDeleteResponse, IAsaasPayment, IAsaasPaymentBoletoResponse, IAsaasPaymentLimitResponse, IAsaasPaymentPixQrCodeResponse, IAsaasPaymentReceivedInCash, IAsaasPaymentRefund, IAsaasPaymentResponse, IListAsaasPaymentsResponse, IListPaymentsParams } from "../types/AsaasTypes";
export declare class PaymentsAPI {
    private apiClient;
    constructor(apiClient: AxiosInstance);
    new(paymentData: IAsaasPayment): Promise<IAsaasPaymentResponse>;
    list(params?: IListPaymentsParams): Promise<IListAsaasPaymentsResponse>;
    getById(id: string): Promise<IAsaasPaymentResponse>;
    delete(id: string): Promise<IAsaasDeleteResponse>;
    restore(id: string): Promise<IAsaasPaymentResponse>;
    updateById(id: string, paymentData: IAsaasPayment): Promise<IAsaasPaymentResponse>;
    refund(id: string, refundData: IAsaasPaymentRefund): Promise<IAsaasPaymentResponse>;
    getIdentificationField(id: string): Promise<IAsaasPaymentBoletoResponse>;
    getPixQrCode(id: string): Promise<IAsaasPaymentPixQrCodeResponse>;
    receiveInCash(id: string, paymentData: IAsaasPaymentReceivedInCash): Promise<IAsaasPaymentResponse>;
    undoReceivedInCash(id: string): Promise<IAsaasPaymentResponse>;
    limits(): Promise<IAsaasPaymentLimitResponse>;
}

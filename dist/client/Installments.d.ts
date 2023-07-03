import { AxiosInstance } from "axios";
import { IAsaasDeleteResponse, IAsaasPaymentBoletoResponse, IAsaasPaymentInstallment, IAsaasPaymentResponse, IInstallmentsParams, IListAsaasInstallmentsResponse, IListInstallmentsParams } from "../types/AsaasTypes";
export declare class InstallmentsAPI {
    private apiClient;
    constructor(apiClient: AxiosInstance);
    list(params?: IListInstallmentsParams): Promise<IListAsaasInstallmentsResponse>;
    getById(id: string): Promise<IAsaasPaymentInstallment>;
    paymentBook(id: string, params?: IInstallmentsParams): Promise<IAsaasPaymentBoletoResponse>;
    delete(id: string): Promise<IAsaasDeleteResponse>;
    refund(id: string): Promise<IAsaasPaymentResponse>;
}

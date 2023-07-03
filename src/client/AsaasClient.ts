import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from "../client/Customers"
import { PaymentsAPI } from './Payments';
import { InstallmentsAPI } from './Installments';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public installments: InstallmentsAPI;
  
  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const baseURL = options.sandbox ? (options.sandboxUrl || 'https://sandbox.asaas.com/api/v3') : options.baseUrl ? options.baseUrl : 'https://www.asaas.com/api/v3';  
    const apiClient = axios.create({
          baseURL,
          headers: {
              'access_token': this.apiKey
          }
      });

      this.customers = new CustomersAPI(apiClient);
      this.payments = new PaymentsAPI(apiClient);
      this.installments = new InstallmentsAPI(apiClient);
  }


  // async createCharge(chargeData: any): Promise<any> {
  //     try {
  //         const response = await this.apiClient.post('/payments', chargeData);
  //         return response.data;
  //     } catch (error) {
  //         console.error('Erro ao criar a cobrança:', error);
  //         throw error;
  //     }
  // }
}


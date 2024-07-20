import axios from 'axios';
import { AsaasOptions } from '../types/AsaasTypes';
import { CustomersAPI } from './Customers';
import { InstallmentsAPI } from './Installments';
import { PaymentsAPI } from './Payments';
import { SubscriptionsAPI } from './Subscriptions';
import { WebhooksAPI } from './Webhooks';
import { PixTransactionsAPI } from './PixTransactions';
import { PixQrCodesAPI } from './PixQrCodes';
import { InvoicesAPI } from './Invoices';
import { BillAPI } from './Bill';
import { TransfersAPI } from './Transfers';
import { MyAccountAPI } from './MyAccount';
import { AccountsAPI } from './Accounts';

export class AsaasClient {
  public customers: CustomersAPI;
  public payments: PaymentsAPI;
  public installments: InstallmentsAPI;
  public subscriptions: SubscriptionsAPI;
  public webhooks: WebhooksAPI;
  public pixTransactions: PixTransactionsAPI;
  public pixQrCodes: PixQrCodesAPI;
  public invoices: InvoicesAPI;
  public bill: BillAPI;
  public transfers: TransfersAPI;
  public myAccount: MyAccountAPI;
  public accounts: AccountsAPI;

  constructor(private apiKey: string, options: AsaasOptions = {}) {
    const apiClient = axios.create({
      baseURL: this.getUrl(options),
      headers: {
        common: {
          'User-Agent': options.userAgent ?? 'npm/asaas',
          access_token: this.apiKey,
        },
      },
    });

    this.customers = new CustomersAPI(apiClient);
    this.payments = new PaymentsAPI(apiClient);
    this.installments = new InstallmentsAPI(apiClient);
    this.subscriptions = new SubscriptionsAPI(apiClient);
    this.webhooks = new WebhooksAPI(apiClient);
    this.pixTransactions = new PixTransactionsAPI(apiClient);
    this.pixQrCodes = new PixQrCodesAPI(apiClient);
    this.invoices = new InvoicesAPI(apiClient);
    this.bill = new BillAPI(apiClient);
    this.transfers = new TransfersAPI(apiClient);
    this.myAccount = new MyAccountAPI(apiClient);
    this.accounts = new AccountsAPI(apiClient);
  }

  getUrl(options: AsaasOptions = {}) {
    if (options.sandbox) {
      return options.sandboxUrl || 'https://sandbox.asaas.com/api/v3';
    }
    return options.baseUrl || 'https://api.asaas.com/v3';
  }
}

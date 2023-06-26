export { AsaasClient } from '@/client/AsaasClient';
export * from '@/types/AsaasTypes';

// import fetch from 'node-fetch';

// let baseUrl = 'https://www.asaas.com';
// // let baseUrl: string = 'https://sandbox.asaas.com'; //Sandbox

// export function setBaseUrl(url: string) {
//   baseUrl = url
// }

// async function post(url: string, token: string, data: unknown) {
//   const fullUrl = baseUrl + url;
//   const response = await fetch(fullUrl, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 
//       'Content-Type': 'application/json',
//       'access_token': `${token}`, 
//     },
//   });
//   if (!response.ok) {
//     throw new Error(
//       `Failed to post ${fullUrl}: ${response.status} ${response.statusText}`
//     )
//   }
//   return await response.json();
// }

// async function get(url: string, token: string, data?: unknown) {
//   let fullUrl = baseUrl + url;
//   if(data){
//     const queryString = new URLSearchParams(JSON.stringify(data));
//     fullUrl += `?${queryString.toString()}`;
//   }
//   const response = await fetch(fullUrl, {
//     method: 'GET',
//     headers: { 
//       'Content-Type': 'application/json',
//       'access_token': `${token}`, 
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to fetch ${fullUrl}: ${response.status} ${response.statusText}`);
//   }
//   return await response.json();
// }

// async function del(url: string, token: string) {
//   const fullUrl = baseUrl + url;
//   const response = await fetch(fullUrl, {
//     method: 'DELETE',
//     headers: { 
//       'Content-Type': 'application/json',
//       'access_token': `${token}`, 
//     },
//   });
//   if (!response.ok) {
//     throw new Error(`Failed to delete ${fullUrl}: ${response.status} ${response.statusText}`);
//   }
// }

// const customers = {
//   list: (token: string, data?: {
//     name?: string,
//     email?: string,
//     cpfCnpj?: string,
//     groupName?: string,
//     externalReference?: string,
//     offset?: number,
//     limit?: number,
//   }) => get(`/api/v3/customers/`, token, data),
//   getById: (token: string, id: string, data?: unknown) => get(`/api/v3/customers/${id}`, token, data),
//   delete: (token: string, id: string) => del(`/api/v3/customers/${id}`, token),
//   restore: (token: string, id: string) => post(`/api/v3/customers/${id}/restore`, token, {}),
//   updateById: (token: string, id: string, data: { 
//     name: string, 
//     cpfCnpj: string, 
//     email?: string, 
//     phone?: string,
//     mobilePhone?: string,
//     address?: string,
//     addressNumber?: string,
//     complement?: string,
//     province?: string,
//     postalCode?: string,
//     externalReference?: string,
//     notificationDisabled?: boolean,
//     additionalEmails?: string,
//     municipalInscription?: string,
//     stateInscription?: string,
//     observations?: string,
//   }) => post(`/api/v3/customers/${id}`, token, data),
//   create: (token: string, data: { 
//     name: string, 
//     cpfCnpj: string, 
//     email?: string, 
//     phone?: string,
//     mobilePhone?: string,
//     address?: string,
//     addressNumber?: string,
//     complement?: string,
//     province?: string,
//     postalCode?: string,
//     externalReference?: string,
//     notificationDisabled?: boolean,
//     additionalEmails?: string,
//     municipalInscription?: string,
//     stateInscription?: string,
//     observations?: string,
//     groupName?: string,
//   }) => post('/api/v3/customers', token, data),
// }

// const payments = {
//   list: (token: string, data?: {
//     customer?: string,
//     billingType?: string,
//     status?: string,
//     subscription?: string,
//     installment?: string,
//     externalReference?: string,
//     paymentDate?: string,
//     estimatedCreditDate?: string,
//     pixQrCodeId?: string,
//     anticipated?: boolean,
//     "dateCreated[ge]"?: string,
//     "dateCreated[le]"?: string,
//     "paymentDate[ge]"?: string,
//     "paymentDate[le]"?: string,
//     "estimatedCreditDate[ge]"?: string,
//     "estimatedCreditDate[le]"?: string,
//     "dueDate[ge]"?: string,
//     "dueDate[le]"?: string,
//     user?: string,
//     offset?: number,
//     limit?: number,
//   }) => get(`/api/v3/payments/`, token, data),
//   getById: (token: string, id: string, data?: unknown) => get(`/api/v3/payments/${id}`, token, data),
//   delete: (token: string, id: string) => del(`/api/v3/payments/${id}`, token),
//   restore: (token: string, id: string) => post(`/api/v3/payments/${id}/restore`, token, {}),
//   refund: (token: string, id: string) => post(`/api/v3/payments/${id}/refund`, token, {}),
//   updateById: (token: string, id: string, data: { 
//     customer: string, 
//     billingType: string, 
//     value: number, 
//     dueDate: string,
//     description?: string,
//     externalReference?: string,
//     installmentCount?: number,
//     installmentValue?: number,
//     discount?: {
//       value?: string,
//       dueDateLimitDays?: number,
//       type?: string
//     },
//     interest?: {
//       value?: number
//     },
//     fine?: {
//       value?: number
//     },
//     postalService?: boolean,
//     split?: [
//       {
//         walletId: string,
//         fixedValue?: number,
//         percentualValue?: number
//       }
//     ],
//     creditCard?: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo?: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     creditCardToken?: string,
//     remoteIp: string
//   }) => post(`/api/v3/payments/${id}`, token, data),
//   create: (token: string, data: { 
//     customer: string, 
//     billingType: string, 
//     value: number, 
//     dueDate: string,
//     description?: string,
//     externalReference?: string,
//     installmentCount?: number,
//     installmentValue?: number,
//     discount?: {
//       value?: string,
//       dueDateLimitDays?: number,
//       type?: string
//     },
//     interest?: {
//       value?: number
//     },
//     fine?: {
//       value?: number
//     },
//     postalService?: boolean,
//     split?: [
//       {
//         walletId: string,
//         fixedValue?: number,
//         percentualValue?: number
//       }
//     ],
//     creditCard?: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo?: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     creditCardToken?: string,
//     remoteIp: string
//   }) => post('/api/v3/payments', token, data),
//   createInstallment: (token: string, data: { 
//     customer: string, 
//     billingType: string, 
//     value: number, 
//     dueDate: string,
//     description?: string,
//     externalReference?: string,
//     installmentCount?: number,
//     installmentValue?: number,
//     totalValue?: number,
//     discount?: {
//       value?: string,
//       dueDateLimitDays?: number,
//       type?: string
//     },
//     interest?: {
//       value?: number
//     },
//     fine?: {
//       value?: number
//     },
//     postalService?: boolean,
//     split?: [
//       {
//         walletId: string,
//         fixedValue?: number,
//         percentualValue?: number
//       }
//     ],
//     creditCard?: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo?: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     creditCardToken?: string,
//     remoteIp: string
//   }) => post('/api/v3/payments', token, data),
//   tokenize: (token: string, data: { 
//     customer: string,
//     creditCard: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     remoteIp: string
//   }) => post('/api/v3/creditCard/tokenize', token, data),
//   getBoletoBarCode: (token: string, id: string, data?: unknown) => get(`/api/v3/payments/${id}/identificationField`, token, data),
//   getPixQrCode: (token: string, id: string, data?: unknown) => get(`/api/v3/payments/${id}/pixQrCode`, token, data),
//   receiveInCash: (token: string, id: string, data: { 
//     paymentDate: string,
//     value: number,
//     notifyCustomer: boolean,
//   }) => post(`/api/v3/payments/${id}/receiveInCash`, token, data),
//   undoReceivedInCash: (token: string, id: string) => post(`/api/v3/payments/${id}/undoReceivedInCash`, token, {}),
//   getInstallmentsById: (token: string, id: string, data?: unknown) => get(`/api/v3/installments/${id}`, token, data),
//   listInstallments: (token: string, data?: {
//     offset: number,
//     limit: number
//   }) => get(`/api/v3/installments`, token, data),
//   deleteInstallment: (token: string, id: string) => del(`/api/v3/installments/${id}`, token),
//   refundInstallment: (token: string, id: string) => post(`/api/v3/installments/${id}/refund`, token, {}),
// }

// const subscriptions = {
//   create: (token: string, data: { 
//     customer: string, 
//     billingType: string, 
//     value: number, 
//     nextDueDate: string,
//     cycle: string,
//     description?: string,
//     externalReference?: string,
//     discount?: {
//       value?: string,
//       dueDateLimitDays?: number,
//       type?: string
//     },
//     interest?: {
//       value?: number
//     },
//     fine?: {
//       value?: number
//     },
//     endDate?: string,
//     maxPayments?: number,
//     split?: [
//       {
//         walletId: string,
//         fixedValue?: number,
//         percentualValue?: number
//       }
//     ],
//     creditCard?: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo?: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     creditCardToken?: string,
//     remoteIp: string
//   }) => post('/api/v3/subscriptions', token, data),
//   getById: (token: string, id: string, data?: unknown) => get(`/api/v3/subscriptions/${id}`, token, data),
//   getPaymentsById: (token: string, id: string, data?: unknown) => get(`/api/v3/subscriptions/${id}/payments`, token, data),
//   list: (token: string, data?: {
//     customer?: string,
//     billingType?: string,
//     externalReference?: string,
//     includeDeleted?: boolean,
//     offset?: number,
//     limit?: number,
//   }) => get(`/api/v3/subscriptions/`, token, data),
//   delete: (token: string, id: string) => del(`/api/v3/subscriptions/${id}`, token),
//   // restore: (token: string, id: string) => post(`/api/v3/subscriptions/${id}/restore`, token, {}),
//   refund: (token: string, id: string) => post(`/api/v3/subscriptions/${id}/refund`, token, {}),
//   updateById: (token: string, id: string, data: { 
//     billingType: string, 
//     value: number, 
//     cycle: string,
//     nextDueDate: string,
//     description?: string,
//     externalReference?: string,
//     updatePendingPayments?: boolean,
//     discount?: {
//       value?: string,
//       dueDateLimitDays?: number,
//       type?: string
//     },
//     interest?: {
//       value?: number
//     },
//     fine?: {
//       value?: number
//     },
//     postalService?: boolean,
//     split?: [
//       {
//         walletId: string,
//         fixedValue?: number,
//         percentualValue?: number
//       }
//     ],
//     creditCard?: {
//       holderName: string,
//       number: string,
//       expiryMonth: string,
//       expiryYear: string,
//       ccv: string
//     },
//     creditCardHolderInfo?: {
//       name: string,
//       email: string,
//       cpfCnpj: string,
//       postalCode: string,
//       addressNumber: string,
//       addressComplement?: string,
//       phone: string,
//       mobilePhone: string,
//     },
//     creditCardToken?: string,
//     remoteIp: string
//   }) => post(`/api/v3/subscriptions/${id}`, token, data),
//   getInvoicesById: (token: string, id: string, data: {
//     offset: number,
//     limit: number,
//     status?: string,
//   }) => get(`/api/v3/subscriptions/${id}/invoices`, token, data),
// }

// const accounts = {
//   create: (token: string, data: { 
//     name: string,
//     email: string,
//     loginEmail?: string,
//     cpfCnpj: string,
//     birthDate: string,
//     companyType: string,
//     phone: string,
//     mobilePhone: string,
//     address: string,
//     addressNumber: string,
//     complement?: string,
//     province: string,
//     postalCode: string,
//   }) => post('/api/v3/accounts', token, data),
//   getById: (token: string, data: {
//     id: string
//   }) => get(`/api/v3/accounts`, token, data),
//   list: (token: string, data: {
//     cpfCnpj?: string,
//     email?: string,
//     name?: string,
//     walletId?: string,
//     offset: number,
//     limit: number,
//   }) => get(`/api/v3/accounts`, token, data),
// }

// const custom = {
//   get: (token: string, url: string, data?: unknown) => get(url, token, data),
//   delete: (token: string, url: string) => del(url, token),
//   post: (token: string, url:string, data?: unknown) => post(url, token, data),
// }

// const asaas = {
//   setBaseUrl,
//   customers,
//   payments,
//   subscriptions,
//   accounts,
//   custom
// }

// export default asaas;

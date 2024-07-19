# Unofficial Asaas Payment Gateway SDK
### ❗SDK and documentation under development.

A simple sdk made to abstract most of the Asaas payment gateway api requests.

last update: 19/07/2024
Items updated:
- Webhooks client: create, list, remove, and update.
- Invoices client: schedule (create), list, update, authorize, and cancel.
- Enums for webhook events for Payments and Invoices (still in development)
- Added a static method `parseWebhook` to correctly check if the received event is valid and allow TypeScript inference.
- Added support to change Axios user-agent.


## Author

- [Eduardo Matheus Bernardo Silva](https://github.com/eduardobernardo/)
- [Idxcode](https://idxcode.com.br)


## Reference

 - [Asaas API Manual](https://docs.asaas.com/)

 ## Features
 - [x] Customers [(Clientes)](https://docs.asaas.com/reference/criar-novo-cliente)
 - [x] Payments [(Cobranças)](https://docs.asaas.com/reference/criar-nova-cobranca)
 - [x] Installments [(Parcelamentos)](https://docs.asaas.com/reference/repurar-um-unico-parcelamento)
 - [x] Subscriptions [(Subscriptions)](https://docs.asaas.com/reference/criar-nova-assinatura)
 - [ ] Payment Links (soon) [(Payment Links)](https://docs.asaas.com/reference/criar-um-link-de-pagamentos)
 - [x] Transfers [(Transferências)](https://docs.asaas.com/reference/transferir-para-conta-de-outra-instituicao-ou-chave-pix)
 - [x] Invoices [(Notas fiscais)](https://docs.asaas.com/reference/agendar-nota-fiscal)
 - [x] My Account [(Informações e personalização da conta)](https://docs.asaas.com/reference/recuperar-dados-comerciais)
 - [x] Accounts [(Subcontas Asaas)](https://docs.asaas.com/reference/criar-subconta)
 - [x] Webhooks [(Configurações de Webhooks)](https://docs.asaas.com/reference/criar-subconta)
 

## SDK Documentation

### Get Start
Import the package and instantitate a new Client:
```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY);
```

### Authentication
Every request to the Asaas API needs an API Key, which must be passed as the first parameter in the constructor. To obtain your API Key, access the [Integration Tab in the Account Settings area](https://www.asaas.com/config/index?tab=pushNotification).

Optionally you can set base url, enable sandbox mode and set sandbox mode base url.

```javascript
import { AsaasClient } from 'asaas';

//Instantiate a new client
const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  //baseUrl?: string (default: https://api.asaas.com/v3);
  //sandbox?: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
});
```

### Sandbox Mode
To enable Sandbox Mode, pass to the client's constructor, as the second parameter, an object with `sandbox` information as `true`. The default sandbox URL is `https://sandbox.asaas.com/api/v3`

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  sandbox: true;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});
```

### Customers

#### Return all customers
Returns customers. Filters can be applied, passing an object with the items allowed in the [official documentation](https://docs.asaas.com/reference/listar-clientes).

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});

//It lists all registered customers and makes a filter by email.
await asaas.customers.list({
  email: "email@email.com"
});
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | Filter by **Name**.|
| `email` | `string` | Filter by **Email**.|
| `cpfCnpj` | `string` | Filter by **CPF or CNPJ**.|
| `groupName` | `string` | Filter by **Group**.|
| `externalReference` | `string` | Filter by **External Reference**.|
| `offset` | `number` | Offset of search.|
| `limit` | `number` | Limit of results.|

#### Return customer by ID

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});

//It returns a customer by ID.
await asaas.customers.getById("cus_123abcde456");
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Customer ID |


### Payments

#### Return all payments
Returns payments. Filters can be applied, passing an object with the items allowed in the [official documentation](https://docs.asaas.com/reference/listar-cobrancas).

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});

//It lists all registered payments and makes a filter by customer ID.
await asaas.payments.list({
  customer: "cus_123abcde456"
});
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `customer` | `string` | Filter by **Customer ID**.|
| `customerGroupName` | `string` | Filter by **Customer group name**.|
| `billingType` | `string` | Filter by **Billing Type**.|
| `status` | `string` | Filter by **Status**.|
| `subscription` | `string` | Filter by **Subscription ID**.|
| `installment` | `string` | Filter by **Installment ID**.|
| `externalReference` | `string` | Filter by **External Reference**.|
| `paymentDate` | `string` | Filter by **Payment Date**.|
| `estimatedCreditDate` | `string` | Filter by **Estimated Credit Date**.|
| `pixQrCodeId` | `string` | Filter by **Static Pix QR Code ID**.|
| `anticipated` | `boolean` | Filter by **Antecipated status**.|
| `"dateCreated[ge]"` | `string` | Filter by **Initial Date Created**.|
| `"dateCreated[le]"` | `string` | Filter by **End Date Created**.|
| `"paymentDate[ge]"` | `string` | Filter by **Initial Payment Date**.|
| `"paymentDate[le]"` | `string` | Filter by **End Payment Date**.|
| `"estimatedCreditDate[ge]"` | `string` | Filter by **Initial Estimated Credit Date**.|
| `"estimatedCreditDate[le]"` | `string` | Filter by **End Estimated Credit Date**.|
| `"dueDate[ge]"` | `string` | Filter by **Initial Due Date**.|
| `"dueDate[le]"` | `string` | Filter by **End Due Date**.|
| `user` | `string` | Filter by the **Email** address of the user who created the charge.|
| `offset` | `number` | Offset of search.|
| `limit` | `number` | Limit of results.|

#### Return payment by ID

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});

//It returns a payment object by ID.
await asaas.payments.getById("pay_0802152313252");
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Payment ID |


### Subscriptions

#### Return all subscriptions
Returns subscriptions. Filters can be applied, passing an object with the items allowed in the [official documentation](https://docs.asaas.com/reference/listar-assinaturas).

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://api.asaas.com/v3);
});

//List subscriptions for a specific customer ID.
await asaas.subscriptions.list({
  customer: "cus_123abcde456"
});
```



## Contributing

Do you want to contribute? Found a bug? Feel free :)
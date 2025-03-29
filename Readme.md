# Unofficial Asaas Payment Gateway SDK
### ❗SDK and documentation under development.

A simple sdk made to abstract most of the Asaas payment gateway api requests.

last update: 06/05/2024
Items updated:
- Global: Added option to disable automatic error logging (printError)
- Payments: Added support split array.


## Author

- [Eduardo Matheus Bernardo Silva](https://github.com/eduardobernardo/)
- [Idxcode](https://idxcode.com.br)


## Reference

 - [Asaas API Manual](https://docs.asaas.com/)

 ## Features
 - [x] Customers [(Clientes)](https://docs.asaas.com/reference/criar-novo-cliente)
 - [x] Payments [(Cobranças)](https://docs.asaas.com/reference/criar-nova-cobranca)
 - [ ] Notifications [(Notificações)](https://docs.asaas.com/reference/atualizar-notificacao-existente)
 - [x] Installments [(Parcelamentos)](https://docs.asaas.com/reference/repurar-um-unico-parcelamento)
 - [x] Subscriptions [(Assinaturas)](https://docs.asaas.com/reference/criar-nova-assinatura)
 - [ ] Pix [(Pix)](https://docs.asaas.com/reference/criar-uma-chave)
 - [ ] Pix Transactions [(Transações Pix)](https://docs.asaas.com/reference/pagar-um-qrcode)
 - [ ] Payment Links (soon) [(Link de pagamentos)](https://docs.asaas.com/reference/criar-um-link-de-pagamentos)
 - [x] Transfers [(Transferências)](https://docs.asaas.com/reference/transferir-para-conta-de-outra-instituicao-ou-chave-pix)
 - [ ] Anticipations [(Antecipações)](https://docs.asaas.com/reference/solicitar-antecipacao)
 - [ ] Payment Dunnings [(Negativações)](https://docs.asaas.com/reference/criar-uma-negativacao)
 - [x] Bill [(Pagamento de contas)](https://docs.asaas.com/reference/criar-um-pagamento-de-conta)
 - [ ] Mobile Phone Recharges [(Recargas de celular)](https://docs.asaas.com/reference/solicitar-recarga)
 - [ ] Credit Bureau Report [(Consulta Serasa)](https://docs.asaas.com/reference/realizar-consulta)
 - [ ] Financial Transactions [(Extrato)](https://docs.asaas.com/reference/recuperar-extrato)
 - [ ] Finance [(Informações financeiras)](https://docs.asaas.com/reference/recuperar-saldo-da-conta)
 - [x] My Account [(Informações e personalização da conta)](https://docs.asaas.com/reference/recuperar-dados-comerciais)
 - [x] Invoices [(Notas fiscais)](https://docs.asaas.com/reference/agendar-nota-fiscal)
 - [ ] Fiscal Info [(Informações fiscais)](https://docs.asaas.com/reference/listar-configuracoes-municipais)
 - [x] Webhooks [(Configurações de Webhooks)](https://docs.asaas.com/reference/criar-novo-webhook)
 - [x] Accounts [(Subcontas Asaas)](https://docs.asaas.com/reference/criar-subconta)
 - [ ] Documents [(Envio de documentos White Label)](https://docs.asaas.com/reference/verificar-documentos-pendentes)

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
  //printError?: boolean (default: true); // Determines whether errors will be automatically logged to the console
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

### Error Logging
By default, the library automatically logs errors to the console when request failures occur. You can disable this behavior by setting the `printError` option to `false`:

```javascript
import { AsaasClient } from 'asaas';

const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
  printError: false // Disables automatic error logging to the console
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
| `paymentDate` | `
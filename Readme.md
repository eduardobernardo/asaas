# Unofficial Asaas Payment Gateway SDK

A simple sdk made to abstract most of the Asaas payment gateway api requests.

last update: 06/26/2023


## Author

- [Eduardo Matheus Bernardo Silva](https://github.com/eduardobernardo/)
- [Idxcode](https://idxcode.com.br)


## Reference

 - [Asaas API Manual](https://asaasv3.docs.apiary.io/)


## SDK Documentation

### Get Start
Import the package and instantitate a new Client:
```javascript
import { AsaasClient } from 'asaas';

const client = new AsaasClient(process.env.ASAAS_API_KEY);
```

### Authentication
Every request to the Asaas API needs an API Key, which must be passed as the first parameter in the constructor. To obtain your API Key, access the [Integration Tab in the Account Settings area](https://www.asaas.com/config/index?tab=pushNotification).

Optionally you can set base url, enable sandbox mode and set sandbox mode base url.

```javascript
import { AsaasClient } from 'asaas';

//Instantiate a new client
const client = new AsaasClient(process.env.ASAAS_API_KEY, {
  //baseUrl?: string (default: https://www.asaas.com/api/v3);
  //sandbox?: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
});
```

### Sandbox Mode
To enable Sandbox Mode, pass to the client's constructor, as the second parameter, an object with `sandbox` information as `true`. The default sandbox URL is `https://sandbox.asaas.com/api/v3`

```javascript
import { AsaasClient } from 'asaas';

const client = new AsaasClient(process.env.ASAAS_API_KEY, {
  sandbox: true;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://www.asaas.com/api/v3);
});
```

### Customers

#### Return all customers
Returns customers. Filters can be applied, passing an object with the items allowed in the [official documentation](https://asaasv3.docs.apiary.io/#reference/0/clientes/listar-clientes).

```javascript
import { AsaasClient } from 'asaas';

const client = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://www.asaas.com/api/v3);
});

//It lists all registered customers and makes a filter by email.
await client.customers.list({
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

const client = new AsaasClient(process.env.ASAAS_API_KEY, {
  // sandbox: boolean;
  //sandboxUrl?: string (default: https://sandbox.asaas.com/api/v3);
  //baseUrl?: string (default: https://www.asaas.com/api/v3);
});

//It returns a customer by ID.
await client.customers.getById("cus_123abcde456");
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Customer ID |


## SDK documentation under development.
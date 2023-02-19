# Unofficial Asaas SDK 

A simple sdk made to abstract most of the Asaas payment gateway api requests


## Author

- [Eduardo Matheus Bernardo Silva](https://www.github.com/indexdc)
- [Idxcode](https://idxcode.com.br)


## Reference

 - [Asaas API Manual](https://asaasv3.docs.apiary.io/)


## SDK Documentation

### Get Start
Import the package:
```javascript
import asaas from 'asaas';
```

### Authentication
Every request to the Asaas API needs an API Key, which must be passed as the first parameter in every request. To obtain your API Key, access the [Integration Tab in the Account Settings area](https://www.asaas.com/config/index?tab=pushNotification).

```javascript
import asaas from 'asaas';

//It lists all registered customers and makes a filter by email.
asaas.customers.list(
  process.env.API_KEY, 
  {
    email: "email@email.com"
  }
);
```

### Sandbox Mode
To enable Sandbox mode in the SDK, call the `setBaseUrl` method and pass the Sandbox mode url.

```javascript
import asaas from 'asaas';

asaas.setBaseUrl("https://sandbox.asaas.com");
```

### Customers

#### Return all customers
Returns customers. Filters can be applied, passing an object with the items allowed in the official documentation.

```javascript
import asaas from 'asaas';

//It lists all registered customers and makes a filter by email.
asaas.customers.list(
  process.env.API_KEY, 
  {
    email: "email@email.com"
  }
);
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
import asaas from 'asaas';

asaas.customers.getById(
  process.env.API_KEY, 
  "cus_123abcde456"
);
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. Customer ID |


## SDK documentation under development.
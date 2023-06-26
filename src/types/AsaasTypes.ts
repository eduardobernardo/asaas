export interface AsaasOptions {
  sandbox?: boolean;
  sandboxUrl?: string;
  baseUrl?: string;
}

export interface IAsaasCustomer {
  name:                  string;
  cpfCnpj:               string;
  email?:                string;
  phone?:                string;
  mobilePhone?:          string;
  postalCode?:           string;
  address?:              string;
  addressNumber?:        string;
  complement?:           string;
  province?:             string;
  externalReference?:    string;
  notificationDisabled?: boolean;
  additionalEmails?:     string;
  municipalInscription?: string;
  stateInscription?:     string;
  observations?:         string;
}

export interface IAsaasCustomerResponse {
  object?:               string;
  id:                    string;
  dateCreated?:          string;
  name?:                 string;
  email?:                string;
  phone?:                string;
  mobilePhone?:          string;
  address?:              string;
  addressNumber?:        string;
  complement?:           string;
  province?:             string;
  postalCode?:           string;
  cpfCnpj?:              string;
  personType?:           string;
  deleted?:              boolean;
  additionalEmails?:     string;
  externalReference?:    string;
  notificationDisabled?: boolean;
  city?:                 number;
  state?:                string;
  country?:              string;
  observations?:         string;
}

export interface IListCustomersParams {
  name?:                 string;
  email?:                string;
  cpfCnpj?:              string;
  groupName?:            string;
  externalReference?:    string;
  offset?:               number;
  limit?:                number;
}

export interface IListAsaasCustomerResponse {
  object?:     string;
  hasMore?:    boolean;
  totalCount?: number;
  limit?:      number;
  offset?:     number;
  data?:       IAsaasCustomerResponse[];
}

export interface IAsaasDeleteCustomerResponse {
  deleted?:      boolean;
  id?:           string;
}
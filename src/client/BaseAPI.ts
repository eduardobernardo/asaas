import { AxiosInstance } from 'axios';
import { APIOptions } from '../types/AsaasTypes';

export class BaseAPI {
  protected printError: boolean;

  constructor(protected apiClient: AxiosInstance, options: APIOptions = {}) {
    this.printError =
      options.printError !== undefined ? options.printError : true;
  }

  protected handleError(error: Error | unknown, errorMessage: string): never {
    if (this.printError) {
      console.error(errorMessage, error);
    }
    throw error;
  }
}

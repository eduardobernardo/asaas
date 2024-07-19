export enum InvoicesWebhook {
  /**
   * Geração de nova nota fiscal.
   */
  INVOICE_CREATED = 'INVOICE_CREATED',

  /**
   * Alteração na nota fiscal.
   */
  INVOICE_UPDATED = 'INVOICE_UPDATED',

  /**
   * Nota fiscal enviada para prefeitura.
   */
  INVOICE_SYNCHRONIZED = 'INVOICE_SYNCHRONIZED',

  /**
   * Nota fiscal emitida.
   */
  INVOICE_AUTHORIZED = 'INVOICE_AUTHORIZED',

  /**
   * Nota fiscal processando cancelamento.
   */
  INVOICE_PROCESSING_CANCELLATION = 'INVOICE_PROCESSING_CANCELLATION',

  /**
   * Nota fiscal cancelada.
   */
  INVOICE_CANCELED = 'INVOICE_CANCELED',

  /**
   * Recusado o cancelamento da nota fiscal.
   */
  INVOICE_CANCELLATION_DENIED = 'INVOICE_CANCELLATION_DENIED',

  /**
   * Nota fiscal com erro.
   */
  INVOICE_ERROR = 'INVOICE_ERROR',
}

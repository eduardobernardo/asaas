export enum TransferWebhook {
  /**
   * Geração de nova transferência.
   */
  TRANSFER_CREATED = 'TRANSFER_CREATED',

  /**
   * Transferência pendente de execução.
   */
  TRANSFER_PENDING = 'TRANSFER_PENDING',

  /**
   * Transferência em processamento bancário.
   */
  TRANSFER_IN_BANK_PROCESSING = 'TRANSFER_IN_BANK_PROCESSING',

  /**
   * Transferência bloqueada.
   */
  TRANSFER_BLOCKED = 'TRANSFER_BLOCKED',

  /**
   * Transferência realizada.
   */
  TRANSFER_DONE = 'TRANSFER_DONE',

  /**
   * Transferência falhou.
   */
  TRANSFER_FAILED = 'TRANSFER_FAILED',

  /**
   * Transferência cancelada.
   */
  TRANSFER_CANCELLED = 'TRANSFER_CANCELLED',
}

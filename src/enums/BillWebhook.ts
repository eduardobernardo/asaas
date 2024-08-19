export enum BillWebhook {
  /**
   * Geração de um novo pague contas.
   */
  BILL_CREATED = 'BILL_CREATED',

  /**
   * Pagamento de contas aguardando processamento.
   */
  BILL_PENDING = 'BILL_PENDING',

  /**
   * Pagamento de contas aguardando processamento bancário.
   */
  BILL_BANK_PROCESSING = 'BILL_BANK_PROCESSING',

  /**
   * Pagamento de contas pago.
   */
  BILL_PAID = 'BILL_PAID',

  /**
   * Pagamento de contas cancelado.
   */
  BILL_CANCELLED = 'BILL_CANCELLED',

  /**
   * Pagamento de contas falhou.
   */
  BILL_FAILED = 'BILL_FAILED',

  /**
   * Pagamento de contas estornado.
   */
  BILL_REFUNDED = 'BILL_REFUNDED',
}

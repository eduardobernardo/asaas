export declare class PaymentsWebhook {
  /**
   * Geração de nova cobrança.
   */
  readonly PAYMENT_CREATED: string;
  /**
   * Pagamento em cartão aguardando aprovação pela análise manual de risco.
   */
  readonly PAYMENT_AWAITING_RISK_ANALYSIS: string;
  /**
   * Pagamento em cartão aprovado pela análise manual de risco.
   */
  readonly PAYMENT_APPROVED_BY_RISK_ANALYSIS: string;
  /**
   * Pagamento em cartão reprovado pela análise manual de risco.
   */
  readonly PAYMENT_REPROVED_BY_RISK_ANALYSIS: string;
  /**
   * Alteração no vencimento ou valor de cobrança existente.
   */
  readonly PAYMENT_UPDATED: string;
  /**
   * Cobrança confirmada (pagamento efetuado, porém o saldo ainda não foi disponibilizado).
   */
  readonly PAYMENT_CONFIRMED: string;
  /**
   * Cobrança recebida.
   */
  readonly PAYMENT_RECEIVED: string;
  /**
   * Cobrança antecipada.
   */
  readonly PAYMENT_ANTICIPATED: string;
  /**
   * Cobrança vencida.
   */
  readonly PAYMENT_OVERDUE: string;
  /**
   * Cobrança removida.
   */
  readonly PAYMENT_DELETED: string;
  /**
   * Cobrança restaurada.
   */
  readonly PAYMENT_RESTORED: string;
  /**
   * Cobrança estornada.
   */
  readonly PAYMENT_REFUNDED: string;
  /**
   * Estorno em processamento (liquidação já está agendada, cobrança será estornada após executar a liquidação).
   */
  readonly PAYMENT_REFUND_IN_PROGRESS: string;
  /**
   * Recebimento em dinheiro desfeito.
   */
  readonly PAYMENT_RECEIVED_IN_CASH_UNDONE: string;
  /**
   * Recebido chargeback.
   */
  readonly PAYMENT_CHARGEBACK_REQUESTED: string;
  /**
   * Em disputa de chargeback (caso sejam apresentados documentos para contestação).
   */
  readonly PAYMENT_CHARGEBACK_DISPUTE: string;
  /**
   * Disputa vencida, aguardando repasse da adquirente.
   */
  readonly PAYMENT_AWAITING_CHARGEBACK_REVERSAL: string;
  /**
   * Recebimento de negativação.
   */
  readonly PAYMENT_DUNNING_RECEIVED: string;
  /**
   * Requisição de negativação.
   */
  readonly PAYMENT_DUNNING_REQUESTED: string;
  /**
   * Boleto da cobrança visualizado pelo cliente.
   */
  readonly PAYMENT_BANK_SLIP_VIEWED: string;
  /**
   * Fatura da cobrança visualizada pelo cliente.
   */
  readonly PAYMENT_CHECKOUT_VIEWED: string;
}

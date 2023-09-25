export class PaymentsWebhook {
  /**
   * Geração de nova cobrança.
   */
  readonly PAYMENT_CREATED: string = 'PAYMENT_CREATED'
  /**
   * Pagamento em cartão aguardando aprovação pela análise manual de risco.
   */
  readonly PAYMENT_AWAITING_RISK_ANALYSIS: string =
    'PAYMENT_AWAITING_RISK_ANALYSIS'

  /**
   * Pagamento em cartão aprovado pela análise manual de risco.
   */
  readonly PAYMENT_APPROVED_BY_RISK_ANALYSIS: string =
    'PAYMENT_APPROVED_BY_RISK_ANALYSIS'

  /**
   * Pagamento em cartão reprovado pela análise manual de risco.
   */
  readonly PAYMENT_REPROVED_BY_RISK_ANALYSIS: string =
    'PAYMENT_REPROVED_BY_RISK_ANALYSIS'

  /**
   * Alteração no vencimento ou valor de cobrança existente.
   */
  readonly PAYMENT_UPDATED: string = 'PAYMENT_UPDATED'

  /**
   * Cobrança confirmada (pagamento efetuado, porém o saldo ainda não foi disponibilizado).
   */
  readonly PAYMENT_CONFIRMED: string = 'PAYMENT_CONFIRMED'

  /**
   * Cobrança recebida.
   */
  readonly PAYMENT_RECEIVED: string = 'PAYMENT_RECEIVED'

  /**
   * Cobrança antecipada.
   */
  readonly PAYMENT_ANTICIPATED: string = 'PAYMENT_ANTICIPATED'

  /**
   * Cobrança vencida.
   */
  readonly PAYMENT_OVERDUE: string = 'PAYMENT_OVERDUE'

  /**
   * Cobrança removida.
   */
  readonly PAYMENT_DELETED: string = 'PAYMENT_DELETED'

  /**
   * Cobrança restaurada.
   */
  readonly PAYMENT_RESTORED: string = 'PAYMENT_RESTORED'

  /**
   * Cobrança estornada.
   */
  readonly PAYMENT_REFUNDED: string = 'PAYMENT_REFUNDED'

  /**
   * Estorno em processamento (liquidação já está agendada, cobrança será estornada após executar a liquidação).
   */
  readonly PAYMENT_REFUND_IN_PROGRESS: string = 'PAYMENT_REFUND_IN_PROGRESS'

  /**
   * Recebimento em dinheiro desfeito.
   */
  readonly PAYMENT_RECEIVED_IN_CASH_UNDONE: string =
    'PAYMENT_RECEIVED_IN_CASH_UNDONE'

  /**
   * Recebido chargeback.
   */
  readonly PAYMENT_CHARGEBACK_REQUESTED: string = 'PAYMENT_CHARGEBACK_REQUESTED'

  /**
   * Em disputa de chargeback (caso sejam apresentados documentos para contestação).
   */
  readonly PAYMENT_CHARGEBACK_DISPUTE: string = 'PAYMENT_CHARGEBACK_DISPUTE'

  /**
   * Disputa vencida, aguardando repasse da adquirente.
   */
  readonly PAYMENT_AWAITING_CHARGEBACK_REVERSAL: string =
    'PAYMENT_AWAITING_CHARGEBACK_REVERSAL'

  /**
   * Recebimento de negativação.
   */
  readonly PAYMENT_DUNNING_RECEIVED: string = 'PAYMENT_DUNNING_RECEIVED'

  /**
   * Requisição de negativação.
   */
  readonly PAYMENT_DUNNING_REQUESTED: string = 'PAYMENT_DUNNING_REQUESTED'

  /**
   * Boleto da cobrança visualizado pelo cliente.
   */
  readonly PAYMENT_BANK_SLIP_VIEWED: string = 'PAYMENT_BANK_SLIP_VIEWED'

  /**
   * Fatura da cobrança visualizada pelo cliente.
   */
  readonly PAYMENT_CHECKOUT_VIEWED: string = 'PAYMENT_CHECKOUT_VIEWED'
}

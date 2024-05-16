'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PaymentsWebhook = void 0;
class PaymentsWebhook {
  constructor() {
    /**
     * Geração de nova cobrança.
     */
    this.PAYMENT_CREATED = 'PAYMENT_CREATED';
    /**
     * Pagamento em cartão aguardando aprovação pela análise manual de risco.
     */
    this.PAYMENT_AWAITING_RISK_ANALYSIS = 'PAYMENT_AWAITING_RISK_ANALYSIS';
    /**
     * Pagamento em cartão aprovado pela análise manual de risco.
     */
    this.PAYMENT_APPROVED_BY_RISK_ANALYSIS =
      'PAYMENT_APPROVED_BY_RISK_ANALYSIS';
    /**
     * Pagamento em cartão reprovado pela análise manual de risco.
     */
    this.PAYMENT_REPROVED_BY_RISK_ANALYSIS =
      'PAYMENT_REPROVED_BY_RISK_ANALYSIS';
    /**
     * Alteração no vencimento ou valor de cobrança existente.
     */
    this.PAYMENT_UPDATED = 'PAYMENT_UPDATED';
    /**
     * Cobrança confirmada (pagamento efetuado, porém o saldo ainda não foi disponibilizado).
     */
    this.PAYMENT_CONFIRMED = 'PAYMENT_CONFIRMED';
    /**
     * Cobrança recebida.
     */
    this.PAYMENT_RECEIVED = 'PAYMENT_RECEIVED';
    /**
     * Cobrança antecipada.
     */
    this.PAYMENT_ANTICIPATED = 'PAYMENT_ANTICIPATED';
    /**
     * Cobrança vencida.
     */
    this.PAYMENT_OVERDUE = 'PAYMENT_OVERDUE';
    /**
     * Cobrança removida.
     */
    this.PAYMENT_DELETED = 'PAYMENT_DELETED';
    /**
     * Cobrança restaurada.
     */
    this.PAYMENT_RESTORED = 'PAYMENT_RESTORED';
    /**
     * Cobrança estornada.
     */
    this.PAYMENT_REFUNDED = 'PAYMENT_REFUNDED';
    /**
     * Estorno em processamento (liquidação já está agendada, cobrança será estornada após executar a liquidação).
     */
    this.PAYMENT_REFUND_IN_PROGRESS = 'PAYMENT_REFUND_IN_PROGRESS';
    /**
     * Recebimento em dinheiro desfeito.
     */
    this.PAYMENT_RECEIVED_IN_CASH_UNDONE = 'PAYMENT_RECEIVED_IN_CASH_UNDONE';
    /**
     * Recebido chargeback.
     */
    this.PAYMENT_CHARGEBACK_REQUESTED = 'PAYMENT_CHARGEBACK_REQUESTED';
    /**
     * Em disputa de chargeback (caso sejam apresentados documentos para contestação).
     */
    this.PAYMENT_CHARGEBACK_DISPUTE = 'PAYMENT_CHARGEBACK_DISPUTE';
    /**
     * Disputa vencida, aguardando repasse da adquirente.
     */
    this.PAYMENT_AWAITING_CHARGEBACK_REVERSAL =
      'PAYMENT_AWAITING_CHARGEBACK_REVERSAL';
    /**
     * Recebimento de negativação.
     */
    this.PAYMENT_DUNNING_RECEIVED = 'PAYMENT_DUNNING_RECEIVED';
    /**
     * Requisição de negativação.
     */
    this.PAYMENT_DUNNING_REQUESTED = 'PAYMENT_DUNNING_REQUESTED';
    /**
     * Boleto da cobrança visualizado pelo cliente.
     */
    this.PAYMENT_BANK_SLIP_VIEWED = 'PAYMENT_BANK_SLIP_VIEWED';
    /**
     * Fatura da cobrança visualizada pelo cliente.
     */
    this.PAYMENT_CHECKOUT_VIEWED = 'PAYMENT_CHECKOUT_VIEWED';
  }
}
exports.PaymentsWebhook = PaymentsWebhook;

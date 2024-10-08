export enum ReceivableWebhook {
  /**
   * Antecipação cancelada.
   */
  RECEIVABLE_ANTICIPATION_CANCELLED = 'RECEIVABLE_ANTICIPATION_CANCELLED',

  /**
   * Antecipação agendada.
   */
  RECEIVABLE_ANTICIPATION_SCHEDULED = 'RECEIVABLE_ANTICIPATION_SCHEDULED',

  /**
   * Antecipação em análise.
   */
  RECEIVABLE_ANTICIPATION_PENDING = 'RECEIVABLE_ANTICIPATION_PENDING',

  /**
   * Antecipação creditada.
   */
  RECEIVABLE_ANTICIPATION_CREDITED = 'RECEIVABLE_ANTICIPATION_CREDITED',

  /**
   * Antecipação debitada.
   */
  RECEIVABLE_ANTICIPATION_DEBITED = 'RECEIVABLE_ANTICIPATION_DEBITED',

  /**
   * Solicitação da antecipação negada.
   */
  RECEIVABLE_ANTICIPATION_DENIED = 'RECEIVABLE_ANTICIPATION_DENIED',

  /**
   * Antecipação vencida.
   */
  RECEIVABLE_ANTICIPATION_OVERDUE = 'RECEIVABLE_ANTICIPATION_OVERDUE',
}

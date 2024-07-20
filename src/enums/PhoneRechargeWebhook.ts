export enum PhoneRechargeWebhook {
  /**
   * Recarga de celular pendente.
   */
  PHONE_RECHARGE_PENDING = 'PHONE_RECHARGE_PENDING',

  /**
   * Recarga de celular cancelada.
   */
  PHONE_RECHARGE_CANCELLED = 'PHONE_RECHARGE_CANCELLED',

  /**
   * Recarga de celular confirmada.
   */
  PHONE_RECHARGE_CONFIRMED = 'PHONE_RECHARGE_CONFIRMED',

  /**
   * Recarga de celular estornada.
   */
  PHONE_RECHARGE_REFUNDED = 'PHONE_RECHARGE_REFUNDED',
}

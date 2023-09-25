import { PaymentsWebhook } from './PaymentsWebhook'

export class Webhooks {
  readonly payments: PaymentsWebhook

  constructor() {
    this.payments = new PaymentsWebhook()
  }
}

'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Webhooks = void 0;
const PaymentsWebhook_1 = require('./PaymentsWebhook');
class Webhooks {
  constructor() {
    this.payments = new PaymentsWebhook_1.PaymentsWebhook();
  }
}
exports.Webhooks = Webhooks;

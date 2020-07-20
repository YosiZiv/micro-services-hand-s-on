import { Subjects, Publisher, PaymentCreatedEvent } from "@yztickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

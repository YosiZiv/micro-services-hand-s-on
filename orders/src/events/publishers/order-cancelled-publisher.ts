import { Subjects, Publisher, OrderCancelledEvent } from "@yztickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

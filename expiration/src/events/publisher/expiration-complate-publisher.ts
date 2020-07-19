import {
  Subjects,
  Publisher,
  ExpirationComplateEvent,
} from "@yztickets/common";

export class ExpirationComplatePublisher extends Publisher<
  ExpirationComplateEvent
> {
  readonly subject = Subjects.ExpirationComplate;
}

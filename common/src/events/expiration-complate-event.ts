import { Subjects } from "./subjects";
export interface ExpirationComplateEvent {
  subject: Subjects.ExpirationComplate;
  data: {
    orderId: string;
  };
}

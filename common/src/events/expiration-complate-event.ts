import { Subjects } from "./subjects";

export interface ExpirationComplateEvent {
  subjects: Subjects.ExpirationComplate;
  data: {
    orderId: string;
  };
}

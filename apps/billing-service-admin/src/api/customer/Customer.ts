import { Invoice } from "../invoice/Invoice";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  invoices?: Array<Invoice>;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};

import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};

import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};

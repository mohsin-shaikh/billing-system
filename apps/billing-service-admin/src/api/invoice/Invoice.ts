import { Customer } from "../customer/Customer";
import { InvoiceItem } from "../invoiceItem/InvoiceItem";

export type Invoice = {
  createdAt: Date;
  customerId?: Customer | null;
  dueDate: Date | null;
  id: string;
  invoiceDate: Date | null;
  invoiceItems?: Array<InvoiceItem>;
  status?: "Paid" | "Unpaid" | "Pending" | null;
  totalAmount: string | null;
  updatedAt: Date;
};

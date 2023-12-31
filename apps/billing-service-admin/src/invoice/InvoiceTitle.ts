import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "totalAmount";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.totalAmount?.toString() || String(record.id);
};

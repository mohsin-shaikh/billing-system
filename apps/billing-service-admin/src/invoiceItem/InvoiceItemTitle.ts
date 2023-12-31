import { InvoiceItem as TInvoiceItem } from "../api/invoiceItem/InvoiceItem";

export const INVOICEITEM_TITLE_FIELD = "lineTotal";

export const InvoiceItemTitle = (record: TInvoiceItem): string => {
  return record.lineTotal?.toString() || String(record.id);
};

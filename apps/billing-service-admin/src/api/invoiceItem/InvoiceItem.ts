import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";

export type InvoiceItem = {
  createdAt: Date;
  id: string;
  invoiceId?: Invoice | null;
  lineTotal: string | null;
  productId?: Product | null;
  quantity: number | null;
  unitPrice: number | null;
  updatedAt: Date;
};

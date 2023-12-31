import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  invoiceId?: InvoiceWhereUniqueInput | null;
  lineTotal?: string | null;
  productId?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  unitPrice?: number | null;
};

import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InvoiceItemCreateInput = {
  invoiceId?: InvoiceWhereUniqueInput | null;
  lineTotal?: number | null;
  productId?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  unitPrice?: number | null;
};

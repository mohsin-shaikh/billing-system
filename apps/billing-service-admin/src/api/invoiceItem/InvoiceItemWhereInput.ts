import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvoiceItemWhereInput = {
  id?: StringFilter;
  invoiceId?: InvoiceWhereUniqueInput;
  lineTotal?: StringNullableFilter;
  productId?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  unitPrice?: FloatNullableFilter;
};

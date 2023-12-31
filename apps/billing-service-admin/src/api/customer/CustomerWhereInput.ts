import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};

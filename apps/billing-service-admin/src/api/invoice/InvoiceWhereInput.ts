import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  customerId?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceItems?: InvoiceItemListRelationFilter;
  invoiceNumber?: StringNullableFilter;
  status?: "Paid" | "Unpaid" | "Pending";
  totalAmount?: StringNullableFilter;
};

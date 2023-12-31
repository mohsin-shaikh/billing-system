import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INVOICE_TITLE_FIELD } from "./InvoiceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer ID"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Due Date" source="dueDate" />
        <TextField label="ID" source="id" />
        <TextField label="Invoice Date" source="invoiceDate" />
        <TextField label="Status" source="status" />
        <TextField label="Total Amount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InvoiceItem"
          target="ID"
          label="InvoiceItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Invoice ID"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Line Total" source="lineTotal" />
            <ReferenceField
              label="Product ID"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Unit Price" source="unitPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const InvoiceItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

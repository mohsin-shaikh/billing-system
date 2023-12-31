import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { ProductTitle } from "../product/ProductTitle";

export const InvoiceItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="invoiceId.id"
          reference="Invoice"
          label="Invoice ID"
        >
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <NumberInput label="Line Total" source="lineTotal" />
        <ReferenceInput
          source="productId.id"
          reference="Product"
          label="Product ID"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};

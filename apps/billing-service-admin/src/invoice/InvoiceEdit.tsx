import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="Customer ID"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Due Date" source="dueDate" />
        <DateTimeInput label="Invoice Date" source="invoiceDate" />
        <ReferenceArrayInput
          source="invoiceItems"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Paid", value: "paid" },
            { label: "Unpaid", value: "unpaid" },
            { label: "Pending", value: "pending" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};

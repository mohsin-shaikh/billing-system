import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";

export const InvoiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="Customer ID"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateInput label="Due Date" source="dueDate" />
        <DateInput label="Invoice Date" source="invoiceDate" />
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
            { label: "Paid", value: "Paid" },
            { label: "Unpaid", value: "Unpaid" },
            { label: "Pending", value: "Pending" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};

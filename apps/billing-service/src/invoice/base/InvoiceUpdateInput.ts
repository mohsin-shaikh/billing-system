/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";
import { EnumInvoiceStatus } from "./EnumInvoiceStatus";

@InputType()
class InvoiceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customerId?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceItemUpdateManyWithoutInvoicesInput,
  })
  @ValidateNested()
  @Type(() => InvoiceItemUpdateManyWithoutInvoicesInput)
  @IsOptional()
  @Field(() => InvoiceItemUpdateManyWithoutInvoicesInput, {
    nullable: true,
  })
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;

  @ApiProperty({
    required: false,
    enum: EnumInvoiceStatus,
  })
  @IsEnum(EnumInvoiceStatus)
  @IsOptional()
  @Field(() => EnumInvoiceStatus, {
    nullable: true,
  })
  status?: "paid" | "unpaid" | "pending" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  totalAmount?: string | null;
}

export { InvoiceUpdateInput as InvoiceUpdateInput };

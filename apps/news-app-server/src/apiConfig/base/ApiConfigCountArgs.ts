/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApiConfigWhereInput } from "./ApiConfigWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ApiConfigCountArgs {
  @ApiProperty({
    required: false,
    type: () => ApiConfigWhereInput,
  })
  @Field(() => ApiConfigWhereInput, { nullable: true })
  @Type(() => ApiConfigWhereInput)
  where?: ApiConfigWhereInput;
}

export { ApiConfigCountArgs as ApiConfigCountArgs };

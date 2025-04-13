import { IsNumber, Max, Min } from "class-validator";
import { Field, Float, InputType } from "type-graphql";

@InputType()
export class CircleAreaInput {
    // @IsNumber()
    // @Min(1)
    // @Max(100)
    @Field(() => Float, { nullable: false })
    radius!: number
}
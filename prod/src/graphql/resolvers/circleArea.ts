import { Arg, Float, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CircleAreaInput } from "../inputs/circleArea";
import { getAreaOfCircle } from "../../logic/areaOfCircle";

@Service()
@Resolver()
class CircleAreaResolver {
    @Query(type => Float)
    areaOfCircle(@Arg('input', () => CircleAreaInput) areaInput: CircleAreaInput): number {
        return getAreaOfCircle(areaInput.radius)
    }
}

export default CircleAreaResolver
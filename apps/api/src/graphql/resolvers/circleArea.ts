import { Arg, Float, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { CircleAreaInput } from "../inputs/circleArea";

@Service()
@Resolver()
class CircleAreaResolver {

    @Query(() => Float)
    areaOfCircle(@Arg('args') args: CircleAreaInput): number {

        return 2 * Math.PI * args.radius
    }


}

export default CircleAreaResolver
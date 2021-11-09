import { IsNotEmpty, IsNumber } from "class-validator";

export class Geocode {
    @IsNotEmpty()
    @IsNumber()
    readonly latitude: number;

    @IsNotEmpty()
    @IsNumber()
    readonly longitude: number;
}
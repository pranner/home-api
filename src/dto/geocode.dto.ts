import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class GeocodeDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly latitude: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly longitude: number;
}
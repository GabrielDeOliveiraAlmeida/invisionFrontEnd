import { MinLengthError } from "../errors/min-length-field-error";
import { FieldValidation } from "../protocols/field-validation";


export class MinLengthValidation implements FieldValidation {
    constructor(readonly field: string, private readonly minLegth: number) {}

    validate(value: string): Error | null {
        return value.length >= this.minLegth ? null :  new MinLengthError();
    }

}
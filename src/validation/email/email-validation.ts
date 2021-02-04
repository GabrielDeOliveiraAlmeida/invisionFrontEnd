import { InvalidFieldError } from "validation/errors/invalid-field-error";
import { FieldValidation } from "validation/protocols/field-validation";


export class EmailValidation implements FieldValidation {
    constructor(readonly field: string) {}

    validate(value: string): Error | null {
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        return emailRegex.test(value) ? null : new InvalidFieldError();
    }

}
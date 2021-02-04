import { InvalidFieldError } from "../errors/invalid-field-error";
import { FieldValidation } from "../protocols/field-validation";


export class EmailValidation implements FieldValidation {
    constructor(readonly field: string) {}

    validate(value: string): Error | null {
        const emailRegex =/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        return emailRegex.test(value) ? null : new InvalidFieldError();
    }

}
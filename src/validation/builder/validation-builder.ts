import { RequiredFieldValidation } from "../require-field/required-field-validation";
import { EmailValidation } from "../email/email-validation";
import { MinLengthValidation } from "../min-length/min-length-validation";
import { FieldValidation } from "../protocols/field-validation";

export class ValidationBuilder {
    private constructor (
        private readonly fieldName: string,
        private readonly validations: FieldValidation[],
        
        ) {
    }

    static field(fieldName: string): ValidationBuilder {
        return new ValidationBuilder(fieldName, []);
    }

    required (): ValidationBuilder {
        this.validations.push(new RequiredFieldValidation(this.fieldName))
        return this;
    }

    email (): ValidationBuilder {
        this.validations.push(new EmailValidation(this.fieldName))
        return this;
    }

    minLength (minLength: number) : ValidationBuilder {
        this.validations.push(new MinLengthValidation(this.fieldName, minLength))
        return this;
    }
    build (): FieldValidation[] {
        return this.validations;
    }
}
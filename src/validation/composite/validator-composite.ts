import { FieldValidation } from "validation/protocols/field-validation";
import { Validation } from "validation/protocols/validations";

export class ValidatorComposite implements Validation {
    constructor(private readonly validators: FieldValidation[]){}

    static build (validators: FieldValidation[]): ValidatorComposite {
        return new ValidatorComposite(validators)
    }

    validate(fieldName: string, fieldValue: string): string | null{
        const validator = this.validators.filter(v => v.field == fieldName)
        for (const val of validator ){
            const error = val.validate(fieldValue)
            console.log("Error", error);
            if(error) {
                return error.message;
            }
        };
        return null;
    }

}

export class ValidatorHandler implements FieldValidation {
    error: Error | null = null;
    constructor(readonly field: string){}

    validate(value: string): Error | null {
        return this.error;
    }
}
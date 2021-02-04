import { timeStamp } from "console";
import { FieldValidation } from "./protocols/field-validation";

class RequiredFieldValidation implements FieldValidation {
    constructor(readonly field: string) {}
    validate(value: string): Error | null {
        return value ? null : new Error()
    }

}



// describe("RequiredFieldValidation", () => {
//     test("Retornar Error se vazio", () => {
//         const value = new RequiredFieldValidation('email');
//         const error = value.validate('');
//         expect(error).toBe('Required Field');
//     });
// });
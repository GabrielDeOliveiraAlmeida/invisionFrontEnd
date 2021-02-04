import { ValidationBuilder } from "../../../validation/builder/validation-builder";
import { ValidatorComposite } from "../../../validation/composite/validator-composite";


export const loginValidator = (): ValidatorComposite => ValidatorComposite.build([
    ...ValidationBuilder.field('Email').required().email().build(),
    ...ValidationBuilder.field('Password').required().minLength(6).build()
  ])
import { isNumber } from 'lodash'
import * as yup from 'yup'

export interface IFormWatch {
  fieldName: string
  schema?: yup.AnyObjectSchema
}

export const getLengthFromSchema =
  (optionName: string) =>
  ({ fieldName, schema }: IFormWatch) => {
    if (!schema) {
      return 0
    }

    const fieldScheme = schema.fields[fieldName]
    if (!fieldScheme) {
      return 0
    }

    const lengthOption = fieldScheme.tests.find(
      (item: { OPTIONS: { name: string } }) => item.OPTIONS.name === optionName,
    )
    if (!lengthOption) {
      return 0
    }

    const value: number = lengthOption?.OPTIONS?.params?.[optionName]
    if (!isNumber(value)) {
      return 0
    }

    return value
  }

export const getMaxLengthFromSchema = (watchOption: IFormWatch) => {
  return getLengthFromSchema('max')(watchOption)
}

export const getMinLengthFromSchema = (watchOption: IFormWatch) => {
  return getLengthFromSchema('min')(watchOption)
}

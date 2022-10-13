export interface IOption {
  label: ReactNode
  value: string
  isDisabled?: boolean
}

export const validationStateList = ['none', 'error', 'success'] as const

export type IValidationState = typeof validationStateList[number]

export type IValidationClasses = Record<IValidationState, string> | string

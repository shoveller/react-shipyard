import { useMemo } from 'react'
import { ControllerFieldState } from 'react-hook-form'
import { getValidationState } from 'atomic-kit/components/atoms/Forms/getValidationState'

import { IValidationClasses } from 'atomic-kit/components/atoms/Forms'

export const useValidateClassName = ({
  fieldState,
  classes,
}: {
  fieldState: ControllerFieldState
  classes?: IValidationClasses
}) => {
  return useMemo(() => {
    if (typeof classes === 'string') {
      return classes
    }

    if (!classes) {
      return ''
    }

    const validationState = getValidationState(fieldState)

    return classes[validationState]
  }, [classes, fieldState])
}

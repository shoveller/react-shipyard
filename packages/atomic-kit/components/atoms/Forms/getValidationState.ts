import { isEmpty } from 'lodash'
import { ControllerFieldState } from 'react-hook-form'

import { IValidationState } from 'atomic-kit/components/atoms/Forms/index'

/**
 * 폼의 상태를 바탕으로 벨리데이션 상태를 추론하는 함수
 * @param fieldState
 */
export const getValidationState = (
  fieldState: ControllerFieldState,
): IValidationState => {
  const isError = !isEmpty(fieldState.error?.message)
  if (isError) {
    return 'error'
  }

  const isSuccess = fieldState.isDirty && !fieldState.invalid
  if (isSuccess) {
    return 'success'
  }

  return 'none'
}

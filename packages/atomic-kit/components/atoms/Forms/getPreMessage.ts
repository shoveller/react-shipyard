import { ControllerFieldState } from 'react-hook-form'

/**
 * 에러메시지와 안내메시지의 출력을 분기하는 함수
 * @param preMessage
 * @param fieldState
 */
export const getPreMessage = ({
  preMessage,
  fieldState,
}: {
  preMessage?: string
  fieldState: ControllerFieldState
}) => {
  const errorMessage = fieldState.error?.message

  return errorMessage ?? preMessage
}

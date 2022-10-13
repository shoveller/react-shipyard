import { useValidateClassName } from 'atomic-kit/components/atoms/Forms/useValidateClassName'
import { FC, ReactNode } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FieldContainer } from 'atomic-kit/components/atoms/Forms/FieldContainer'
import { getPreMessage } from 'atomic-kit/components/atoms/Forms/getPreMessage'
import {
  TextInput,
  ITextInputProps,
} from 'atomic-kit/components/atoms/TextInput/TextInput'

import { IValidationClasses } from 'atomic-kit/components/atoms/Forms'

export interface IVTextInput2Props
  extends Omit<
    ITextInputProps,
    'defaultValue' | 'value' | 'onBlur' | 'onChange' | 'className'
  > {
  name: string
  classNames?: IValidationClasses
  containerClassNames?: IValidationClasses
  labelClassNames?: IValidationClasses
  hintClassNames?: IValidationClasses
  preMessage?: string
  label?: ReactNode
}

/**
 * 폼 벨리데이션 기능을 탑재한 <TextInput /> 입니다.<br />
 * `<VForm2 />` 과 함께 사용하세요.
 * @param className
 * @param id
 * @param name
 * @param placeholder
 * @param preMessage
 * @param inputMode
 * @param frontSlot
 * @param backSlot
 * @param label
 * @param onClick
 * @param onFocus
 * @param isDisabled
 * @param isReadOnly
 * @param isAutoComplete
 * @constructor
 */
export const VTextInput: FC<IVTextInput2Props> = ({
  classNames,
  hintClassNames,
  labelClassNames,
  containerClassNames,
  id,
  name,
  placeholder,
  preMessage,
  inputMode,
  frontSlot,
  backSlot,
  label,
  onClick,
  onFocus,
  isDisabled,
  isReadOnly,
  isAutoComplete,
}) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    name,
    control,
  })
  const hint = getPreMessage({ preMessage, fieldState })
  const containerClassName = useValidateClassName({
    fieldState,
    classes: containerClassNames,
  })
  const className = useValidateClassName({
    fieldState,
    classes: classNames,
  })
  const hintClassName = useValidateClassName({
    fieldState,
    classes: hintClassNames,
  })
  const labelClassName = useValidateClassName({
    fieldState,
    classes: labelClassNames,
  })

  return (
    <FieldContainer
      className={containerClassName}
      hint={hint}
      hintClassName={hintClassName}
      label={label}
      labelClassName={labelClassName}
    >
      <TextInput
        backSlot={backSlot}
        className={className}
        frontSlot={frontSlot}
        id={id}
        inputMode={inputMode}
        isAutoComplete={isAutoComplete}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        onClick={onClick}
        onFocus={onFocus}
        placeholder={placeholder}
        ref={field.ref}
        value={field.value || ''}
      />
    </FieldContainer>
  )
}

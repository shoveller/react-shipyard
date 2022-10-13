import {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  MouseEventHandler,
  ReactNode,
} from 'react'

export interface ITextInputProps {
  id?: string
  name?: string
  placeholder?: string
  className?: string
  defaultValue?: string | number
  value?: string | number
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url'
  onClick?: MouseEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  isDisabled?: boolean
  isReadOnly?: boolean
  isAutoComplete?: boolean
  frontSlot?: ReactNode
  backSlot?: ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  (
    {
      id,
      name,
      inputMode = 'text',
      placeholder,
      className,
      defaultValue,
      value,
      frontSlot,
      backSlot,
      onFocus,
      onClick,
      onBlur,
      onChange,
      isDisabled,
      isReadOnly,
      isAutoComplete = false,
    },
    ref,
  ) => {
    const autoComplete = isAutoComplete ? 'on' : 'off'

    return (
      <>
        {frontSlot}
        <input
          autoComplete={autoComplete}
          className={className}
          defaultValue={defaultValue}
          disabled={isDisabled}
          id={id}
          inputMode={inputMode}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={isReadOnly}
          ref={ref}
          type="text"
          value={value}
        />
        {backSlot}
      </>
    )
  },
)

TextInput.displayName = 'TextInput'

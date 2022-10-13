import { DevTool as RHFDevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormEventHandler, PropsWithChildren, useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import type {
  Mode,
  SubmitErrorHandler,
  SubmitHandler,
  DefaultValues,
} from 'react-hook-form/dist/types/form'
import { ko } from 'atomic-kit/validation/locales/ko'
import { setLocale as setYupLocale } from 'yup'
import * as yup from 'yup'
import { LocaleObject } from 'yup/lib/locale'

setYupLocale(ko)

export interface IVFormProps<TFieldValues extends {}> {
  onSubmit?: FormEventHandler<TFieldValues>
  onValid?: SubmitHandler<TFieldValues>
  onInvalid?: SubmitErrorHandler<TFieldValues>
  onReset?: FormEventHandler<HTMLFormElement>
  getDefaultValues?: () => DefaultValues<TFieldValues>
  schema?: yup.AnyObjectSchema
  locale?: LocaleObject
  isLoading?: boolean
}

const getFormProps = <TFieldValues,>({
  schema,
  defaultValues,
}: {
  schema?: yup.AnyObjectSchema
  defaultValues?: DefaultValues<TFieldValues>
}) => {
  if (schema) {
    return {
      defaultValues,
      resolver: yupResolver(schema),
      mode: 'all' as Mode,
    }
  }

  return {
    defaultValues,
    mode: 'all' as Mode,
  }
}

export function VForm<TFieldValues extends {}>({
  onReset,
  onValid = () => {},
  onInvalid,
  children,
  getDefaultValues,
  schema,
}: PropsWithChildren<IVFormProps<TFieldValues>>) {
  const defaultValues = getDefaultValues ? getDefaultValues() : undefined
  const formProps = getFormProps({
    defaultValues,
    schema,
  })
  const {
    watch,
    getValues,
    getFieldState,
    setError,
    clearErrors,
    setValue,
    trigger,
    formState,
    resetField,
    reset,
    handleSubmit,
    unregister,
    control,
    register,
    setFocus,
  } = useForm<TFieldValues>(formProps)
  const handleReset = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      reset()
      if (onReset) {
        onReset(e)
      }
    },
    [onReset, reset],
  )

  return (
    <FormProvider
      clearErrors={clearErrors}
      control={control}
      formState={formState}
      getFieldState={getFieldState}
      getValues={getValues}
      handleSubmit={handleSubmit}
      register={register}
      reset={reset}
      resetField={resetField}
      setError={setError}
      setFocus={setFocus}
      setValue={setValue}
      trigger={trigger}
      unregister={unregister}
      watch={watch}
    >
      <form onReset={handleReset} onSubmit={handleSubmit(onValid, onInvalid)}>
        {children}
      </form>
      {process.env.NODE_ENV !== 'production' && (
        <RHFDevTool control={control} />
      )}
    </FormProvider>
  )
}

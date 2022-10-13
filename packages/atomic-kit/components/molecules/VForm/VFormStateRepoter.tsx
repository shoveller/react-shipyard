import { FC } from 'react'
import { useFormContext, useFormState } from 'react-hook-form'

export const VFormStateRepoter: FC = () => {
  const { control } = useFormContext()
  const {
    dirtyFields,
    touchedFields,
    isDirty,
    errors,
    isSubmitSuccessful,
    isSubmitting,
    submitCount,
    isSubmitted,
    isValidating,
    isValid,
  } = useFormState({
    control,
  })

  return (
    <div className="container">
      <h3>Form State Report</h3>
      <ul>
        <li>
          <span>dirtyFields : </span>
          <span>{JSON.stringify(dirtyFields, null, 2)}</span>
        </li>
        <li>
          <span>touchedFields : </span>
          <span>{JSON.stringify(touchedFields, null, 2)}</span>
        </li>
        <li>
          <span>errors : </span>
          <span>{JSON.stringify(errors, null, 2)}</span>
        </li>
        <li>
          <span>isDirty : </span>
          <span className={isDirty ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(isDirty)}
          </span>
        </li>
        <li>
          <span>isSubmitSuccessful : </span>
          <span
            className={isSubmitSuccessful ? 'text-green-500' : 'text-red-500'}
          >
            {JSON.stringify(isSubmitSuccessful)}
          </span>
        </li>
        <li>
          <span>isSubmitting : </span>
          <span className={isSubmitting ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(isSubmitting)}
          </span>
        </li>
        <li>
          <span>submitCount : </span>
          <span className={submitCount > 0 ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(submitCount)}
          </span>
        </li>
        <li>
          <span>isSubmitted : </span>
          <span className={isSubmitted ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(isSubmitted)}
          </span>
        </li>
        <li>
          <span>isValidating : </span>
          <span className={isValidating ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(isValidating)}
          </span>
        </li>
        <li>
          <span>isValid : </span>
          <span className={isValid ? 'text-green-500' : 'text-red-500'}>
            {JSON.stringify(isValid)}
          </span>
        </li>
      </ul>
    </div>
  )
}

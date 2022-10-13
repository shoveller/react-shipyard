import { FC, PropsWithChildren, ReactElement } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { JotaiDevtool } from 'atomic-kit/components/atoms/JotaiDevtool/JotaiDevtool'
import { JotaiProvider } from 'atomic-kit/components/atoms/JotaiProvider/JotaiProvider'

export interface IRootContextProviderProps {
  name: string
  onError?: (
    error: Error,
    info: {
      componentStack: string
    },
  ) => void
  ErrorFallback?: ReactElement
}

export const RootContextProvider: FC<
  PropsWithChildren<IRootContextProviderProps>
> = ({ children, name, onError, ErrorFallback = <>에러 발생</> }) => {
  return (
    <JotaiProvider>
      <JotaiDevtool name={name}>
        <ErrorBoundary fallback={ErrorFallback} onError={onError}>
          {children}
        </ErrorBoundary>
      </JotaiDevtool>
    </JotaiProvider>
  )
}

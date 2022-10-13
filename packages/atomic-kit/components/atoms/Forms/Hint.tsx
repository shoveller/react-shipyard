import { FC, PropsWithChildren } from 'react'

export interface IHintProps {
  className?: string
}

export const Hint: FC<PropsWithChildren<IHintProps>> = ({
  className,
  children,
}) => {
  return <p className={className}>{children}</p>
}

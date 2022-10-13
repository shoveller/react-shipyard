import { FC, PropsWithChildren } from 'react'

export interface ILegendLabelProps {
  htmlFor?: string
  className?: string
}

export const LegendLabel: FC<PropsWithChildren<ILegendLabelProps>> = ({
  htmlFor,
  className,
  children,
}) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  )
}

import classNames from 'classnames'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { Hint } from 'atomic-kit/components/atoms/Forms/Hint'
import { LegendLabel } from 'atomic-kit/components/atoms/Forms/LegendLabel'

export interface IFieldContainerProps {
  /**
   * 본 엘리먼트의 css 클래스
   */
  className?: string
  /**
   * 타깃의 아이디
   */
  htmlFor?: string
  /**
   * 벨리데이션 힌트
   */
  hint?: ReactNode
  /**
   * 라벨의 css 클래스
   */
  labelClassName?: string
  /**
   *  라벨
   */
  label?: ReactNode
  /**
   * 힌트의 css 클래스
   */
  hintClassName?: string
}

export const FieldContainer: FC<PropsWithChildren<IFieldContainerProps>> = ({
  children,
  htmlFor,
  className,
  hint,
  hintClassName,
  label,
  labelClassName,
}) => {
  const containerClassName = classNames('relative', className)

  return (
    <fieldset className={containerClassName}>
      <LegendLabel className={labelClassName} htmlFor={htmlFor}>
        {label}
      </LegendLabel>
      {children}
      <Hint className={hintClassName}>{hint}</Hint>
    </fieldset>
  )
}

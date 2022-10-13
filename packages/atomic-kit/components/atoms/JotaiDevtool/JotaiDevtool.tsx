import { useAtomsDevtools } from 'jotai/devtools'
import { FC, PropsWithChildren } from 'react'

export interface IJotaiDevtoolProps {
  name: string
}

export const JotaiDevtool: FC<PropsWithChildren<IJotaiDevtoolProps>> = ({
  children,
  name,
}) => {
  useAtomsDevtools(name)

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

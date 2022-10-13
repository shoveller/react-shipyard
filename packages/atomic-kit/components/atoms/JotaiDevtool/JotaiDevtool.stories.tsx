import { InputType } from '@storybook/csf/dist/story'
import { Meta, Story } from '@storybook/react'
import { atom, useAtom } from 'jotai'
import { withRootContext } from 'atomic-kit/components/organisms/RootContextProvider/withRootContext'

import { JotaiDevtool, IJotaiDevtoolProps } from './JotaiDevtool'

type IArgType = {
  [key in keyof IJotaiDevtoolProps]: InputType
}

const meta: Meta<IArgType> = {
  title: 'atoms/JotaiDevtool',
  component: JotaiDevtool,
  decorators: [withRootContext],
  argTypes: {
    name: {
      control: { type: 'text' },
      defaultValue: 'devtool-test',
    },
  },
  parameters: {
    componentSubtitle: '',
  },
}

export default meta

const countAtom = atom(0)
countAtom.debugLabel = 'countAtom'

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none"
        onClick={() => setCount((value) => value - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 focus:outline-none"
        onClick={() => setCount((value) => value + 1)}
      >
        +
      </button>
    </>
  )
}

const JotaiDevtoolTemplate: Story<IJotaiDevtoolProps> = ({ name }) => {
  return (
    <JotaiDevtool name={name}>
      <Counter />
    </JotaiDevtool>
  )
}

export const 기본적인_사용법 = JotaiDevtoolTemplate.bind({})

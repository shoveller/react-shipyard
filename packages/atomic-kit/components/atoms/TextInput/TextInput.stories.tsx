import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextInput } from 'atomic-kit/components/atoms/TextInput/TextInput'
import { withRootContext } from 'atomic-kit/components/organisms/RootContextProvider/withRootContext'

const meta: ComponentMeta<typeof TextInput> = {
  title: 'atoms/TextInput',
  component: TextInput,
  decorators: [withRootContext],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    defaultValue: {
      control: { type: 'text' },
      defaultValue: '',
    },
    id: {
      control: { type: 'text' },
      defaultValue: '',
    },
    isAutoComplete: {
      control: { type: 'boolean' },
      defaultValue: '',
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: '',
    },
    isReadOnly: {
      control: { type: 'boolean' },
      defaultValue: '',
    },
    name: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text', defaultValue: '플레이스 홀더' },
    },
    inputMode: {
      control: {
        type: 'select',
        options: [
          'none',
          'text',
          'decimal',
          'numeric',
          'tel',
          'search',
          'email',
          'url',
        ],
        defaultValue: 'text',
      },
    },
  },
  parameters: {
    componentSubtitle: '',
  },
}

export default meta

const InputTemplate: ComponentStory<typeof TextInput> = (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextInput {...props} />
}

export const 기본적인_사용법 = InputTemplate.bind({})

export const 스타일링 = InputTemplate.bind({})
스타일링.args = {
  className:
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
}

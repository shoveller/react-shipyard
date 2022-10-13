import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VForm } from 'atomic-kit/components/molecules/VForm/VForm'
import { withRootContext } from 'atomic-kit/components/organisms/RootContextProvider/withRootContext'
import * as yup from 'yup'

import { VTextInput } from 'atomic-kit/components/molecules/VTextInput/VTextInput'

const meta: ComponentMeta<typeof VTextInput> = {
  title: 'molecules/VTextInput',
  component: VTextInput,
  decorators: [withRootContext],
  argTypes: {
    id: {
      control: { type: 'text' },
      defaultValue: 'id',
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'name',
    },
    label: {
      control: { type: 'text' },
      defaultValue: '라벨',
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
    isAutoComplete: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isReadOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: '플레이스 홀더',
    },
    preMessage: {
      control: { type: 'text' },
      defaultValue: '안내 메시지',
    },
  },
  parameters: {
    componentSubtitle: '',
  },
}

export default meta

const VTextInput2Template: ComponentStory<typeof VTextInput> = (props) => {
  const schema = yup.object().shape({
    name: yup.string().label('테스트').required(),
  })

  return (
    <VForm schema={schema}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <VTextInput {...props} />
    </VForm>
  )
}

export const 기본적인_사용법 = VTextInput2Template.bind({})

export const 스타일링 = VTextInput2Template.bind({})
스타일링.args = {
  containerClassNames: {
    success: 'p-1 border border-green-700',
    error: 'p-1 border border-red-700',
    none: 'p-1 border border-blue-700',
  },
  labelClassNames: {
    success: 'block mb-2 text-sm font-medium text-green-700',
    error: 'block mb-2 text-sm font-medium text-red-700',
    none: 'block mb-2 text-sm font-medium text-blue-700',
  },
  classNames: {
    success:
      'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5',
    error:
      'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5',
    none: 'bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
  },
  hintClassNames: {
    success: 'mt-2 text-sm text-green-600',
    error: 'mt-2 text-sm text-red-600',
    none: 'mt-2 text-sm text-blue-600',
  },
}

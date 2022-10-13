import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VTextInput } from 'atomic-kit/components/molecules/VTextInput/VTextInput'
import { withRootContext } from 'atomic-kit/components/organisms/RootContextProvider/withRootContext'
import * as yup from 'yup'

import { VForm } from 'atomic-kit/components/molecules/VForm/VForm'

interface IDummyForm {
  text: string
  select: string
  datepicker: string
}

const meta: ComponentMeta<typeof VForm> = {
  title: 'molecules/VForm',
  component: VForm,
  decorators: [withRootContext],
  argTypes: {},
  parameters: {
    componentSubtitle: '',
  },
}

export default meta

const VForm2Template: ComponentStory<typeof VForm> = () => {
  const schema = yup.object().shape({
    text: yup.string().label('텍스트').required(),
  })

  return (
    <div className="container">
      <VForm<IDummyForm> schema={schema}>
        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-4">
            <VTextInput label="텍스트" name="text" />
          </section>
          <section className="flex gap-4">
            <button className="border-[1px] border-black p-1" type="submit">
              서브밋
            </button>
            <button className="border-[1px] border-black p-1" type="reset">
              리셋
            </button>
          </section>
        </div>
      </VForm>
    </div>
  )
}

export const 기본적인_사용법 = VForm2Template.bind({})

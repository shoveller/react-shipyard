import { RootContextProvider } from 'atomic-kit/components/organisms/RootContextProvider/RootContextProvider'

/**
 *
 * @param Story
 * @param context
 */
// @ts-ignore
export const withRootContext = (Story) => {
  return (
    <RootContextProvider name="storybook">
      {/*@ts-ignore*/}
      <Story />
    </RootContextProvider>
  )
}

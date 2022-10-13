import '../styles/globals.css'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5,
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

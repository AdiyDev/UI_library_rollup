import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// больше про дефолтный экспорт: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button
} as ComponentMeta<typeof Button>

// больше про шаблоны компонента: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const HelloWorld = Template.bind({})
// больше про args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!'
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: 'Click me!'
}

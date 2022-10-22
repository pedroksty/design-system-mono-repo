import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@pedroksty-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, dolorem iste totam possimus ullam animi eaque quos illum numquam, optio a odio. Nobis error nam nemo enim provident qui earum!"
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}


import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Ui/Button',
  /*   tags: ['autodocs'], */
  component: Button,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  },
};

export const Secundary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  },
};

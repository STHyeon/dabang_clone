import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Btn, LinkBtn, BtnProps, LinkBtnProps } from './index';

export default {
    title: 'Atoms/Btn',
    argTypes: {
        btnType: {
            control: {
                type: 'select',
                options: ['default', 'blue', 'blue_outline', 'border_none']
            }
        }
    }
} as Meta;

export const defaultBtn = (args: BtnProps) => <Btn {...args} btnOnClick={action('Button is clicked!')} />;
defaultBtn.args = {
    children: '테스트',
    disabled: false
};

export const linkBtn = (args: LinkBtnProps) => <LinkBtn {...args} btnOnClick={action('Button is clicked!')} />;
linkBtn.args = {
    children: '테스트',
    disabled: false,
    btnLink: ''
};

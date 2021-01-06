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
                options: ['blue', 'blue_outline']
            }
        }
    }
} as Meta;

export const defaultBtn = (args: BtnProps) => <Btn {...args} btnOnClick={action('Button is clicked!')} />;
defaultBtn.args = {
    children: '테스트',
    disabled: false
};

export const linktBtn = (args: LinkBtnProps) => <LinkBtn {...args} btnOnClick={action('Button is clicked!')} />;
linktBtn.args = {
    children: '테스트',
    disabled: false,
    btnLink: ''
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { Btn, BtnProps } from './index';

export default {
    title: 'Atoms/Btn',
    argTypes: {
        styletype: {
            description: 'Select Button Background-Color',
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'danger',
                    'alert',
                    'success',
                    'gray',
                    'transparent',
                    'transparent-border'
                ]
            }
        },
        disabled: {
            description: 'Toggle Button Control'
        },
        children: {
            description: 'Button text'
        },
        onClick: {
            description: 'Click event'
        }
    }
} as Meta;

const Template: Story<BtnProps> = (args) => <Btn {...args} />;
const AllTemplate: Story<BtnProps> = (args) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Btn styletype="primary" {...args}>
            primary
        </Btn>
        <Btn styletype="secondary" {...args}>
            secondary
        </Btn>
        <Btn styletype="alert" {...args}>
            alert
        </Btn>
        <Btn styletype="danger" {...args}>
            danger
        </Btn>
        <Btn styletype="success" {...args}>
            success
        </Btn>
        <Btn styletype="transparent" {...args}>
            transparent
        </Btn>
        <Btn styletype="gray" {...args}>
            transparent
        </Btn>
        <Btn styletype="transparent-border" {...args}>
            transparent-border
        </Btn>
    </div>
);

export const general = Template.bind({});
general.args = {
    styletype: 'primary',
    disabled: false,
    children: 'button',
    onClick: action('onClick')
};

export const anchor = Template.bind({});
anchor.args = {
    children: 'button',
    disabled: false,
    href: 'https://naver.com',
    styletype: 'primary'
};

export const link = Template.bind({});
link.args = {
    children: 'button',
    disabled: false,
    to: '/signup',
    styletype: 'primary'
};

export const Allstyle = AllTemplate.bind({});
Allstyle.args = {
    disabled: false
};

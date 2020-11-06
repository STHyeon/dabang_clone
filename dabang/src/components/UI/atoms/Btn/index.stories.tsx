import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// // import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Btn, BtnProps } from './index';

export default {
    title: 'Atoms/Btn',
    // component: Btn,
    argTypes: {
        styletype: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'danger',
                    'alert',
                    'success',
                    'transparent',
                    'transparent-border'
                ]
            }
        }
    }
} as Meta;

const Template: Story<BtnProps> = (args) => <Btn {...args} />;
const AllTemplate: Story<BtnProps> = (args) => (
    <>
        <Btn {...args} />
        <Btn {...args} />
    </>
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

// export const allstyle: React.FC = () => (
//     <div
//         style={{
//             display: 'flex',
//             flexDirection: 'column'
//         }}
//     >
//         <Btn
//             styletype={'primary'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'secondary'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'danger'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'alert'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'success'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'transparent'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'transparent-border'}
//             disabled={boolean('disabled', false)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//         <Btn
//             styletype={'transparent-hover'}
//             disabled={boolean('disabled', true)}
//             children={'Button'}
//             onClick={action('onClick')}
//         />
//     </div>
// );

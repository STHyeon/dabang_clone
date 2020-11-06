import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import routerDecorator from './router-decorator';

import '../src/assets/scss/project.scss';

addDecorator(withKnobs);
addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};

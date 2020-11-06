import { addDecorator } from '@storybook/react';

import routerDecorator from './router-decorator';

import '../src/assets/scss/project.scss';

addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};

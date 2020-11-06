import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import routerDecorator from './router-decorator';

addDecorator(withKnobs);
addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' }
};

import '!style-loader!css-loader!sass-loader!../src/assets/styles.scss';
import '!style-loader!css-loader!sass-loader!node_modules/devextreme/dist/css/dx.light.css';

import { themes } from '@storybook/theming'

export const parameters = {
    darkMode: {
        darkClass: 'dark-mode',
        lightClass: 'light-mode',
        classTarget: 'body',
        stylePreview: true
    }
};

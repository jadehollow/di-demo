import '!style-loader!css-loader!sass-loader!../src/assets/styles.scss';

import { themes } from '@storybook/theming';

export const parameters = {
    darkMode: {
        darkClass: 'dark-mode',
        lightClass: 'light-mode',
        classTarget: 'body',
        stylePreview: true
    }
};

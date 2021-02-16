import React from 'react';

import { StateProvider } from './src/store/store';

export const wrapRootElement = ({ element }) => (
    <StateProvider>{element}</StateProvider>
);

// import { createReduxStore, AppDispatch } from './config/store';
// import { StoreProvider } from './ui/StoreProvider';
// import {
//     StateSchema,
//     ReduxStoreWithManager,
//     ThunkConfig,
// } from './config/StateSchema';

// export {
//     StoreProvider,
//     createReduxStore,
//     StateSchema,
//     ReduxStoreWithManager,
//     AppDispatch,
//     ThunkConfig,
// };
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type { StateSchema, AppDispatch, ThunkConfig };

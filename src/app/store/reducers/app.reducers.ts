import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';

import { userReducers } from '../reducers/user.reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    users: userReducers
};
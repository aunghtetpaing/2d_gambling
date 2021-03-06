import { initialUserState, UserState } from '../state/user.state';
import { UserActions, EnumActions } from '../actions/user.actions';

export const userReducers = (
    state = initialUserState, 
    action: UserActions
): UserState => {
    switch(action.type) {
        case EnumActions.GetUsers: {
            return {
                ...state,
                users: action.payload
            }
        }
        case EnumActions.GetUser: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }

        default:
            return state;
    }
}

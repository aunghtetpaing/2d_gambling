import { User } from 'src/app/_models/user';


export interface UserState {
    users: User[];
    selectedUser: User;
}

export const initialUserState: UserState = {
    users: null,
    selectedUser: null
}
import { Action } from '@ngrx/store';
import { User } from 'src/app/_models/user';

export enum EnumActions {
    GetUsers = '[User] Get Users',
    GetUser = '[User] Get User',
}

export class GetUsers implements Action {
    public readonly type = EnumActions.GetUsers;
    constructor(public payload: User[]) {}
}

export class GetUser implements Action {
    public readonly type = EnumActions.GetUser;
    constructor(public payload: User) {}
}


export type UserActions = GetUser  | GetUsers;
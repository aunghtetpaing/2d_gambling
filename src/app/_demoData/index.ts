import { async } from '@angular/core/testing';
import { User } from '../_models/user';

export const UserLists = [
    {
        id: 1,
        fullName: "Kyaw Kyaw Lin",
        email: "kyawkyawlin@gmail.com",
        phoneNumber: "959123456789",
        password: '1234567890'
    },
    {
        id: 2,
        fullName: "Kyaw Kyaw Oo",
        email: "kyawkyawoo@gmail.com",
        phoneNumber: "959123456781",
        password: '1234567890'
    },
    {
        id: 3,
        fullName: "Kyaw Kyaw Lwin",
        email: "kyawkyawlwin@gmail.com",
        phoneNumber: "959123456782",
        password: '1234567890'
    },
    {
        id: 4,
        fullName: "Kyaw Kyaw Tun",
        email: "kyawkyawtun@gmail.com",
        phoneNumber: "959123456783",
        password: '1234567890'
    },
    {
        id: 5,
        fullName: "Myo Kyaw Kyaw",
        email: "kyawkyawlwin@gmail.com",
        phoneNumber: "959123456784",
        password: '1234567890'
    }
];

export const findUser = ( phoneNumber: string) => {
    let getUser: User;

    UserLists.map((key: User) => {
        if(key.phoneNumber  === phoneNumber) {
            getUser = key;
        }
    });

    if(getUser) {
        return getUser;
    }
    
    return false;
}  
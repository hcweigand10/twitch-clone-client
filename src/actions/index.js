import API from "../utils/API";
import _ from 'lodash'


export const signIn = () => {
    return {type: "SIGN_IN"}
}

export const signOut = () => {
    return {type: "SIGN_OUT"}
}
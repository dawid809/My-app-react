/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISingleUser } from "../entities/users";
import * as actionTypes from "../actions/actionTypes/userTypes";

export interface IUsersReducer {
  usersList: ISingleUser[];
  currentUser: ISingleUser;
}

const defaultState = (): IUsersReducer => ({
  usersList: [],
  currentUser: undefined,
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      const payload: actionTypes.IUserTypes["GET_USERS"] = action;
      return {
        ...state,
        usersList: payload.data.usersList,
        currentUser: payload.data.currentUser,
      };
    }
    default: {
      return state;
    }
  }
};

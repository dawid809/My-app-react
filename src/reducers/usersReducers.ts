import { ISingleUser } from "../components/entities/users";
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
      const data: actionTypes.IUserTypes["GET_USERS"] = action;
      return {
        ...state,
        usersList: data.data.usersList,
        currentUser: data.data.currentUser,
      };
    }
    default: {
      return state;
    }
  }
};

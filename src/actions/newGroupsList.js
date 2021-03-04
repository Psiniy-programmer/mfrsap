import { SET_GROUPS } from "../reducers/newGroupsList";

function setNewList(payload) {
  return {
    type: SET_GROUPS,
    payload,
  };
}

export default function setNewGroupsList(payload) {
  return (dispatch) => {
    dispatch(setNewList(payload))
  };
}

import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { contactsSearch } from "./contactsSearch";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  contacts,
  contactsSearch,
  form: reduxFormReducer
});
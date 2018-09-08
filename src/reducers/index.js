import { combineReducers } from "redux";
import { contacts } from "./contacts";
import { country } from "./country";
import { gender } from "./gender";
import { contactsSearch } from "./contactsSearch";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  contacts,
  contactsSearch,
  country,
  gender,
  form: reduxFormReducer
});
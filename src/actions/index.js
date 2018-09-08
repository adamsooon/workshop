import ContactsApi from '../api/ContactsApi';

export const contactsFetched = contacts => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});

export const fetchContacts = (country = "all", gender="all") => dispatch => {
  ContactsApi(country, gender).then(res => dispatch(contactsFetched(res.data.results)));
}

export const searchContacts = text => ({
  type: 'SEARCH_CONTACTS',
  text
});

export const filterContactsCountry = country => ({
  type: 'CHANGE_COUNTRY',
  country
});

export const filterContactsGender = gender => ({
  type: 'CHANGE_GENDER',
  gender
});

export const changeCountryAndFetch = country => (dispatch, geState) => {
  dispatch(filterContactsCountry(country));
  dispatch(fetchContacts(geState().country, geState().gender));
}

export const changeGenderAndFetch = gender => (dispatch, geState) => {
  dispatch(filterContactsGender(gender))
  dispatch(fetchContacts(geState().country, geState().gender));
  console.log(geState().country, geState().gender)
}

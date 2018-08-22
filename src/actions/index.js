import ContactsApi from '../api/ContactsApi';

export const contactsFetched = contacts => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  contacts
});

export const fetchContacts = (country = "all") => dispatch => {
  ContactsApi(country).then(res => dispatch(contactsFetched(res.data.results)));
}

export const searchContacts = text => ({
  type: 'SEARCH_CONTACTS',
  text
});

export const filterContactsCountry = country => ({
  type: 'CHANGE_COUNTRY',
  country
});

export const changeCountryAndFetch = country => (dispatch, geState) => {
  dispatch(filterContactsCountry(country));
  dispatch(fetchContacts(geState().country));
}

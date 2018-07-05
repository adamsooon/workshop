const GetFiltredContacts = (contacts, query) => {
  const contactsSearch = query.toLowerCase();

  return contacts.filter(contact => {
    const { first, last } = contact.name;

    return (
      first.toLowerCase().includes(contactsSearch) ||
      last.toLowerCase().includes(contactsSearch)
    );
  });
};

export default GetFiltredContacts;
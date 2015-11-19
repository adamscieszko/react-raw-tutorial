function updateNewContent(contact) {
    setState({ newContact: contact });
}

function submitNewContent() {
    var contact = Object.assign({}, state.newContact, { key: state.contacts.length + 1, errors: {} });

    if (!contact.name) {
        contact.errors.name = ["Please enter your new contact's name"];
    }

    if (!/.+@.+\..+/.test(contact.email)) {
        contact.errors.email = ["Please enter your new contact's email"];
    }

    setState(
        Object.keys(contact.errors).length === 0 ? {
            newContact: Object.assign({}, CONTACT_TEMPLATE),
            contacts: state.contacts.slice(0).concat(contact)
        }
        : {
            newContact: contact
        }
    );
}

function updateContactForm(contact) {
    var update = {};
    update[concat.key] = concat;
    var contactForms = Object.assign(state.contactForm, update);
    setState({ contactForms: contactForms });
}

function submitContactForm() {
    startNavigating("/contacts");
}

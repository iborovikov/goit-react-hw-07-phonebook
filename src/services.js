const BASE_URL = 'http://localhost:8000/contacts'


async function fetchContacts() {
    return await fetch(BASE_URL).then(res => res.json())
};

async function postContact(contactData) {
    return await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: { 'Content-Type': 'application/json' }
    })
};

async function deleteContact(id) {
    return await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })
};

export {
    fetchContacts,
    postContact,
    deleteContact
}
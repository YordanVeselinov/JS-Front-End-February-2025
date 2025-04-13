window.addEventListener("load", solve);

function solve() {
    const elements = {
        inputs: {
            firstName: document.getElementById("first_name"),
            lastName: document.getElementById("last_name"),
            phone: document.getElementById("phone")
        },
        buttons: {
            add: document.getElementById("add_btn")
        },
        lists: {
            pending: document.getElementById("pending_contact_list"),
            contacts: document.getElementById("contact_list")
        }
    };

    elements.buttons.add.addEventListener("click", addContact);

    function addContact(event) {
        event?.preventDefault();

        const contact = {
            firstName: elements.inputs.firstName.value.trim(),
            lastName: elements.inputs.lastName.value.trim(),
            phone: elements.inputs.phone.value.trim()
        };

        if (Object.values(contact).some(value => !value)) return;

        const li = createContactElement(contact);
        elements.lists.pending.appendChild(li);
        clearInputs();
    }

    function createContactElement(contact) {
        const li = createElement('li', { className: 'contact' });
        const namesSpan = createElement('span', { 
            className: 'names', 
            textContent: `${contact.firstName} ${contact.lastName}` 
        });
        const phoneSpan = createElement('span', { 
            className: 'phone_number', 
            textContent: contact.phone 
        });
        const buttonsDiv = createElement('div', { className: 'buttons' });
        
        const editButton = createElement('button', {
            className: 'edit_btn',
            textContent: 'Edit',
            onclick: () => editContact(contact, li)
        });
        
        const verifyButton = createElement('button', {
            className: 'verify_btn',
            textContent: 'Verify',
            onclick: () => verifyContact(li, buttonsDiv)
        });

        buttonsDiv.append(editButton, verifyButton);
        li.append(namesSpan, phoneSpan, buttonsDiv);

        return li;
    }

    function editContact(contact, li) {
        Object.entries(contact).forEach(([key, value]) => {
            elements.inputs[key].value = value;
        });
        li.remove();
    }

    function verifyContact(li, buttonsDiv) {
        const deleteButton = createElement('button', {
            className: 'delete_btn',
            textContent: 'Delete',
            onclick: () => li.remove()
        });

        buttonsDiv.remove();
        li.appendChild(deleteButton);
        li.className = 'verified_contact';
        elements.lists.contacts.appendChild(li);
    }

    function clearInputs() {
        Object.values(elements.inputs).forEach(input => input.value = '');
    }

    function createElement(type, props) {
        const element = document.createElement(type);
        Object.assign(element, props);
        return element;
    }
}

function createContactForm(container) {
    let contactContainerDiv = document.createElement('div')
    contactContainerDiv.classList.add('contact-container')

    let formContainer = document.createElement('div')
    formContainer.classList.add('form-container')

    let mainForm = document.createElement('form')
    mainForm.action = '#'

    let nameLabel = document.createElement('label')
    nameLabel.textContent = 'Name'
    let nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.placeholder = 'Full name'
    mainForm.appendChild(nameLabel)
    mainForm.appendChild(nameInput)

    let emailLabel = document.createElement('label')
    emailLabel.textContent = 'Email'
    let emailInput = document.createElement('input')
    emailInput.type = 'text'
    emailInput.placeholder = 'Email'
    mainForm.appendChild(emailLabel)
    mainForm.appendChild(emailInput)

    let subjectLabel = document.createElement('label')
    subjectLabel.textContent = 'Subject'
    let subjectTextBox = document.createElement('textarea')
    //subjectTextBox.type = 'text'
    subjectTextBox.placeholder = 'Message'
    mainForm.appendChild(subjectLabel)
    mainForm.appendChild(subjectTextBox)

    let submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Submit'
    mainForm.appendChild(submitBtn)


    formContainer.appendChild(mainForm)
    contactContainerDiv.appendChild(formContainer)
    container.appendChild(contactContainerDiv)
}

export {createContactForm}
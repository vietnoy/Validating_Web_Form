const firstName = document.querySelector('#firstName');
let firstNameBool = false;
const firstNameAlert = document.querySelector('.firstName');

firstName.addEventListener('input', () => {
    const inputFirstName = firstName.value;

    if (!/[^a-zA-Z]/.test(inputFirstName)) {
        if (inputFirstName.length > 3 && inputFirstName.length <= 16) {
            firstNameBool = true;
            firstName.style.outlineColor = 'green';
            firstNameAlert.innerHTML = ''; // Clear any previous error message
            updateSubmitButton();
        } else {
            firstNameBool = false;
            firstName.style.outlineColor = 'red';
            firstNameAlert.innerHTML = 'First name must be alphanumeric and contains 3 to 16 characters long.';
            updateSubmitButton()
        }
    } else {
        firstNameBool = false;
        firstName.style.borderColor = 'red';
        firstNameAlert.innerHTML = 'First name must be alphanumeric and contains 3 to 16 characters long.';
        updateSubmitButton();
    }
});

const lastName = document.querySelector('#lastName');
let lastNameBool = false;
const lastNameAlert = document.querySelector('.lastName');

lastName.addEventListener('input', () => {
    const inpuLastName = lastName.value;

    if (!/[^a-zA-Z]/.test(inpuLastName)) {
        if (inpuLastName.length > 3 && inpuLastName.length <= 16) {
            lastNameBool = true;
            lastName.style.outlineColor = 'green';
            lastNameAlert.innerHTML = ''; // Clear any previous error message
            updateSubmitButton();
        } else {
            lastNameBool = false;
            lastName.style.outlineColor = 'red';
            lastNameAlert.innerHTML = 'Last name must be alphanumeric and contains 3 to 16 characters long.';
            updateSubmitButton();
        }
    } else {
        lastNameBool = false;
        lastName.style.borderColor = 'red';
        lastNameAlert.innerHTML = 'Last name must be alphanumeric and contains 3 to 16 characters long.';
        updateSubmitButton();
    }
});

const email = document.querySelector('#email');
let emailBool = false;
const emailAlert = document.querySelector('.email');

email.addEventListener('input', () => {
    const inputEmail = email.value;

    if (/@/.test(inputEmail)) {
        emailBool = true;
        email.style.outlineColor = 'green';
        emailAlert.innerHTML = ''; // Clear any previous error message
        updateSubmitButton();
    } else {
        emailBool = false;
        email.style.borderColor = 'red';
        emailAlert.innerHTML = 'Email must be a valid and include @.';
        updateSubmitButton();
    }
});

const password = document.querySelector('#password');
let passwordBool = false;
const passwordAlert = document.querySelector('.password');

password.addEventListener('input', () => {
    const inputPassword = password.value;

    if (!/[^a-zA-Z,@_-]/.test(inputPassword)) {
        if (inputPassword.length > 5 && inputPassword.length < 21) {
            passwordBool = true;
            password.style.outlineColor = 'green';
            passwordAlert.innerHTML = ''; // Clear any previous error message
            updateSubmitButton();
        } else {
            passwordBool = false;
            password.style.outlineColor = 'red';
            passwordAlert.innerHTML = 'Password must be alphanumeric (@,_and-are also allowed) between 6 and 20 characters long.';
            updateSubmitButton();
        }
    } else {
        passwordBool = false;
        password.style.borderColor = 'red';
        passwordAlert.innerHTML = 'Password must be alphanumeric (@,_and-are also allowed) between 6 and 20 characters long.';
        updateSubmitButton();
    }
});


const bio = document.querySelector('#bio');
let bioBool = false;
const bioAlert = document.querySelector('.bio');

bio.addEventListener('input', () => {
    const inputFirstName = bio.value;

    if (!/[^a-z_, ]/.test(inputFirstName)) {
        if (inputFirstName.length > 7 && inputFirstName.length < 52) {
            bioBool = true;
            bio.style.outlineColor = 'green';
            bioAlert.innerHTML = ''; // Clear any previous error message
            updateSubmitButton();
        } else {
            bioBool = false;
            bio.style.outlineColor = 'red';
            bioAlert.innerHTML = 'Bio must contains only lowercase letters, underscores, hyphens and be 8-50 characters.';
            updateSubmitButton();
        }
    } else {
        bioBool = false;
        bio.style.outlineColor = 'red';
        bioAlert.innerHTML = 'Bio must contains only lowercase letters, underscores, hyphens and be 8-50 characters.';
        updateSubmitButton();
    }
});

const telephone = document.querySelector('#telephone');
let telephoneBool = false;
const telephoneAlert = document.querySelector('.telephone');

telephone.addEventListener('input', () => {
    let inputTelephone = telephone.value;
    if (!/[^0-9-]/.test(inputTelephone)) {
        if (inputTelephone.length == 10) {
            telephoneBool = true;
            telephone.style.outlineColor = 'green';
            telephoneAlert.innerHTML = ''; // Clear any previous error message
            updateSubmitButton();
            telephone.value = `${inputTelephone.slice(0,3)}-${inputTelephone.slice(3,6)}-${inputTelephone.slice(6)}`;
            updateSubmitButton();

        } else {
            telephoneBool = false;
            telephone.style.outlineColor = 'red';
            telephoneAlert.innerHTML = 'A valid Telephone number(11 digits and 333-333-3334).';
            const newValue = inputTelephone.replace(/-/g,'');
            telephone.value = newValue;
            updateSubmitButton();
        }
    } else {
        telephoneBool = false;
        telephone.style.borderColor = 'red';
        telephoneAlert.innerHTML = 'A valid Telephone number(11 digits and 333-333-3334).';
        updateSubmitButton();
    }
});

const submit = document.querySelector('#button');

function updateSubmitButton() {
    if (firstNameBool && lastNameBool && passwordBool && telephoneBool && bioBool && emailBool) {
      submit.style.backgroundColor = 'rgb(36, 196, 36)';
      submit.style.color = 'white';
      submit.disabled = false; // Enable the button if all conditions are met
    } else {
      submit.style.backgroundColor = 'white'; // Reset to default background color if conditions are not met
      submit.style.color = 'black'; // Reset to default text color if conditions are not met
      submit.disabled = true; // Disable the button if any of the conditions is not met
    }
};

submit.addEventListener('clicked',() =>  {
        fetch("https://api.apispreadsheets.com/data/cHZYHjPYCD4f80Z4/", {
        method: "POST",
        body: JSON.stringify({"data": {"bio":"","email":"","password":"","full_name":"","last_name":"","telephone":""}}),
        }).then(res =>{
            if (res.status === 201){
                alert('Your data have been submited :)');
            }
            else{
                alert('Error x_x');
            }
        }
        )
    }
);
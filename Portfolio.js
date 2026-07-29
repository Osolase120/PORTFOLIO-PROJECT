// CONTACT FORM VALIDATION
const form = document.getElementById("form");
const fullname = document.getElementById("fullName");
const email = document.getElementById("Email");
const textarea = document.getElementById("textArea");
const successMeg = document.getElementById("formValidationSuccessMessage");


form.addEventListener('submit', e => {
    e.preventDefault(); 

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isValidEmail = email => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullNameValue = fullname.value.trim();
    const EmailValue = email.value.trim();
    const textAreaValue = textarea.value.trim();

    let isValid = true; //boolen checks individual field for validation before it submit after all validation is passed.


    if(fullNameValue === '') {
        setError(fullname, 'This field is required');
        isValid = false;
    } else {
        setSuccess(fullname);
    }


    if(EmailValue === '') {
        setError(email, 'This field is required')
        isValid = false;
    } else if (!isValidEmail(EmailValue)) {
        setError(email, 'Please provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }


    if(textAreaValue === '') {
        setError(textarea, 'This field is required')
        isValid = false;
    } else {
        setSuccess(textarea);
    }

    if (isValid) {
    successMeg.classList.add("show");

    form.reset();
    }
}

// HAMBUGER VALIDATION
function show() {
    document.getElementById("hamburger").style.display = "flex";
    document.getElementById("openBtn").style.display = "none";
    document.getElementById("closeBtn").style.display = "block";
}

function closeMenu() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("openBtn").style.display = "block";
    document.getElementById("closeBtn").style.display = "none";
}


export const validationForm = (inputFields, errors, setErrors) => {
  let emailRegex = /\S+@\S+\.\S+/;

  inputFields.forEach((i) => {
    let el = i.current.value.trim();

    if (i.name === 'firstname') {
      el === ''
        ? setErrors({ ...errors, firstname: 'Firstname can not be empty.' })
        : setErrors({ ...errors, firstname: null });
    }

    if (i.name === 'lastname') {
      el === ''
        ? setErrors({ ...errors, firstname: 'Firstname can not be empty.' })
        : setErrors({ ...errors, firstname: null });
    }

    if (i.name === 'email') {
      el === ''
        ? setErrors({ ...errors, email: 'Email can not be empty.' })
        : !emailRegex.test(el)
        ? setErrors({ ...errors, email: 'Email is invalid.' })
        : setErrors({ ...errors, email: null });
    }

    if (i.name === 'password') {
      el === ''
        ? setErrors({ ...errors, password: 'Firstname can not be empty.' })
        : el.length < 6
        ? setErrors({
            ...errors,
            password: 'Password must have at least 6 length',
          })
        : setErrors({ ...errors, password: null });
    }
  });
};
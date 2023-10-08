function emailValidator(email) {
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  if (regex.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

function pwValidator(password) {
  if (password == null) return false;
  if (password.length < 8 || password.length > 16) {
    return false;
  } else if (password.match(/[^a-zA-Z0-9]/) != null) {
    return false;
  }

  const numChkFlag = password.search(/[0-9]/g);
  const charChkFlag = password.search(/[a-z]/gi);

  if (numChkFlag < 0 || charChkFlag < 0) {
    return false;
  }

  return true;
}

export { emailValidator, pwValidator };

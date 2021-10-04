export const Validation = Value => {
  if (typeof Value == 'string') {
    const fullNameValidation = Value.trim().split(' ');
    if (fullNameValidation.length < 2) {
      return false;
    } else {
      return true;
    }
  } else if (typeof Value == 'number') {
    console.log(String(Value).length);
    if (Value.toString().length == 8) {
      return true;
    } else {
      return false;
    }
  }
};

// setState ro pass bedam

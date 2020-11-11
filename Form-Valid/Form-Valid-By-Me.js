function Validator(options) {
  //Ham thuc hien kiem tra
  function validate(inputElement, rule) {
    let errorMessage = rule.test(inputElement.value);
    let errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }

  let formElement = document.querySelector(options.form); // Lay element form can kiem tra
  if (formElement) {
    options.rules.forEach(function (rule) {
      //Lay ra cac rule cua doi tuong Validator
      let inputElement = formElement.querySelector(rule.selector); //Lay ra cac the input cua mang rule, qua rule.selector

      if (inputElement) {
        //Xu ly truong hop blur ra khoi input
        inputElement.onblur = function () {
          // Su kien onblur la click chuot ra ngoai thi bat dc su kien
          validate(inputElement, rule);
        };
      }

      //Xu ly moi khi nguoi dung nhap vao input
      inputElement.oninput = function () {
        let errorElement = inputElement.parentElement.querySelector(
          options.errorSelector
        );
        errorElement.innerText = "";
        inputElement.parentElement.classList.remove("invalid");
      };
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      if (value.trim()) {
        return undefined;
      } else {
        return message || "Vui lòng nhập trường này";
      }
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value)
        ? undefined
        : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : `Vui lòng nhập tối thiểu ${min} ký tự`;
    },
  };
};

Validator.isConfirm = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Giá trị nhập vào không chính xác`;
    },
  };
};

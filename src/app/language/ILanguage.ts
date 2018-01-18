export interface ILanguage {
  login: {
    titleLogin: string,
    forms: {
      email: string,
      password: string,
      checkboxSave: string
    },
    buttonEnter: string,
    forgotText: string,
    alert: {
      errorLogin: {
        strong: string,
        message: string
      },
      successForgot: {
        strong: string,
        message: string
      }
    }
  };
}

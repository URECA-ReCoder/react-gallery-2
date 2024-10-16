export const validateEmail = (email: string) =>
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(email);

export const validatePassword = (password: string) => /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/g.test(password);

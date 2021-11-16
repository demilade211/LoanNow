function ErrorHandler(name, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.contact = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword
}


ErrorHandler.prototype.validate = function () {
    if (this.name === "" || this.contact === "" || this.email === "" || this.password === "" || this.confirmPassword === "") {
        return 'All fields are required'
    }
    if (this.password.length < 6) {
        return 'Password length must not be less than 6'
    }
    if (this.password !== this.confirmPassword) {
        return 'Passwords do not match'
    }
}
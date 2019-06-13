export class Customer {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    city: string;
    address: string;
    postalcode: number;
    phone: string;

    constructor(email, password, firstname, lastname, city, address, postalcode, phone) {
        this.email = email
        this.password = password
        this.firstname = firstname
        this.lastname = lastname
        this.city = city
        this.address = address
        this.postalcode = postalcode
        this.phone = phone
    }
}
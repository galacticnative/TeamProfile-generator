class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if(this.name === 'name') {
            this.value = "";
        } else if(this.name === 'id') {
            this.value = "";
        } else if(this.name === 'email') {
            this.value = "";
        } else {
            return false;
        }
    }
};

module.exports = Employee;
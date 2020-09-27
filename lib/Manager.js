// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.getRole = function () {
        return "Manager";
    }
    this.getName = function () {
        return this.name;
    }
    this.getId = function () {
        return this.id;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.getOfficeNumber = function () {
        return this.office;
    }
   
}

module.exports = Manager;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
        this.getRole = function () {
            return "Manager"
        }
        this.getOfficeNumber = function () {
            return this.office
        }
        this.getName = function () {
            return this.name
        }
        this.getId = function () {
            return this.id
        }
        this.getEmail = function () {
            return this.email
        }
    }
}
module.exports = Manager;
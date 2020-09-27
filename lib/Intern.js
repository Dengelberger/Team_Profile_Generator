// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.getRole = function () {
            return "Intern"
        }
        this.getSchool = function () {
            return this.school
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
module.exports = Intern;
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
        this.getRole = function () {
            return "Engineer"
        }
        this.getGithub = function () {
            return this.github
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
module.exports = Engineer;
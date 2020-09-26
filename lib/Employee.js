// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getRole = function () {
        return "Employee";
    }
    
    //put construct here

    module.exports = Employee;
}
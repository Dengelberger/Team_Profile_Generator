// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, store) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.store = store;
    this.getRole = function () {
        return "Manager";
    }
    
    //put construct here

    module.exports = Manager;
}
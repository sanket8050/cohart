let DATA = "secrete information";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email
    }

    viewData(){
        console.log("dta is " , DATA);
    }
}

class Admin extends User{
    constructor(name,admin){
        super(name,admin);
    }
    editData(){
        DATA = "new value updated";
    }

}

let student1 = new User("sanket", "sanket@gmainl.com");
let student2 = new User("sahil", "sahil@gmainl.com");

let Admin1 = new Admin("admin","admin@gmail.com");
class mycar {

    constructor(brand,milege){
        console.log("constructor is created");
        this.brandname = brand;
        this.milege = milege;
    }
    start(){
        console.log("starting");
    }
    
    stop(){
        console.log("stopijng");
        
    }
    
    steering(){
        console.log("steering");

    }

    setbrand(brand){
        this.brandname = brand;
    }

};

let fortuner = new mycar("fortuner",20);
let lexus = new mycar("lexus", 25);   
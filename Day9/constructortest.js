class Mobile{

    constructor(pin){
        this.#pin = pin;
    }
    makecall(){
        console.log("hey calling");
    }
    #pin;
    OpenBankApplication(){
        if(this.#pin == 1234){
            console.log("open app")
                
            }else if(this.#pin != undefined){
                console.log(typeof this.#pin);
                console.log("Access denied");          
              }
        }
    }
    const mymobile = new Mobile(1234)
    mymobile.makecall()
    mymobile.OpenBankApplication()

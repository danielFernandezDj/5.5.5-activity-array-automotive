//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

// * My code:
class mercurySedan extends VehicleModule {
    constructor(mileage) {
        super(mileage)
        this.mileage = 0
        this.engine = false
        this.gas = 250
        this.speed = 0
    }

    //? Method: 
    //* When prest the button "Start_Engine" if the "Tank as Gas".
    //* And turn the "Start_Engine" true.
    //* If prest the "Button" and "Is not Gas in the Tank" {console.log ("The Gas Tank is empty!")}
    startEngine() {
        if (this.engine === false && this.gas >= 5) {
            this.engine = true
            this.gas -= 5
            console.log(`-START- \n rum-rumh, Ruunnnnn! \n Your Gas Tank is at "${this.gas}.gl"`)
        } else {
            console.log(`\n The Gas Tank is empty! _ ${this.gas}gl`)
            return false
        }
    }


    //? Method: 
    ///// * If the "startEngine" is true  
    ///// * Make a max of "Tank Gas load" and reduce it wen the "Gas_Brake" are preset, 
    ///// * if the "Gas_Brake" is preset turn the speed up, and reduce the "Tank Gas load"
    ///// * If is not Gas turn "startEngine" false.
    useGasBrake() {
        if (this.engine) {
            for (let i = 0; i < 500 && this.gas > 0; i++) {
                this.mileage++;
                this.gas--;
                this.speed = Math.min(this.speed + 2, 90);
                console.log(`${this.mileage}m _ ${this.speed}-mph _ Gas${this.gas}.gl`);

                if (this.mileage >= 100) { //! Change to 500 to see the console.lol()!
                    console.log(`Your are at your destination!`);
                    break; // Stop the loop once destination reached
                }
            }
            if (this.gas === 0) {
                console.log(`Empty Gas Tank! \n Engine Off!`);
                this.engine = false;
            }
        }
    }


    //? Method:  
    ///// If "this.engine" is true => turn the "this.engine" false.
    ///// If "stopEngine" is true do {consol.log ("Prest the "Button" to Start the Engine")}
    stopEngine() {
        if (this.engine && this.gas > 1) {
            this.engine = false
            console.log(`\n -Your Gas Tank is at "${this.gas}.gl"- \n Engine OFF \n Prest the 'Button' to Start the Engine \n\n`)
        }
    }
}

//? Call the Class:
let callSedan = new mercurySedan()
callSedan.startEngine()
callSedan.useGasBrake()
callSedan.stopEngine()

//* Start again:
// callSedan.startEngine()



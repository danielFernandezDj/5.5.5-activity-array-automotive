//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// let start = new VehicleModule.Vehicle()
// console.log(v.make, v.year)

// * My code:
class mercurySedan extends VehicleModule {
    constructor(mileage) {
        super(mileage)
        this.mileage = 0
        this.engine = false
        this.gas = 250 // 
        this.speed = 0
    }

    //! Method: 
    //* When prest the button "Start_Engine" if the "Tank as Gas".
    //* And turn the "Start_Engine" true.
    //* If prest the "Button" and "Is not Gas in the Tank" {console.log ("The Gas Tank is empty!")}
    startEngine() {
        if (this.engine === false && this.gas >= 5) {
            this.engine = true
            this.gas -= 3
            console.log(`-START-`)
            console.log(`rum-rum, Ruunnnnn!`)
            console.log(`Your Gas Tank is at "${this.gas}.gl"`)
        } else {
            console.log(`The Gas Tank is empty! _ log.gas => ${this.gas}gl _ ${this.mileage}-ml.Ph => return: False`)
            return false
        }
    }


    //! Method: 
    //* If the "startEngine" is true  
    //* Make a max of "Tank Gas load" and reduce it wen the "Gas_Brake" are preset, 
    //* if the "Gas_Brake" is preset turn the speed up, and reduce the "Tank Gas load"
    //* If is not Gas turn "startEngine" false.
    useGasBrake() {
        if (this.engine === true) {
            for (let i = 0; i < 100 && !this.gas == 0; i++) {
                this.mileage += 1
                this.gas -= 1

                if (this.speed < 90) {
                    this.speed += 2
                }

                if (this.gas <= 0) {
                    this.gas = 0
                }

                if (this.gas == 0) {
                    console.log(`Empty Gas Tank!`)
                    console.log(`Engine Off!`)
                    this.engine = false
                    console.log(this.engine) //! Engine is false now!
                    return
                }

                console.log(`${this.mileage}ml _ ${this.speed}-mlph _ Gas${this.gas}.gl`)

                if (this.mileage >= 100) {
                    //? If you want to see this massage, change the value of (this.gas -= '3') to "1"!
                    console.log(`Your are at your destination!`)
                }
            }
        }
    }


    //! Method:  
    //* If "this.engine" is true => turn the "this.engine" false.
    //* If "stopEngine" is true do {consol.log ("Prest the "Button" to Start the Engine")}
    stopEngine() {
        if (this.engine === true && this.gas > 1) {
            this.engine = false
            
            console.log(`-Your Gas Tank is at "${this.gas}.gl"-`)
            console.log("")
            console.log("Engine OFF")
            console.log("Prest the 'Button' to Start the Engine")
            console.log("")
        }
    }
}

//? Call the Class:
let callSedan = new mercurySedan()
callSedan.startEngine()
callSedan.useGasBrake()
callSedan.stopEngine()

//* Start again:
callSedan.startEngine()

# Activity Automative

- In this lesson students work on sub-classing a base vehicle class
- to do this we need a way of importing / using code from a different file...

[Official Node.js docs](https://nodejs.org/docs/v0.4.2/api/modules.html#all_Together...)

(NOTE: You'll write your derived Car class in a file you make called index.js.)


useGasBrake() {
        if (this.engine) {
            for (let i = 0; i < 100 && !this.gas == 0; i++) {
                this.mileage += 1
                this.gas -= 1

                if (this.speed < 90) {
                    this.speed += 2
                }

                if (this.gas <= 0) {
                    this.gas = 0
                }

                if (this.gas === 0) {
                    console.log(`Empty Gas Tank! \n Engine Off!`);
                    this.engine = false;
                }

                console.log(`${this.mileage}ml _ ${this.speed}-mlph _ Gas${this.gas}.gl`)

                if (this.mileage >= 100) {
                    //? If you want to see this massage, change the value of (this.gas -= '3') to "1"!
                    console.log(`Your are at your destination!`)
                }
            }
        }
    }
import { connection } from "../boot.js"
import DaysSeeder from "./migrations/Seeder/DaysSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding Days")
   
    await DaysSeeder.seed() 

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
import { connection } from "../boot.js"
import UserSeeder from "./migrations/Seeder/UserSeeder.js"
import DaysSeeder from "./migrations/Seeder/DaysSeeder.js"
import ReviewSeeder from "./migrations/Seeder/ReviewSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding Users")
    await UserSeeder.seed()
    
    console.log("Seeding Days")
    await DaysSeeder.seed()
    
    console.log("Seeding Reviews")
    await ReviewSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
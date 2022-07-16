import { User } from "../../../models/index.js"
import Bcrypt from "bcrypt";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "purpleorchid@gmail.com",
        cryptedPassword: Bcrypt.hashSync("cheese", 10),
      },
      {
        email: "Jennifer25487@outlook.com",
        cryptedPassword: Bcrypt.hashSync("manhattan", 10),
      },
      {
        email: "jrothwell34@gmail.com",
        cryptedPassword: Bcrypt.hashSync("landscape", 10),
      },
      {
        email: "mrbiggysmalls@starcast.com",
        cryptedPassword: Bcrypt.hashSync("palace", 10),
      },
      {
        email: "seashore36454@gmail.com",
        cryptedPassword: Bcrypt.hashSync("winter", 10),
      },
      {
        email: "tobiasdream@workn.com",
        cryptedPassword: Bcrypt.hashSync("summer", 10),
      }
    ];

    for (const singleUser of userData) {
      const currentUser = await User.query().findOne(singleUser);
      if (!currentUser) {
        await User.query().insert(singleUser);
      }
    }
  }
}

export default UserSeeder;
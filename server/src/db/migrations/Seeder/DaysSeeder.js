import { Day } from "../../../models/index.js"

class DaysSeeder {
    static async seed() {
      const getDates = (startDate, endDate) => {
        const dates = []
        let currentDate = startDate
        
        while (currentDate <= endDate) {
          dates.push(currentDate)
          currentDate = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1
          );
        }
        return dates
      }

      const dates = getDates(new Date(2022, 0, 1), new Date(2022, 11, 31));
//keep in mind that the monthIndex parameter is 0-based. This means that January = 0 and December = 11.

    for (const singleDayData of dates) {
      const currentDay = await Day.query().findOne({ date: singleDayData })
      if (!currentDay) {
        await Day.query().insert({ date: singleDayData })
      }
    }
  }
}
export default DaysSeeder
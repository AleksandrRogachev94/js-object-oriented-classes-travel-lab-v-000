class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 0, 1)
    let totalYears = (endDate - this.startDate)/365*24*60*60*60
    return totalYears;
  }
}

new Driver

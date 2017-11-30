let eastWes =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 0, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears);
  }
}

class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInt(avenue){
    return eastWest.indexOf(avenue);
  }
  blocksTravelled(){
    let horizontalDistance = this.avenueToInt(this.endingLocation.horizontal) - this.avenueToInt(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance + verticalDistance));
  }
}

new Route

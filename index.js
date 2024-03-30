// Code your solution here

//A Function to findMatching()
function findMatching(drivers, query){

    //returns all drivers that match the passed name
    const matchingNames = drivers.filter(driver => {

        //returns matching drivers if letters do
        return driver.toLowerCase().includes(query.toLowerCase());
    });

    //returns ana empty array if no match
    return matchingNames;
}

//A Function to attain fuzzyMatch()
function fuzzyMatch(drivers, query){

    //returns a driver  if beginning letters match
    const matchingNames = drivers.filter(driver => {

        //does not return drivers if middle or ending letters match
        return driver.toLowerCase().startsWith(query.toLowerCase());
    });

    //does not return drivers if middle or ending letters match
    return matchingNames;
}

//A Function to matchName() that accesses the data structure to check if names matches
function matchName(drivers, query) {
    const matchingDrivers = drivers.filter(driver => {
      return driver.name.toLowerCase().includes(query.toLowerCase());
    });
    return matchingDrivers;
  }
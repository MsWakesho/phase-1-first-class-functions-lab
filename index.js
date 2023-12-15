const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  } //The slice method is used to return an array with the selected elements.
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  } 
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
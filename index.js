function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, town) {
  array = drivers.filter(driver => driver.hometown === town)

  array.forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]

  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  newDrivers = [...drivers]

  return newDrivers.sort(function (a, b) {
    var x = a.name.toLowerCase()
    var y = b.name.toLowerCase()

    if(x < y) {return -1}
    if(x > y) {return 1}
    return 0
  })
}

function totalRevenue(drivers) {
  let totalPrice = 0;

  drivers.forEach(driver => totalPrice += driver.revenue);

  return totalPrice;
}

function averageRevenue(driver) {
  return totalRevenue(driver)/(driver.length)
}

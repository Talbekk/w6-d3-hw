const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() { return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () { return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) { return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) { return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () { return this.journeys.reduce((total, journey) => total + journey.distance, 0);
};

// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
//
// let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
// x(names); // 'John', 'Paul', 'George', 'Ringo'

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  return modesOfTransport.filter(( transport, index) => modesOfTransport.indexOf(transport) === index);
};


module.exports = Traveller;

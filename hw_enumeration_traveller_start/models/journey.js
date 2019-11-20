const Journey = function(startLocation, endLocation, transport, distance) {
  this.startLocation = startLocation;
  this.endLocation = endLocation;
  this.transport = transport;
  this.distance = distance;
};

Journey.prototype.getJourneyStartLocations = function () { return journeys.map(journey => journey.startLocation);  
};

module.exports = Journey;

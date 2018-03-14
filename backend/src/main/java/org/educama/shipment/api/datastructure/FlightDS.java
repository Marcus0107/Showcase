package org.educama.shipment.api.datastructure;

import org.educama.shipment.model.Flight;

/**
 * Re-usable data structure used by resources.
 */
public class FlightDS {

    public String flightNumber;

    private FlightDS() {
        // empty
    }

    public FlightDS(Flight flight) {
        System.out.println("Constructor: " + flight.flightNumber);
        this.flightNumber = flight.flightNumber;
    }

    public Flight toFlight() {
        System.out.println("toFlight: " + this.flightNumber);
                return new Flight(this.flightNumber);
    }

}

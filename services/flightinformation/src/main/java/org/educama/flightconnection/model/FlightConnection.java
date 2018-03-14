package org.educama.flightconnection.model;


import org.springframework.data.annotation.Id;

/**
 * Model class for connections.
 */
public class FlightConnection {
    @Id
    private String id;
    private String airlineIataCode;
    private String sourceAirportIataCode;
    private String destinationAirportIataCode;
    // true if this flightService is a codeshare  is, not operated by Airline, but another carrier
    private boolean codeshare;
    // Number of stops on this flightService
    private int stops;

    public String getAirlineIataCode() {
        return airlineIataCode;
    }

    public void setAirlineIataCode(String airlineIataCode) {
        this.airlineIataCode = airlineIataCode != null ? airlineIataCode.toUpperCase() : airlineIataCode;
    }

    public String getSourceAirportIataCode() {
        return sourceAirportIataCode;
    }

    public void setSourceAirportIataCode(String sourceAirportIataCode) {
        this.sourceAirportIataCode = sourceAirportIataCode != null ? sourceAirportIataCode.toUpperCase() : sourceAirportIataCode;
    }

    public String getDestinationAirportIataCode() {
        return destinationAirportIataCode;
    }

    public void setDestinationAirportIataCode(String destinationAirportIataCode) {
        this.destinationAirportIataCode = destinationAirportIataCode != null ? destinationAirportIataCode.toUpperCase() : destinationAirportIataCode;
    }

    public boolean isCodeshare() {
        return codeshare;
    }

    public void setCodeshare(boolean codeshare) {
        this.codeshare = codeshare;
    }

    public int getStops() {
        return stops;
    }

    public void setStops(int stops) {
        this.stops = stops;
    }


    public FlightConnection withAirlineIataCode(String airlineIataCode) {
        this.setAirlineIataCode(airlineIataCode);
        return this;
    }

    public FlightConnection withDestinationAirportIataCode(String destinationAirportIataCode) {
        this.setDestinationAirportIataCode(destinationAirportIataCode);
        return this;
    }

    public FlightConnection withSourceAirportIataCode(String sourceAirportIataCode) {
        this.setSourceAirportIataCode(sourceAirportIataCode);
        return this;
    }

    public FlightConnection withCodeShare(boolean codeShare) {
        this.setCodeshare(codeShare);
        return this;
    }

    public FlightConnection withStops(int stops) {
        this.setStops(stops);
        return this;
    }

    @Override
    public String toString() {
        return String.format("FlightConnection[id=%s, from='%s', to='%s',airline='%s']", id, sourceAirportIataCode, destinationAirportIataCode, airlineIataCode);
    }


}

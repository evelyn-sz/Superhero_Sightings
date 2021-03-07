package com.codeclan.example.SuperheroSightings.models;

public class Sighting {

    private String time;
    private String date;
    private Location location;
    private Superhero superhero;

    public Sighting(String time, String date, Location location, Superhero superhero) {
        this.time = time;
        this.date = date;
        this.location = location;
        this.superhero = superhero;
    }

    public Sighting(){};

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Superhero getSuperhero() {
        return superhero;
    }

    public void setSuperhero(Superhero superhero) {
        this.superhero = superhero;
    }
}

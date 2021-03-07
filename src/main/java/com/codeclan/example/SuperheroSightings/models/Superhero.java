package com.codeclan.example.SuperheroSightings.models;

import java.util.ArrayList;

public class Superhero {

    private String name;
    private ArrayList<Sighting> sightings;

    public Superhero(String name) {
        this.name = name;
        this.sightings = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Sighting> getSightings() {
        return sightings;
    }

    public void setSightings(ArrayList<Sighting> sightings) {
        this.sightings = sightings;
    }
}

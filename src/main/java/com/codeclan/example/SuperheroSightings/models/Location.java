package com.codeclan.example.SuperheroSightings.models;

import java.util.ArrayList;

public class Location {

    private String name;
    private ArrayList<Superhero> superheroes;

    public Location(String name) {
        this.name = name;
        this.superheroes = new ArrayList<>();
    }

    public Location(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Superhero> getSuperheroes() {
        return superheroes;
    }

    public void setSuperheroes(ArrayList<Superhero> superheroes) {
        this.superheroes = superheroes;
    }
}

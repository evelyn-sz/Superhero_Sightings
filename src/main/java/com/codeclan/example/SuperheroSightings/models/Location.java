package com.codeclan.example.SuperheroSightings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.annotation.Generated;
import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonIgnoreProperties("location")
    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
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

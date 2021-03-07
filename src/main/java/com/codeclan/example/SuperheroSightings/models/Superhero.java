package com.codeclan.example.SuperheroSightings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "superheroes")
public class Superhero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @JsonIgnoreProperties(value="sighting")
    @OneToMany(mappedBy = "sighting", fetch = FetchType.LAZY)
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

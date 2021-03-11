package com.codeclan.example.SuperheroSightings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "superheroes")
public class Superhero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @JsonIgnoreProperties(value="superhero")
    @OneToMany(mappedBy = "superhero", fetch = FetchType.LAZY)
    private List<Sighting> sightings;

    public Superhero(String name) {
        this.name = name;
        this.sightings = new ArrayList<>();
    }
    public Superhero(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Sighting> getSightings() {
        return sightings;
    }

    public void setSightings(ArrayList<Sighting> sightings) {
        this.sightings = sightings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

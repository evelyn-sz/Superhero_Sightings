package com.codeclan.example.SuperheroSightings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.annotation.Generated;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lat")
    private double lat;

    @Column(name= "lng")
    private double lng;

    @JsonIgnoreProperties("location")
    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
    private List<Sighting> sightings;

    public Location(String name, double lat, double lng) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.sightings = new ArrayList<>();
    }

    public Location(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public List<Sighting> getSightings() {
        return sightings;
    }

    public void getSightings(ArrayList<Sighting> sightings) {
        this.sightings = sightings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

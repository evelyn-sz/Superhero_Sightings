package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Location;
import com.codeclan.example.SuperheroSightings.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    //show all: GET '/locations'
    @GetMapping(value="/locations")
    public ResponseEntity<List<Location>> getAllLocations(){
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }
    //show by location: GET '/locations/{id}
    @GetMapping(value="/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id){
        return new ResponseEntity<>(locationRepository.findById(id), HttpStatus.OK);
    }
    //create location: POST '/locations'


    //update location: PUT
    //delete location: delete
}

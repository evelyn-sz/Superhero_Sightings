package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Location;
import com.codeclan.example.SuperheroSightings.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.PresentationDirection;
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
    @PostMapping(value="/locations")
    public ResponseEntity<Location> createLocation(@RequestBody Location location){
        return new ResponseEntity<>(location, HttpStatus.OK);
    }

    //update location: PUT
    @PutMapping(value="/locations/{id}")
    public ResponseEntity<Location> updateLocation(@RequestBody Location location){
        locationRepository.save(location);
        return new ResponseEntity<>(location, HttpStatus.OK);
    }

    @DeleteMapping(value="/locations/{id}")
    public ResponseEntity<Location> deleteLocation(@PathVariable Long id){
        Location found = locationRepository.getOne(id);
        locationRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
    //delete location: delete
}

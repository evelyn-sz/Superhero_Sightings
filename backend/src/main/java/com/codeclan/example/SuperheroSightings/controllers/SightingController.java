package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Sighting;
import com.codeclan.example.SuperheroSightings.repositories.SightingRepository;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SightingController {
    @Autowired
    SightingRepository sightingRepository;

    // Show all sightings: GET '/sightings'
    @GetMapping(value = "/sightings")
    public ResponseEntity<List<Sighting>> getAllSightings(){
        return new ResponseEntity<>(sightingRepository.findAll(), HttpStatus.OK);
    }
    // Show sighting by id: GET '/sightings/{id}'
    @GetMapping(value = "/sightings/{id}")
    public ResponseEntity getSighting(@PathVariable Long id){
        return new ResponseEntity<>(sightingRepository.findById(id), HttpStatus.OK);
    }
    // Create : POST '/sightings'
    @PostMapping(value = "/sightings")
    public ResponseEntity<Sighting> createSighting(@RequestBody Sighting sighting){
        sightingRepository.save(sighting);
        return new ResponseEntity<>(sighting, HttpStatus.CREATED);
    }
    // Edit: PATCH '/sightings/{id}'
    @PatchMapping(value ="/sightings/{id}")
    public ResponseEntity<Sighting> updateSighting(@RequestBody Sighting sighting){
        sightingRepository.save(sighting);
        return new ResponseEntity<>(sighting, HttpStatus.OK);
    }


    // Delete: DELETE '/sightings/{id}'

}


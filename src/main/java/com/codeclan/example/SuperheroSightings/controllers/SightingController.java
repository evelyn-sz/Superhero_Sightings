package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Sighting;
import com.codeclan.example.SuperheroSightings.repositories.SightingRepository;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
    @GetMapping(value="/sightings/{id}")
    public ResponseEntity
    // Create : POST '/sightings'
    // Edit: PATCH '/sightings/{id}'
    // Delete: DELETE '/sightings/{id}'

}


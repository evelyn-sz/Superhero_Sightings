package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Superhero;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SuperheroController {

    @Autowired
    SuperheroRepository superheroRepository;

//    Show all superheroes: GET ‘/superheroes’
    @GetMapping(value="/superheroes")
    public ResponseEntity<List<Superhero>> getAllSuperheroes(){
        return new ResponseEntity<>(superheroRepository.findAll(), HttpStatus.OK);
    }

//    Show superhero by ID: GET ‘/superheroes/{id}
    @GetMapping(value="/superheroes/{id}")
    public ResponseEntity getSuperhero(@PathVariable Long id){
        return new ResponseEntity<>(superheroRepository.findById(id), HttpStatus.OK);
    }
//    Create: POST ‘/superheroes’

    @PostMapping(value="/superheroes")
    public ResponseEntity<Superhero> createSuperhero(@RequestBody Superhero superhero){
        superheroRepository.save(superhero);
        return new ResponseEntity<>(superhero, HttpStatus.CREATED);
    }
//    Edit: PUT ‘/superheroes/{id}
//    Delete: DELETE ‘/superheroes/{id}


}

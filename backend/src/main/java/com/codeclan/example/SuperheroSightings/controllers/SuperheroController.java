package com.codeclan.example.SuperheroSightings.controllers;

import com.codeclan.example.SuperheroSightings.models.Superhero;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.hibernate.sql.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SuperheroController {

    @Autowired
    SuperheroRepository superheroRepository;

//    Show all superheroes: GET ‘/superheroes’
    @GetMapping(value='/superheroes')
    public ResponseEntity<List<Superhero>> getAllSuperheroes(){
        return new ResponseEntity<>(superheroRepository.findAll(), HttpStatus.OK);
    }

//    Show superhero by ID: GET ‘/superheroes/{id}
//    Create: POST ‘/superheroes’
//    Edit: PUT ‘/superheroes/{id}
//    Delete: DELETE ‘/superheroes/{id}


}

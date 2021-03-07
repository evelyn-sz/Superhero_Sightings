package com.codeclan.example.SuperheroSightings.components;

import com.codeclan.example.SuperheroSightings.models.Superhero;
import com.codeclan.example.SuperheroSightings.repositories.LocationRepository;
import com.codeclan.example.SuperheroSightings.repositories.SightingRepository;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    SuperheroRepository superheroRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    SightingRepository sightingRepository;

    public DataLoader(){};

    public void run(ApplicationArguments args) {
        Superhero superman = new Superhero("Superman");
        superheroRepository.save(superman);

        Superhero batman = new Superhero("Batman");
        superheroRepository.save(batman);


    }

}

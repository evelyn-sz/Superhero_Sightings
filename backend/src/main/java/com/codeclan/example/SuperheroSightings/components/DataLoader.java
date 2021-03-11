package com.codeclan.example.SuperheroSightings.components;

import com.codeclan.example.SuperheroSightings.models.Location;
import com.codeclan.example.SuperheroSightings.models.Sighting;
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

        Superhero spiderman = new Superhero("Spiderman");
        superheroRepository.save(spiderman);

        Superhero ghostspider = new Superhero("Ghostspider");
        superheroRepository.save(ghostspider);

        Superhero wonderwoman = new Superhero("Wonder Woman");
        superheroRepository.save(wonderwoman);

        Superhero captainmarvel = new Superhero("Captain Marvel");
        superheroRepository.save(captainmarvel);

        Location edinburgh = new Location("Edinburgh", 55.95534, -3.18854);
        locationRepository.save(edinburgh);

        Location shanghai = new Location("Shanghai", 31.132440, 121.474868);
        locationRepository.save(shanghai);

        Location newYork = new Location("New York", 40.708601454472515, -74.0401389261897);
        locationRepository.save(newYork);

        Location bangkok = new Location("Bangkok", 13.768565849229088, 100.51730600746257);
        locationRepository.save(bangkok);

        Location rome = new Location("Rome", 41.90382021297346, 12.496024163209828);
        locationRepository.save(rome);

        Location melbourne = new Location("Melbourne", -37.8231861443854, 144.96962767810015);
        locationRepository.save(melbourne);

        Sighting sighting1 = new Sighting("12:00", "01/03/2021", edinburgh, superman);
        sightingRepository.save(sighting1);

        Sighting sighting2 = new Sighting("17:00", "07/08/2020", shanghai, batman);
        sightingRepository.save(sighting2);

        Sighting sighting3 = new Sighting("07:00", "12/12/2019", rome, wonderwoman);
        sightingRepository.save(sighting3);

        Sighting sighting4 = new Sighting("11:00", "17/09/2020", newYork, spiderman);
        sightingRepository.save(sighting4);

        Sighting sighting5 = new Sighting("15:00", "21/08/2020", newYork, spiderman);
        sightingRepository.save(sighting5);

        Sighting sighting6 = new Sighting("15:00", "21/08/2020", newYork ,ghostspider);
        sightingRepository.save(sighting6);

        Sighting sighting7 = new Sighting("20:00", "11/11/2020", melbourne, captainmarvel);
        sightingRepository.save(sighting7);

        Sighting sighting8 = new Sighting("11:00", "17/09/2020", bangkok, batman);
        sightingRepository.save(sighting8);
    }

}

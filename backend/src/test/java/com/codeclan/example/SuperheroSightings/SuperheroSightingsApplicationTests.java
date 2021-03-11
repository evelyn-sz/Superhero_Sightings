package com.codeclan.example.SuperheroSightings;

import com.codeclan.example.SuperheroSightings.models.Location;
import com.codeclan.example.SuperheroSightings.models.Sighting;
import com.codeclan.example.SuperheroSightings.models.Superhero;
import com.codeclan.example.SuperheroSightings.repositories.LocationRepository;
import com.codeclan.example.SuperheroSightings.repositories.SightingRepository;
import com.codeclan.example.SuperheroSightings.repositories.SuperheroRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SuperheroSightingsApplicationTests {
	@Autowired
	SightingRepository sightingRepository;

	@Autowired
	SuperheroRepository superheroRepository;

	@Autowired
	LocationRepository locationRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void superheroAndLocationHaveNames(){
		Superhero superman = new Superhero("Superman");
		Location location = new Location("Edinburgh",  55.95534, -3.18854);

		assertEquals("Superman", superman.getName());
		assertEquals("Edinburgh", location.getName());
	}

	@Test
	public void canFindSightingsOfSpecificSuperhero(){
		List<Sighting> found = sightingRepository.findAllBySuperheroId(3L);
		assertEquals(2, found.size());
	}

	@Test
	public void canFindSightingsOfSpecificLocation(){
		List<Sighting> found = sightingRepository.findAllByLocationId(3L);
		assertEquals(3, found.size());
	}


}

package com.codeclan.example.SuperheroSightings;

import com.codeclan.example.SuperheroSightings.models.Location;
import com.codeclan.example.SuperheroSightings.models.Superhero;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SuperheroSightingsApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void superheroAndLocationHaveNames(){
		Superhero superman = new Superhero("Superman");
		Location location = new Location("Edinburgh");

		assertEquals("Superman", superman.getName());
		assertEquals("Edinburgh", location.getName());
	}
}

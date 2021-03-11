package com.codeclan.example.SuperheroSightings.repositories;

import com.codeclan.example.SuperheroSightings.models.Superhero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperheroRepository extends JpaRepository<Superhero, Long> {
}

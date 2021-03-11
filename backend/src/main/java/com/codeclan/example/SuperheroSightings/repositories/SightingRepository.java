package com.codeclan.example.SuperheroSightings.repositories;

import com.codeclan.example.SuperheroSightings.models.Sighting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SightingRepository extends JpaRepository<Sighting, Long> {
    public List<Sighting> findAllBySuperheroId(Long superheroId);
    public List<Sighting> findAllByLocationId(Long locationId);
}

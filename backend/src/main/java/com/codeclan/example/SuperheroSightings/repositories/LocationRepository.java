package com.codeclan.example.SuperheroSightings.repositories;

import com.codeclan.example.SuperheroSightings.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
}

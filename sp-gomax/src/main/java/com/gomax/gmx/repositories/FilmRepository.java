package com.gomax.gmx.repositories;

import com.gomax.gmx.entities.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FilmRepository extends CrudRepository<Film, Long> {
    }

package com.gomax.gmx.repositories;

import com.gomax.gmx.entities.Film;
import com.gomax.gmx.entities.Show;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ShowRepository extends CrudRepository<Show, Long> {

    @Query(value = "SELECT s FROM Show s WHERE s.film.id = ?1")
    List<Show> findByFilm(long film_id);


    List<Show> findAllByStartTimeIsGreaterThanEqual(Date now);


    List<Show> findByFilmAndStartTimeIsGreaterThanEqual(Film film, Date now);


}

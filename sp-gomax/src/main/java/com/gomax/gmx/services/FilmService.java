package com.gomax.gmx.services;

import com.gomax.gmx.entities.Film;
import com.gomax.gmx.entities.Show;
import com.gomax.gmx.repositories.FilmRepository;
import com.gomax.gmx.repositories.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FilmService {

    private FilmRepository filmRepository;
    private ShowRepository showRepository;

    @Autowired
    public FilmService(FilmRepository filmRepository, ShowRepository showRepository) {
        this.filmRepository = filmRepository;
        this.showRepository = showRepository;
    }

    // First version od Films à l'affiche page
    /*public List<Film> findAllFilms() {
        return (List<Film>) filmRepository.findAll();
    }*/

    // Set Films that have today's shows on "Films à l'Affiche" page
    public Set<Film> findByCurrentDate() {
        Date now = new Date();
        List<Show> todayShowsList;
        Set<Film> FilmsThatHaveShowsToday = new HashSet<>();
        todayShowsList = showRepository.findAllByStartTimeIsGreaterThanEqual(now);
        for (Show show : todayShowsList) {
            FilmsThatHaveShowsToday.add(show.getFilm());
        }
        return FilmsThatHaveShowsToday;
    }

    public Optional<Film> FindFilmById(Long id) {
        return this.filmRepository.findById(id);
    }

    public Film saveFilm(Film f) {
        return this.filmRepository.save(f);
    }

    public boolean existsFilmById(Long id) {
        return this.filmRepository.existsById(id);
    }

    public void deleteFilmById(Long id) {
        this.filmRepository.deleteById(id);
    }
}

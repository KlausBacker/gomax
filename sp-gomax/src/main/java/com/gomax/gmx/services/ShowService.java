package com.gomax.gmx.services;

import com.gomax.gmx.entities.Show;
import com.gomax.gmx.repositories.FilmRepository;
import com.gomax.gmx.repositories.ShowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ShowService {

    private ShowRepository showRepository;
    private FilmRepository filmRepository;

    @Autowired
    public ShowService(ShowRepository showRepository, FilmRepository filmRepository) {
        this.showRepository = showRepository;
        this.filmRepository = filmRepository;
    }


    public Show saveShow(Show s) {
        return this.showRepository.save(s);
    }

    public List<Show> findAllShows() {
        //CAST
        return (List<Show>) showRepository.findAll();
    }

    public Optional<Show> findShowById(Long id) {
        return this.showRepository.findById(id);
    }

    public List<Show> FindShowsForAFilm(Long id) {
        Date now = new Date();
        /*return this.showRepository.findByFilmAndStartTimeIsGreaterThanEqual(filmRepository.findById(id).get(), now);*/
        return this.showRepository.findByFilmAndStartTimeIsGreaterThanEqual(filmRepository.findById(id).get(), now);
    }


    public Show updateShow(Show s) {
        return this.showRepository.save(s);
    }

    public void deleteShow(Long id) {
        this.showRepository.deleteById(id);
    }

    public List<Show> findShowsByFilm(Long id) {
        return this.showRepository.findByFilm(id);
    }

}

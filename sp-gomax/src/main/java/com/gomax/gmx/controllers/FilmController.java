package com.gomax.gmx.controllers;

import com.gomax.gmx.entities.Film;
import com.gomax.gmx.entities.Show;
import com.gomax.gmx.services.FilmService;
import com.gomax.gmx.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/films")
public class FilmController {

    private ShowService showService;
    private FilmService filmService;

    @Autowired
    public FilmController(FilmService filmService, ShowService showService) {
        this.filmService = filmService;
        this.showService = showService;
    }

    // First version for Films à l'affiche page : Get all the films
    /*@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    public ResponseEntity<List<Film>> getAllFilms() {
        return new ResponseEntity<>(this.filmService.findAllFilms(),HttpStatus.OK);
    }*/

    // Show all films that have shows planned
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    public ResponseEntity<Set<Film>> getFilms() {
        return new ResponseEntity<>(this.filmService.findByCurrentDate(), HttpStatus.OK);
    }

    // Show one film
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/details/{id}")
    public ResponseEntity<Film> getFilm(@PathVariable Long id) {
        return new ResponseEntity<>(this.filmService.FindFilmById(id).get(), HttpStatus.OK);
    }

    @GetMapping("/shows/{id}")
    public ResponseEntity<List<Show>> getShows(@PathVariable Long id) {

//            return getShowsByFilm(film_id);
        return new ResponseEntity<>(this.showService.FindShowsForAFilm(id), HttpStatus.OK);
    }

    // Insert film into catalog (one day)
    @PostMapping("")
    public ResponseEntity<Film> postFilm(@RequestBody Film f) {
        return new ResponseEntity<>(this.filmService.saveFilm(f),
                HttpStatus.OK);
    }

    // Update film catalog (one day)
    @PutMapping("")
    public ResponseEntity<Film> putFilm(@RequestBody Film f) {
        // check if film exist before update (to avoid creation)
        if (this.filmService.existsFilmById(f.getId()))
            return new ResponseEntity<>(this.filmService.saveFilm(f),
                    HttpStatus.OK);
        else
            return new ResponseEntity<>(f,
                    HttpStatus.NOT_ACCEPTABLE);
    }

    // Delete a film catalog entry (one day)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFilmById(@PathVariable Long id) {
        this.filmService.deleteFilmById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}

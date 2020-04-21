package com.gomax.gmx.controllers;

import com.gomax.gmx.entities.Show;
import com.gomax.gmx.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/shows")
public class ShowController {

    private ShowService showService;

    @Autowired
    public ShowController(ShowService showService) {
        this.showService = showService;
    }


    @PostMapping("")
    public ResponseEntity<Show> postShow(@RequestBody Show s) {
        return new ResponseEntity<>(this.showService.saveShow(s),
                HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Show> getShowById(@PathVariable Long id) {
        return new ResponseEntity<>(this.showService.findShowById(id).orElse(null), HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Show> updateShow(@RequestBody Show s) {
        return new ResponseEntity<>(this.showService.updateShow(s),
                HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShow(@PathVariable Long id) {
        this.showService.deleteShow(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


    @GetMapping("")
    public ResponseEntity<List<Show>> getShows(@RequestParam(required = false) Long film_id) {
        if (film_id == null) {
            return getAllShows();
        } else {
            return getShowsByFilm(film_id);
        }
    }

    public ResponseEntity<List<Show>> getAllShows() {
        return new ResponseEntity<>(this.showService.findAllShows(), HttpStatus.OK);
    }


    public ResponseEntity<List<Show>> getShowsByFilm(Long film_id) {
        return new ResponseEntity<>(this.showService.findShowsByFilm(film_id), HttpStatus.OK);
    }

}

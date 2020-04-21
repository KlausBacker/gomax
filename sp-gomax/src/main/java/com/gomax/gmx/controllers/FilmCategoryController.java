package com.gomax.gmx.controllers;

import com.gomax.gmx.entities.Film;
import com.gomax.gmx.entities.FilmCategory;
import com.gomax.gmx.services.FilmCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genres")
public class FilmCategoryController {

    private FilmCategoryService filmCategoryService;

    @Autowired
    public FilmCategoryController(FilmCategoryService filmCategoryService) {
        this.filmCategoryService = filmCategoryService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    public ResponseEntity<List<FilmCategory>> getFilmCategoryObservable() {
        return new ResponseEntity<>(this.filmCategoryService.findAllFilmCategory(), HttpStatus.OK);

    };

    @GetMapping("/{id}")
    public ResponseEntity<Film> findFilmCategoryById(@PathVariable Long id) {
        return new ResponseEntity(this.filmCategoryService.findFilmCategoryById(id), HttpStatus.OK);
    }

}

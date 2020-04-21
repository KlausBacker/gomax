package com.gomax.gmx.services;

import com.gomax.gmx.entities.Film;
import com.gomax.gmx.entities.FilmCategory;
import com.gomax.gmx.repositories.FilmCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmCategoryService {

    private FilmCategoryRepository filmCategoryRepository;

    @Autowired
    public FilmCategoryService(FilmCategoryRepository filmCategoryRepository) {this.filmCategoryRepository = filmCategoryRepository;}

    public List<FilmCategory> findAllFilmCategory() {
        return (List<FilmCategory>) filmCategoryRepository.findAll();
    }

    public Optional<FilmCategory> findFilmCategoryById(Long id) {
        return this.filmCategoryRepository.findById(id);
    }


}

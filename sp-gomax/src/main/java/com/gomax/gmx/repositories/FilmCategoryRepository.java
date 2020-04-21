package com.gomax.gmx.repositories;

import com.gomax.gmx.entities.FilmCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmCategoryRepository extends CrudRepository<FilmCategory, Long> {
}

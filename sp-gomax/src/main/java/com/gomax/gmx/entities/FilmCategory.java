package com.gomax.gmx.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class FilmCategory {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @ManyToMany(mappedBy = "fcategories")
    @JsonBackReference
    private List<Film> films;

    @JsonProperty("film_genre")
    @Column(length = 50)
    private String name;
    //@ManyToMany(mappedBy = "film_has_categories")
    //@JsonBackReference
    //private List<Film> films;

}


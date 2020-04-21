package com.gomax.gmx.entities;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Film {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @JsonProperty("film_id")
    private Long id;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name ="film_film_category",
        joinColumns = @JoinColumn(name = "film_id"),
        inverseJoinColumns = @JoinColumn(name = "film_category_id")
    )
    //@JsonManagedReference
    private List<FilmCategory> fcategories;
    @JsonProperty("film_distribuepar")
    @Length(max = 50)
    private String distributeur;
    private String imdb_Id;
    @Length(max = 6)
    private String film_language;
    @JsonProperty("film_duree")
    @Length(max = 10)
    private String length;
    @Length(max = 6)
    private String originalLanguage;
    @JsonProperty("film_url_affiche")
    private String pictureUrl;
    @JsonProperty("film_etoilespresse")
    @Column(precision=2, scale=1)
    private java.math.BigDecimal pressRating;
    @JsonProperty("film_anneeproduction")
    @Length(max = 4)
    private String production_year;
    @JsonProperty("film_public")
    @Length(max = 10)
    private String publicAge;
    @JsonProperty("film_etoilesspectateurs")
    @Column(precision=2, scale=1)
    private java.math.BigDecimal publicRating;
    @JsonProperty("film_datesortie")
    @Length(max = 10)
    private String release_date;
    @Length(max = 50)
    private String rental_duration;
    @JsonProperty("film_synopsis")
    @Lob
    private String synopsis;
    @JsonProperty("film_titre")
    private String title;
   /* @OneToMany(mappedBy="film")
    @JsonBackReference
    private Set<Show> show;*/
}

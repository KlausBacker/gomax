// Import nested json data

export interface Film {
  film_id: number;
  film_titre: string;
  film_duree: string;
  fcategories: Category[];
  film_url_affiche: string;
  film_synopsis: string;
}

export interface Category {
  id: number;
  film_genre: string;
}

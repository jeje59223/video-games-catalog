export interface Game {
    slug: string,
    name: string,
    playtime: number,
    platforms: Platform[],
    stores: Store[],
    released: string,
    tba: boolean,
    background_image: string,
    rating: number,
    rating_top: number,
    ratings: Rating[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    added_by_status: Added_by_status | null,
    metacritic: number | null,
    suggestions_count: number,
    updated: string,
    id: number,
    score: string,
    clip: string | null,
    tags: Tag[],
    esrb_rating: Esrb_rating,
    user_game: string | null,
    reviews_count: number,
    community_rating: number,
    saturated_color: string,
    dominant_color: string,
    short_screenshots: Short_screenshots[],
    parent_platforms: Platform[],
    genres: Genre[]
}

export interface Esrb_rating {
    id: number,
    name: string,
    slug: string,
    name_en: string,
    name_ru: string,
}

export interface Platform {
    id: number,
    name: string,
    slug: string,
}

export interface Store {
    id: number,
    name: string,
    slug: string,
}

export interface Rating {
    id: number,
    title: string,
    count: number,
    percent: number,
}

export interface Added_by_status {
    yet: number,
    owned: number,
    beaten: number,
    toplay: number,
    dropped: number,
    playing: number,
}

export interface Tag {
    id: number,
    name: string,
    slug: string,
    language: Language,
    games_count: number,
    image_background: string,
}

export interface Language {
    eng: "eng",
    rus: "rus",
}

export interface Short_screenshots {
    id: number,
    image: string,
}

export interface Genre {
    id: number,
    name: string,
    slug: string,
}

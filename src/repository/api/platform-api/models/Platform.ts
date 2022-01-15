export interface Platform {
    "id": string,
    "name": string,
    "slug": string,
    "games_count": number,
    "image_background": string,
    "image": string,
    "year_start": string,
    "year_end": string,
    "games": GamesByPlatform[]
}

export interface GamesByPlatform {
    id: number,
    slug: string,
    name: string
    added: number,
}

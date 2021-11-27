import { Genre } from "../../repository/models/Genre";
import * as GenresApi from "../../repository/api/genre-api/genres-api";

export async function getGenres(): Promise<Genre[]> {
    return GenresApi.getGenres()
}

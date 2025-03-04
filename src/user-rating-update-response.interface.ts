import { IUserRating } from "./user-rating.interface";

export interface IUserRatingUpdateResponse {
    status: number;
    system_message: string;
    user_rating: IUserRating | null;
    errors: { [key: string]: any } | null;
}
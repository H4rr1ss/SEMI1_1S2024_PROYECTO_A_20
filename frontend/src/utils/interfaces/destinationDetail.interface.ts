import { Place } from './recordFlight.interface';

export interface PropsDestinationDetail {
    name: string;
    country: string;
    description: string;
    keywords: string[];
    image: string;
    places: Place[];
    preventRecommendations: string;
}
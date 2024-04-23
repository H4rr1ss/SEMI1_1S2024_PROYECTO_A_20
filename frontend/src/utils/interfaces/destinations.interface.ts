export interface GetDestination {
  name: string;
  country: string;
  image: string;
  description: string;
  keywords: string[];
  places: GetPlace[];
  preventiveRecommendations: string;
}

export interface GetPlace {
  id: number;
  name: string;
  description: string;
  destinationId: number;
}

export interface DestinationCardProps {
  url: string;
  country: string;
  city: string;
}

export interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  rating: number;
}

export interface ListingsData {
  listings: Listing[];
  errors: [];
}

export interface DeleteListingData {
  deleteListing: Listing;
}

export interface DeleteListingVariables {
  id: string;
}

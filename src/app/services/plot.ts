export class Plot {
  id: number;
  type: string;
  price: number;
  location: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  area: number;
  owner: {
    name: string;
    contact: string;
  }
}

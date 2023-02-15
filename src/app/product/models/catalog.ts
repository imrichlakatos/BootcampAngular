import {Product} from "./product";

export interface Catalog {
  publicId?: string;
  name: string;
  description: string;
  products?: Product[];
}

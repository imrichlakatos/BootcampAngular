import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./models/product";
import {Catalog} from "./models/catalog";

const PRODUCTS_BASE_URL = 'api/products';
const CATALOGS_BASE_URL = 'api/catalogs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  constructor(private http: HttpClient) {
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${PRODUCTS_BASE_URL}/${id}`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${PRODUCTS_BASE_URL}/${id}`);
  }

  createProduct(catalogId: string, product: Product) {
    return this.http.post(`${CATALOGS_BASE_URL}/${catalogId}/products`, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put(`${PRODUCTS_BASE_URL}/${id}`, product);
  }

  getCatalogs() {
    return this.http.get<Catalog[]>(CATALOGS_BASE_URL);
  }

  getCatalog(id: string) {
    return this.http.get<Catalog>(`${CATALOGS_BASE_URL}/${id}`);
  }

  createCatalog(catalog: Catalog) {
    return this.http.post(CATALOGS_BASE_URL, catalog);
  }

  updateCatalog(id: string, catalog: Catalog) {
    return this.http.put(`${CATALOGS_BASE_URL}/${id}`, catalog);
  }

  deleteCatalog(id: string) {
    return this.http.delete(`${CATALOGS_BASE_URL}/${id}`);
  }
}

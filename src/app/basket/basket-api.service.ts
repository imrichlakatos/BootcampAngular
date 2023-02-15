import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Basket} from "./models/basket";
import {Product} from "../product/models/product";

const BASE_URL = 'api/basket/';

@Injectable({
  providedIn: 'root'
})
export class BasketApiService {

  constructor(private http: HttpClient) {
  }

  getBasket(id: number) {
    return this.http.get<Basket>(BASE_URL + id);
  }

  updateBasket(basket: Basket) {
    return this.http.put(BASE_URL + basket.id, basket);
  }

  deleteBasket(id: number) {
    return this.http.delete(BASE_URL + id);
  }

  addProductToBasket(basketId: number, product: Product) {
    return this.http.post(BASE_URL + basketId + '/items', product);
  }
}

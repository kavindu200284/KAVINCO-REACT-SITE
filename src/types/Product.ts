export interface Product {
  _id: string;
  title: string;
  name: string;
  itemCode?: string;
  orderNumber?: number;
  condition?: string;
  description?: string;
  price?: number;
  countryOfOrigin?: string;
  image1Url?: string;
  image2Url?: string;
  image3Url?: string;
  videoLink?: string;
}

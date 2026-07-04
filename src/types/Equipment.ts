export interface Equipment {
  _id: string;
  title: string;
  name: string;
  itemCode?: string;
  orderNumber?: number;
  condition?: string;
  description?: string;
  price?: number;
  discount?: number;
  countryOfOrigin?: string;
  image1Url?: string;
  image2Url?: string;
  image3Url?: string;
  videoLink?: string;
  category?: string;
}

export interface BagInterface{
  id: number;
  image: string;
  name: string;
  description: string;
  new: boolean;
  price: number;
  color: string;
  inCart?: boolean;
  quantity: number;
}

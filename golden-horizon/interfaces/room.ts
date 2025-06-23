export interface Room {
  id: string;
  beds: number;
  breakfast: boolean;
  netflix: boolean;
  internet: boolean;
  suite: boolean;
  petFriendly: boolean;
  price: number;
  promoPrice: number | null;
  reserved: boolean;
  description: string;
  createdAt: string;
  imageUrl: string;
}

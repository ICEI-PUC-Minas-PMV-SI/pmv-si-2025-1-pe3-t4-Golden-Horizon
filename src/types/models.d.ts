// Tipos para uso no frontend (DTOs)

export type RoomDTO = {
  id: string;
  description: string;
  beds: number;
  price: number;
  reserved: boolean;
  breakfast?: boolean;
  netflix?: boolean;
  internet?: boolean;
  suite?: boolean;
  petFriendly?: boolean;
  promoPrice?: number | null;
  createdAt?: string;
};

export type UserDTO = {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  role?: string;
};

export type ReservationDTO = {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  userId?: string | null;
  room?: RoomDTO;
};

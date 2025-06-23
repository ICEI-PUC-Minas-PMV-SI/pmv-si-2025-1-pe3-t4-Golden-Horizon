export function getRandomRoomImage(): string {
  const roomImages = [
    "roomOne.jpg",
    "roomTwo.jpg",
    "roomThree.jpg",
    "roomFour.jpg",
    "roomFive.jpg",
    "roomSix.jpg",
    "roomSeven.jpg",
    "roomEight.jpg",
    "roomNine.jpg",
    "roomTen.jpg",
  ];

  const randomIndex = Math.floor(Math.random() * roomImages.length);
  return `/assets/images/${roomImages[randomIndex]}`;
}

import { Card } from "rsuite";

export default function RoomType() {
  return (
    <Card width={320} shaded>
      <img
        src="https://images.unsplash.com/photo-1576606539605-b2a44fa58467?q=80&w=1974"
        alt="Shadow"
      />
      <Card.Header as="h5">Shadow</Card.Header>
      <Card.Body>
        Meet Shadow, a spirited little explorer with a heart full of adventure!
        This charming pup loves to roam the fields, soaking up the sights and
        sounds of nature.
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
}

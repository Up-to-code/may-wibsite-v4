import Container from "../public_compnets/Container";
import Grid_of_Hero from "./Grid_of_Hero";
export default function Hero() {
  return (
    <header className=" bg-white Hero  min-h-[600px] ">
      <Container>
        <Grid_of_Hero />
      </Container>
    </header>
  );
}

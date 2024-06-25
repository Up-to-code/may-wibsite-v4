import Container from "../public_compnets/Container";
import Title from "../public_compnets/Title";
import Grid_of_cards from "./Grid_of_cards";

function Projckts() {
  return (
    <div className="bg-white py-8 min-h-screen rounded">
      <Container>
        <div className="grid grid-cols-1 justify-center items-center">
          <div className="flex justify-center  items-center lg:justify-start lg:px-14">
            <Title>Projects</Title>
          </div>

          <Grid_of_cards />
        </div>
      </Container>
    </div>
  );
}

export default Projckts;

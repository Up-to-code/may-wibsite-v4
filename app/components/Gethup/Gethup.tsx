import Container from "../public_compnets/Container";

function Gethup() {
  return (
    <div className="bg-blue-700  h-14 px-4">
      <Container>
        <div className="h-full text-white flex justify-between items-center ">
          <p>Gethup</p>
          <a
            href="https://github.com/ensite-code"
            className="text-black py-1 px-4 rounded-lg bg-white  font-bold"
          >
            Show
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Gethup;

import "./App.css";
import styled from "styled-components";

const Header = styled.h1`
  color: red;
  @media (max-width: 480px) {
    font-size: 24px;
    color: green;
  }
`;
const Hero = styled(Header)`
  color: blue;
  font-size: 100px;
`;

function App() {
  return (
    <div>
      <Hero>Iam a Hero</Hero>
      <Header>Hello React!</Header>;
    </div>
  );
}

export default App;

import Logo from "./Logo";
import { Nav } from "./Navigation";
import { Contacts } from "./Contacts";
import { Container } from "./Container";
import features from "../data/features.json";
import { Section } from "./Section";
import { FeaturesList } from "./FeaturesList";
import team from "../data/team-members.json";
import Team from "./Team";

function App() {
  return (
    <>
      <header>
        <Container>
          <Logo />
          <Nav />
          <Contacts />
        </Container>
      </header>
      <main>
        <Section>
          <Container>
            <FeaturesList features={features} />
          </Container>
        </Section>
        <Section title="Наша команда">
          <Container>
            <Team team={team} />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;

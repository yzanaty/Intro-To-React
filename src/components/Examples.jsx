import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const tabButtons = CORE_CONCEPTS.map((concept) => (
    <TabButton
      isSelected={selectedTopic === `${concept.title.toLowerCase()}`}
      onClick={() => handleSelect(concept.title.toLowerCase())}
      key={concept.title}
    >
      {concept.title}
    </TabButton>
  ));

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={tabButtons}>{tabContent}</Tabs>
    </Section>
  );
}

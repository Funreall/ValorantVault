import { useEffect, useState } from "react";
import type { AgentType } from "../myTypes/agentType";
import Agent from "../mainComponents/Agent";
import Background from "../mainComponents/Background";

function Agents() {
  const [agents, setAgents] = useState<AgentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement?.classList.add("background-body");
    return () => {
      bodyElement?.classList.remove("background-body");
    };
  }, []);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        let tempAgents: AgentType[] = [];
        data.data.forEach(
          (agent: {
            uuid: string;
            displayName: string;
            role: { displayName: string };
            description: string;
            fullPortrait: string;
            isPlayableCharacter: boolean;
          }) => {
            if (agent.isPlayableCharacter) {
              let tempObj: AgentType = {
                id: agent.uuid,
                name: agent.displayName,
                role: agent.role.displayName,
                description: agent.description,
                image: agent.fullPortrait,
              };
              tempAgents.push(tempObj);
            }
          }
        );
        setAgents(tempAgents);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getAgents();
  }, []);

  return (
    <>
      <h1 className="agent-headline">Agents</h1>
      <div className="agent-gallery">
        {!loading &&
          agents.map((agent: AgentType) => (
            <Agent key={agent.id} agentData={agent} />
          ))}
      </div>
    </>
  );
}

export default Agents;

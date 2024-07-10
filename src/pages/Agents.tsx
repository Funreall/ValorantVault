import { useEffect, useState } from "react";
import type { AgentType } from "../myTypes/agentType";
import Agent from "../mainComponents/Agent";

function Agents() {
  const [agents, setAgents] = useState<AgentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/agents");
        const data = await response.json();
        console.log(data);
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
    <div className="agent-gallery">
      {!loading &&
        agents.map((agent: AgentType) => <Agent agentData={agent} />)}
    </div>
  );
}

export default Agents;

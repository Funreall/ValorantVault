import { useNavigate } from "react-router-dom";
import type { AgentType } from "../myTypes/agentType";

type SingleAgentProps = {
  agentData: AgentType;
};

function Agent({ agentData }: SingleAgentProps) {
  const navigate = useNavigate();

  function redirectToSingleAgent() {
    navigate(`/agents/${agentData.id}`);
  }

  return (
    <div className="agent-container" onClick={redirectToSingleAgent}>
      <img className="agent-img" src={agentData.image} alt={agentData.name} />
      <h1 className="agent-name" style={{ color: "white" }}>
        {agentData.name}
      </h1>
    </div>
  );
}

export default Agent;

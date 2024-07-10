import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleAgent() {
  const [agent, setAgent] = useState({});
  const { agentId } = useParams();

  useEffect(() => {
    const getSingleAgent = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${agentId}`
        );
        const data = await response.json();
        console.log(data.data.displayName);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleAgent();
  }, []);
  return <div></div>;
}

export default SingleAgent;

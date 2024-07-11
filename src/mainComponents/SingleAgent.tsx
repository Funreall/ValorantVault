import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SingleAgentType } from "../myTypes/agentType";

function SingleAgent() {
  const [agent, setAgent] = useState<SingleAgentType>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPassive, setIsPassive] = useState(false);
  const [passiveDesc, setPassiveDesc] = useState("");
  // -1 means no ability is shown
  const [activeAbility, setActiveAbility] = useState(-1);
  const { agentId } = useParams();
  useEffect(() => {
    const getSingleAgent = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${agentId}`
        );
        const data = await response.json();
        let counter = 0;
        let tempAgent: SingleAgentType = {
          displayName: data.data.displayName,
          description: data.data.description,
          developerName: data.data.developerName,
          displayIcon: data.data.displayIcon,
          fullPortrait: data.data.fullPortrait,
          role: { displayName: data.data.role.displayName },
          abilities: data.data.abilities.map((ability: any) => {
            counter++;
            if (counter > 4) {
              console.log("passed");
              setPassiveDesc(ability.description);
              return;
            }
            return {
              displayName: ability.displayName,
              description: ability.description,
              displayIcon: ability.displayIcon,
            };
          }),
        };
        console.log(tempAgent.displayName);

        if (
          tempAgent.displayName === "Viper" ||
          tempAgent.displayName === "Astra"
        ) {
          setIsPassive(true);
        }
        console.log(tempAgent.abilities);
        setAgent(tempAgent);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleAgent();
  }, []);
  // displayName, description, developerName, displayIcon
  // fullPortrait or made something with backgroundGradientColors
  // role.displayName
  // abilities[] -> displayName, description, displayIcon

  function renderDescription() {
    if (activeAbility === -1) {
      return <></>;
    } else {
      return (
        <>
          <div className="single-agent-description">
            <h2>{agent?.abilities[activeAbility].displayName}</h2>
            <p>{agent?.abilities[activeAbility].description}</p>
          </div>
          <div className="single-agent-ability-img-container">
            <img
              className="single-agent-ability-img"
              src={agent?.abilities[activeAbility].displayIcon}
              alt={agent?.abilities[activeAbility].displayName}
            />
          </div>
        </>
      );
    }
    return <div></div>;
  }

  return (
    <div className="single-agent-container">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="single-agent-left">
            <div className="single-agent-img-container">
              <img
                className="single-agent-img"
                src={agent?.displayIcon}
                alt={agent?.displayName}
              />
            </div>
            <div className="single-agent-role">
              <h1>{agent?.role.displayName}</h1>
            </div>
            <div className="single-agent-abilities-container">
              <h1>Abilities</h1>
              <div className="single-agent-abilities">
                {agent?.abilities.map(
                  (ability, index) =>
                    ability && (
                      <div
                        onClick={() => setActiveAbility(index)}
                        key={index}
                        className="single-agent-ability"
                      >
                        <img
                          className="single-agent-ability-img"
                          src={ability.displayIcon}
                          alt={ability.displayName}
                        />
                        <p>{ability.displayName}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="single-agent-right">
            <div className="single-agent-headline">
              <div className="single-agent-name">
                <h1>Agent Name</h1>
                <p>{agent?.displayName}</p>
              </div>
              <div className="single-agent-dev">
                <h1>Developer Name</h1>
                <p>{agent?.developerName}</p>
              </div>
            </div>
            <>
              <div className="single-agent-description">
                <h2>Desc</h2>
                <p>{agent?.description}</p>
              </div>
              {isPassive && (
                <div className="single-agent-passive">
                  <h2>Passive</h2>
                  <p>{passiveDesc}</p>
                </div>
              )}
            </>
            {renderDescription()}
          </div>
        </>
      )}
    </div>
  );
}

export default SingleAgent;

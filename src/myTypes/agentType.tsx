export type AgentType = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
};
export type SingleAgentType = {
  displayName: string;
  description: string;
  developerName: string;
  displayIcon: string;
  fullPortrait: string;
  role: { displayName: string };
  abilities: {
    displayName: string;
    description: string;
    displayIcon: string;
  }[];
};

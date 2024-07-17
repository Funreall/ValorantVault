export type CollectionType = {
  colName: string;
  skins: SkinType[];
};

export type SkinType = {
  uuid: string;
  assetPath?: string;
  displayName: string;
  displayIcon: string;
  chromas: { displayIcon: string }[];
  levels: { displayIcon: string }[];
};

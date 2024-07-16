export type WeaponType = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  shopData: { categoryText: string };
};

export type CollectionsType = {
  colName: string;
  uuids: string[];
};

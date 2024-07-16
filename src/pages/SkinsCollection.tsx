import { useEffect, useState } from "react";
import type { CollectionsType } from "../myTypes/weaponType";

function SkinsCollection() {
  const [loaded, setLoaded] = useState(false);

  const [collections, setCollections] = useState<CollectionsType[]>([]);
  type SkinType = {
    uuid: string;
    assetPath: string;
    displayName: string;
  };
  useEffect(() => {
    const getSkinsByCollection = async () => {
      const response = await fetch("https://valorant-api.com/v1/weapons/skins");
      const data = await response.json();
      let activeCollections: CollectionsType[] = [];

      data.data.forEach((skin: SkinType) => {
        if (skin.assetPath.split("/").length < 1) return;
        if (skin.assetPath === "Random Favorite Skin") return;
        if (skin.assetPath.split("/")[3] === "Melee") {
          const collection = skin.assetPath.split("/")[4];
          if (
            !activeCollections.find(
              (col) => col.colName.toLowerCase() === collection.toLowerCase()
            )
          ) {
            activeCollections.push({ colName: collection, uuids: [] });
          }
          activeCollections.forEach((col) => {
            if (col.colName === collection) {
              col.uuids.push(skin.uuid);
            }
          });
        } else {
          const collection = skin.assetPath.split("/")[6];
          if (!skin) console.log("No skin found");
          if (
            !activeCollections.find(
              (col) => col.colName.toLowerCase() === collection.toLowerCase()
            )
          ) {
            activeCollections.push({ colName: collection, uuids: [] });
          }
          activeCollections.forEach((col) => {
            if (col.colName === collection) {
              col.uuids.push(skin.uuid);
            }
          });
        }
      });
      setCollections(activeCollections);
      setLoaded(true);
    };
    getSkinsByCollection();
  });

  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <div>{/* {TODO SEND A COMPONENT DETAILS} */}</div>
      )}
    </>
  );
}

export default SkinsCollection;

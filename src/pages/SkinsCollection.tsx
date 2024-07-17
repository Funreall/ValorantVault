import { useEffect, useState } from "react";
import type { CollectionType, SkinType } from "../myTypes/collectionsType";
import CollectionRow from "../mainComponents/CollectionRow";

function SkinsCollection() {
  const [loaded, setLoaded] = useState(false);

  const [collections, setCollections] = useState<CollectionType[]>([]);

  useEffect(() => {
    const getSkinsByCollection = async () => {
      const response = await fetch("https://valorant-api.com/v1/weapons/skins");
      const data = await response.json();
      // Setting up data
      // Inıtializing collections
      const tempCollections: CollectionType[] = [];
      // Looping through skins
      data.data.forEach((skin: SkinType) => {
        // Getting the skin's details
        const uuid = skin.uuid;
        const displayIcon = skin.displayIcon;
        const displayName = skin.displayName;
        const chromas = skin.chromas;
        const levels = skin.levels;
        const assetPath = skin.assetPath;
        let colName = "";
        // Getting the skin's category
        let tempSkin: SkinType = {
          uuid: uuid,
          displayName: displayName,
          displayIcon: displayIcon,
          assetPath: assetPath,
          chromas: chromas,
          levels: levels,
        };

        if (assetPath) {
          if (assetPath.split("/")[3] === "Melee") {
            colName = assetPath.split("/")[4];
          } else {
            colName = assetPath.split("/")[6];
          }
        }

        if (skin.displayName.toLowerCase() === "random favorite skin") {
          return;
        }
        if (skin.displayName.toLowerCase().includes("standard")) {
          return;
        }

        let tempCol: CollectionType;
        // Checking if the collection is already in the collections array
        const collectionIndex = tempCollections.findIndex(
          (col) => col.colName.toLowerCase() === colName.toLowerCase()
        );

        // If the collection is not in the collections array
        if (collectionIndex === -1) {
          tempCol = {
            colName: colName,
            skins: [],
          };
          tempCol.skins.push(tempSkin);
          tempCollections.push(tempCol);
        } else {
          tempCollections[collectionIndex].skins.push(tempSkin);
        }
      });
      setCollections(tempCollections);
      setLoaded(true);
      // Writing back to original states
    };
    getSkinsByCollection();
  }, []);

  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <div className="collection-container">
          {collections.map((col, index) => (
            <CollectionRow
              key={index}
              colName={col.colName}
              skins={col.skins}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default SkinsCollection;

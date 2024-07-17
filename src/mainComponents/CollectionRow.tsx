import { useEffect } from "react";
import { CollectionType, SkinType } from "../myTypes/collectionsType";

function CollectionRow({ colName, skins }: CollectionType) {
  useEffect(() => {});

  function getImgUrl(skin: SkinType) {
    if (skin.displayIcon) {
      return skin.displayIcon;
    } else if (skin.levels[0].displayIcon) {
      return skin.levels[0].displayIcon;
    } else if (skin.chromas[0].displayIcon) {
      return skin.chromas[0].displayIcon;
    } else {
      console.log("No image found for skin: ", skin.displayName);
    }
  }

  return (
    <div className="collections-row">
      <h1 className="col-name">{colName}</h1>
      <ul className="col-skins">
        {skins.map((skin) => (
          <li key={skin.uuid}>
            <img src={getImgUrl(skin)}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionRow;

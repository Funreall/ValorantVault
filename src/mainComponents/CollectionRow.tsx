import { useEffect } from "react";
import type { CollectionsType } from "../myTypes/weaponType";

function CollectionRow({ collection }: { collection: CollectionsType }) {
  useEffect(() => {
    // TODO - fetch data for collection
  });

  return (
    <div>
      <h1>{collection.colName}</h1>
      <p></p>
    </div>
  );
}

export default CollectionRow;

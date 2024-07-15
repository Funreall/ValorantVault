import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function WeaponSkins() {
  const [loaded, setLoaded] = useState(false);
  const [skins, setSkins] = useState([]);
  const query = useParams();
  const [searchParams] = useSearchParams();
  const weaponName = query.weaponName;
  const id = searchParams.get("id");

  useEffect(() => {
    const getWeaponSkins = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/weapons/${id}`
        );
        const data = await response.json();
        let tempSkins = [];
        data.data.skins.forEach((skin) => {
          tempSkins.push(skin);
        });
        setSkins(tempSkins);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    getWeaponSkins();
  });

  return (
    <>
      {!loaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          {skins.map((skin) => (
            <>
              <h1 style={{ color: "white" }}>{skin.displayName}</h1>
              <img src={skin.displayIcon} alt="" />
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default WeaponSkins;

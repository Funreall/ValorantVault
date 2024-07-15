import { useEffect, useState } from "react";
import type { WeaponType } from "../myTypes/weaponType";
import Weapon from "../mainComponents/Weapon";

function SkinsArmory() {
  const [loaded, setLoaded] = useState(false);
  const [weapons, setWeapons] = useState<WeaponType[]>([]);
  const [sidearms, setSidearms] = useState<WeaponType[]>([]);
  const [smgs, setSmgs] = useState<WeaponType[]>([]);
  const [shotguns, setShotguns] = useState<WeaponType[]>([]);
  const [rifles, setRifles] = useState<WeaponType[]>([]);
  const [snipers, setSnipers] = useState<WeaponType[]>([]);
  const [machineGuns, setMachineGuns] = useState<WeaponType[]>([]);
  const [melee, setMelee] = useState<WeaponType[]>([]);

  useEffect(() => {
    const getWeapons = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/weapons");
        const data = await response.json();
        let tempWeapons: WeaponType[] = [];
        data.data.forEach((weapon: WeaponType) => {
          if (weapon.shopData === null) {
            let meleeWeapon: WeaponType = {
              uuid: weapon.uuid,
              displayName: weapon.displayName,
              displayIcon: weapon.displayIcon,
              shopData: { categoryText: "Melee" },
            };
            tempWeapons.push(meleeWeapon);
            return;
          }
          let tempWeapon: WeaponType = {
            uuid: weapon.uuid,
            displayName: weapon.displayName,
            displayIcon: weapon.displayIcon,
            shopData: { categoryText: weapon.shopData.categoryText },
          };
          tempWeapons.push(tempWeapon);
        });
        setWeapons(tempWeapons);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    getWeapons();
  }, []);

  useEffect(() => {
    const sidearmsTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Sidearms"
    );
    const smgsTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "SMGs"
    );
    const shotgunsTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Shotguns"
    );
    const riflesTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Assault Rifles"
    );
    const snipersTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
    );
    const machineGunsTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Heavy Weapons"
    );
    const meleeTemp = weapons.filter(
      (weapon) => weapon.shopData.categoryText === "Melee"
    );

    setSidearms(sidearmsTemp);
    setSmgs(smgsTemp);
    setShotguns(shotgunsTemp);
    setRifles(riflesTemp);
    setSnipers(snipersTemp);
    setMachineGuns(machineGunsTemp);
    setMelee(meleeTemp);
  }, [weapons]);

  return (
    <>
      {!loaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className="armory-container">
          <div className="sidearms-container">
            <h1>Sidearms</h1>
            {sidearms.map((weapon) => (
              <Weapon
                name={weapon.displayName}
                imgURL={weapon.displayIcon}
                key={weapon.uuid}
                uuid={weapon.uuid}
              />
            ))}
          </div>
          <div className="smg-shotgun-container">
            <div className="smg-container">
              <h1>Smgs</h1>
              {smgs.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
            <div className="shotgun-container">
              <h1>Shotguns</h1>
              {shotguns.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
          </div>
          <div className="rifle-melee-container">
            <div className="rifle-container">
              <h1>Rifles</h1>
              {rifles.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
            <div className="melee-container">
              <h1>Melee</h1>
              {melee.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
          </div>
          <div className="sniper-machine-container">
            <div className="sniper-container">
              <h1>Snipers</h1>
              {snipers.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
            <div className="machine-container">
              <h1>Machine Guns</h1>
              {machineGuns.map((weapon) => (
                <Weapon
                  name={weapon.displayName}
                  imgURL={weapon.displayIcon}
                  key={weapon.uuid}
                  uuid={weapon.uuid}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SkinsArmory;

// uuid, displayName,

import { useNavigate } from "react-router-dom";

function Weapon({
  name,
  imgURL,
  uuid,
}: {
  name: string;
  imgURL?: string;
  uuid: string;
}) {
  const navigate = useNavigate();

  function navigateToWeapon() {
    navigate(`/skins/armory/${name.toLocaleLowerCase()}?id=${uuid}`);
  }

  return (
    <div className="weapon-container" onClick={navigateToWeapon}>
      <img className="weapon-img" src={imgURL} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Weapon;

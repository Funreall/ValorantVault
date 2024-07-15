import Button from "../components/Button";

function Home() {
  return (
    <div className="home-container">
      <div className="home-desc">
        <h2>Welcome to ValorantVault</h2>
        <p>Explore your favorite skins, gun buddies right now!</p>
        <Button text="Let's Go!" />
      </div>
      <div></div>
      <img
        className="home-img"
        src="https://res.cloudinary.com/dmdp4huyc/image/upload/v1720522221/aqbbo2zjyaqwz3ylw3ic.png"
        alt=""
      />
    </div>
  );
}

export default Home;

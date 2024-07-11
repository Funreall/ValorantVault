interface BackgroundProps {
  url: string;
}
function Background({ url }: BackgroundProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        background: `url(${url}) center / cover no-repeat`,
        backgroundAttachment: "fixed",
        zIndex: "-1",
      }}
    ></div>
  );
}

export default Background;

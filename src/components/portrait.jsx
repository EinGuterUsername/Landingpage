import marcusImg from "../assets/marcus.jpg";

export default function Portrait() {
  return (
    <div className="portraitWrap">
      <div className="portraitFrame">
        <img
          src={marcusImg}
          alt="Marcus Scherdel"
          className="portraitImg"
          loading="lazy"
        />
        <div className="portraitGlow" />
        <div className="portraitScan" />
        <div className="portraitNoise" />
      </div>

      <div className="portraitMeta">
        <div className="metaTitle">Marcus Scherdel</div>
        <div className="metaSub">Software · Tools · React Playground</div>
      </div>
    </div>
  );
}

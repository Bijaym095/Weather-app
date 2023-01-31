export default function Weatheranimation() {
  return (
    <div className="wave">
      <div
        className="wave-1"
        style={{
          backgroundImage: "url(/images/wave-top.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="wave-2"
        style={{
          backgroundImage: "url(/images/wave-mid.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="wave-3"
        style={{
          backgroundImage: "url(/images/wave-bottom.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

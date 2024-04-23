export default function NavButtons({ src, onClickFunction }) {
  return (
    <>
      <button onClick={onClickFunction} className="navButton">
        <img src={src} className="navInput" />
      </button>
    </>
  );
}

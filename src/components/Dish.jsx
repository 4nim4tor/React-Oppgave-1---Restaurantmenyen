export default function Dish({
  tittel,
  pris,
  ingredienser,
  kategori,
  beskrivelse,
}) {
  return (
    <>
      <h2 className="michroma-regular">
        🍃 {tittel} - {pris}
      </h2>
      <p className="tektur-regular">
        <strong>⚙️ {kategori}</strong>
      </p>
      <p className="michroma-regular">{beskrivelse}</p>
      <p className="tektur-regular">
        <em>{ingredienser}</em>
      </p>
    </>
  );
}

export default function Dish({
  tittel,
  pris,
  ingredienser,
  kategori,
  beskrivelse,
}) {
  return (
    <>
      <h2>
        🍃 {tittel} - {pris}
      </h2>
      <p>
        <strong>⚙️ {kategori}</strong>
      </p>
      <p>{beskrivelse}</p>
      <p>
        <em>{ingredienser}</em>
      </p>
    </>
  );
}

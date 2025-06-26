import Dish from "./Dish.jsx";

export default function Menu({ retter }) {
  return (
    <>
      <div className="menu-list">
        {retter.map((rett) => (
          <div key={rett.id}>
            <Dish {...rett} />
          </div>
        ))}
      </div>
    </>
  );
}

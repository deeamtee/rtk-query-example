import { useFindCardsQuery } from "@services/cards/cards";
import s from "./Cards.module.css";

export const Cards = () => {
  const { data } = useFindCardsQuery(null);
  console.log(data);

  return (
    <div className={s.cardsContainer}>
      {data.map((card) => (
        <div key={card.id} className={s.card}>
          {card.name}
        </div>
      ))}
    </div>
  );
};

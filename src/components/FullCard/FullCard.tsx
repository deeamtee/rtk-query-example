import { FC } from "react";
import s from "./FullCard.module.css";
import { useParams } from "react-router-dom";
import { useGetCardByIdQuery } from "@services/cards";

interface Props {}

export const FullCard: FC<Props> = ({}) => {
  const { id } = useParams();
  const { data: card } = useGetCardByIdQuery({ id: Number(id) });

  return (
    <div className={s.card}>
      {card ? (
        <>
          <img className={s.card__image} src={card.img} alt={card.title} />
          <p className={s.card__title}>{card.title}</p>
          <p className={s.card__description}>{card.description}</p>
          <h2>История</h2>
          <p className={s.card__story}>{card.story}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

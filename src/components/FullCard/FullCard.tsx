import { FC } from "react";
import s from "./FullCard.module.css";
import { useParams } from "react-router-dom";

export const FullCard: FC = ({}) => {
  const { id } = useParams();
  const card = {
    title: "Заголовок карточки",
    description: "Описание карточки",
    img: "https://pm1.aminoapps.com/7070/89285468508878d4dd8885160feade0f0fb9337ar1-1200-1262v2_00.jpg",
    story: "Это текст карточки"
  }

  return (
    <div className={s.card}>
      {card ? (
        <>
          <img className={s.card__image} src={card.img} alt={card.title} />
          <h2 className={s.card__title}>{card.title}</h2>
          <p className={s.card__description}>{card.description}</p>
          <h3 className={s.card__heading_story}>История</h3>
          <p className={s.card__story}>{card.story}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

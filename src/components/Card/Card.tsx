import { FC } from "react";
import s from "./Card.module.css";

interface Props {
  title: string;
  description?: string;
  img?: string;
  _id?: string;
}

export const Card: FC<Props> = ({ title, description, img }) => {
  return (
    <div>
      <img className={s.card__img} src={img} alt={title} />
      <p className={s.card__title}>{title}</p>
      <p className={s.card__description}>{description}</p>
    </div>
  );
};

import { useGetCardsQuery } from "@services/cards/cards"
import s from './Cards.module.css';;

export const Cards = () => {
  const { data } = useGetCardsQuery(null);

  return (
    <div className={s.cardsContainer}>
      {data?.data.map((card) => (<div key={card.id} className={s.card}>{card.name}</div>))}
    </div>
  )
}

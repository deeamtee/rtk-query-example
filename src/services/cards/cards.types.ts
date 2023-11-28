export type FindCardsApiResponse = /** status 200 card response */ Card[];
export type FindCardsApiArg = void;
export type AddCardApiResponse = /** status 200 card response */ Card;
export type AddCardApiArg = {
  /** Card to add to the store */
  newCard: NewCard;
};
export type FindCardByIdApiResponse = /** status 200 card response */ Card;
export type FindCardByIdApiArg = {
  /** ID of card to fetch */
  id: number;
};
export type DeleteCardApiResponse = /** status 204 card deleted */ void;
export type DeleteCardApiArg = {
  /** ID of card to delete */
  id: number;
};
export type NewCard = {
  name: string;
  tag?: string;
};
export type Card = NewCard & {
  id: number;
};
export type Error = {
  message: string;
};
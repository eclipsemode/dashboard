import React from 'react';
import CardItem from "@components/dashboard/Cards/CardItem";

export interface ICardItem {
    id: number,
    title: string,
    amount: number,
    percent: number,
    text: string
}

const cardItem: ICardItem[] = [
    {
        id: 1,
        title: 'Total users',
        amount: 10928,
        percent: 12,
        text: 'more than previous week'
    },
    {
        id: 2,
        title: 'Total users',
        amount: 10928,
        percent: 12,
        text: 'more than previous week'
    },
    {
        id: 3,
        title: 'Total users',
        amount: 10928,
        percent: 12,
        text: 'more than previous week'
    }
]

const Cards = () => {
    return (
        <div className='flex flex-row justify-start flex-wrap gap-2.5'>
            {
                cardItem.map(card => (
                    <CardItem key={card.id} id={card.id} title={card.title} amount={card.amount} percent={card.percent}
                              text={card.text}/>
                ))
            }
        </div>
    )
};

export default Cards;
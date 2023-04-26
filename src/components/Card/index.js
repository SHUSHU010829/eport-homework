import Image from 'next/image';
import { useState } from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
    const [newCards] = useState([
        {
            title: '藝術學群-讓世界看見臺灣！臺灣藝術人才逐漸提...',
            text: '藝術人才擁有跨領域能力成為未來趨勢，未來除了投入產業當中，也可自行創業。',
            tag: '藝術學群'
        },
        {
            title: '成大特殊選才榜首經驗分享！2 個特選備審重點告...',
            text: '讓錄取成大生科榜首、中山生科及中山醫生醫，備取長庚醫技的學姊告訴你特選的',
            tag: '醫藥衛生學群'
        },
        {
            title: '農業肥料竟然會爆炸！聊聊什麼是「硝酸銨」',
            text: '「硝酸銨」除了肥料用途，早期曾製成土製炸彈！',
            tag: '數理化學群',
        },
    ])

    return (
        <div className={classes.cards}>
            {newCards.map((card, i) => (
                <div key={i} className={classes.cards__card}>
                    <Image src='/img3.jpeg' alt='img' width='45' height='45' layout="responsive" />
                    <h3>{card.title}</h3>
                    <div className={classes.cards__card__content}>
                        <p>{card.text}</p>
                    </div>
                    <div className={classes.cards__card__tag}>
                        <a href="#"># {card.tag}</a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Card;

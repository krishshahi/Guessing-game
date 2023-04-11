import { useEffect, useState } from 'react'
import Card from './Card'
import ShowConfetti from './Confetti';

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: '/img/Clubs.png', stat: "" },
        { id: 1, img: '/img/Clubs.png', stat: "" },
        { id: 2, img: '/img/Diamonds.png', stat: "" },
        { id: 2, img: '/img/Diamonds.png', stat: "" },
        { id: 3, img: '/img/Hearts.png', stat: "" },
        { id: 3, img: '/img/Hearts.png', stat: "" },
        { id: 4, img: '/img/Spades.png', stat: "" },
        { id: 4, img: '/img/Spades.png', stat: "" },
    ].sort(() => Math.random() - 0.5))
    const [completion, setCompletion] = useState(0)
    const [prev, setPrev] = useState(-1)

    const check = (current) => {
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setCompletion(completion + 1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }
    const handleClick = (id) => {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        } else {
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
            {completion === 4 &&
                <>
                    <ShowConfetti />
                    <h1 className='win'>
                        <p className='win-2'>
                            You Win
                        </p>
                    </h1>
                </>
            }
        </div>
    )
}

export default Cards
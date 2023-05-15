import { v4 as uuidv4 } from 'https://jspm.dev/uuid';


export const menu = [
    {item : "Burger",
    price:15,
    inCart:false,
    quanity:5,
    icon:"burger",
    description:"The best burger in town",
    UUID:uuidv4()},
    {item : "Fries",
    price:5,
    inCart:false,
    quanity:10,
    icon:"wheat-awn",
    description:"You can't have a burger without fries. I guarantee that.",
    UUID:uuidv4()},
    {item : "Brew",
    price:8,
    inCart:false,
    quanity:10,
    icon:"beer-mug-empty",
    description:"IPA, Lager or Coffee",
    UUID:uuidv4()}
]


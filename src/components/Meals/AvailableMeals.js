import classes from './AvailableMeals.module.css'

const OUR_FOOD_DATA = [
    {
        id: 'f1',
        name: 'Pizza',
        descritpion: 'Beloved and iconic dish consists of flat dough, tomato sauce and cheese',
        price: 6.65,
    },
    {
        id: 'f2',
        name: 'Pasta',
        description: "unleavened dough made from wheat flour, water, and sometimes eggs",
        price: 8.99,
    },
    {
        id: 'f3',
        name: 'Hamburger',
        description: 'grilled or fried patty made from ground beef, placed between two halves of a soft, round bun',
        price: 5.99,
    },
    {
        id: 'f4',
        name: 'Sashimi',
        description: 'fresh, high-quality seafood consists of thinly sliced, raw fish or seafood that is served without any cooking',
        price: 7.87,
    },
];

const AvailableMeals = () => {
    const ourMeals = OUR_FOOD_DATA.map(food => <li>{food.name}</li>)

    return (
        <section className={classes.foods}>
            <ul>
                {ourMeals}
            </ul>
        </section>
    )
}

export default AvailableMeals;
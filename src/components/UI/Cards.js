import classes from './Cards.module.css';

const Cards = props => {
    return <div className={classes.card}>{props.children}</div>
}

export default Cards;
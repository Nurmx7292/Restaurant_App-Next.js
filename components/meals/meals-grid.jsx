import MealItem from "./meal-item";
import classes from "./meals-grid.module.css"

const MealsGrid = ({meals}) => {
    return ( 
        <ul className={classes.meals}>
            {meals.map(meal=>{
                return <li>
                    <MealItem {...meal} key={meal.id}/>
                </li>
            })}
        </ul>
     );
}
 
export default MealsGrid;
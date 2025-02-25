import MealsGrid from "@/components/meals/meals-grid"
import Link from "next/link"
import classes from "./page.module.css"
import { getMeals } from "@/lib/dbUtils"
const Meals = async () => {
  const meals = await getMeals()
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{` `}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself, It is fun and easy!
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  )
}
export default Meals

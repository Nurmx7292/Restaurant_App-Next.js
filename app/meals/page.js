import Link from "next/link"

const Meals = () => {
  return (
    <>
        <h1>Meals</h1>
        <Link href="/meals/share">Share</Link>
        <Link href="/meals/meal-1">Meal 1</Link>
    </>
  )
}
export default Meals

import { unstable_cache } from "next/cache"
const sql = require("better-sqlite3")
const db = sql("meals.db")

export const getMeals = unstable_cache(async ()=>{
    await new Promise(resolve=>setTimeout(resolve,3000))
    return db.prepare(`SELECT * FROM meals`).all()
})

 
export const getMeal = unstable_cache(async (slug)=>{
    await new Promise(resolve=>setTimeout(resolve,2000))
    return await db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
})

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NewRecipeForm = () => {
    // const [user, setUser] = useState(null);
    const [recipeCategory, setRecipeCategory] = useState("")
    const [recipeTitle, setRecipeTitle] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch("https://emmerce-task-tracker-api-production.up.railway.app/register/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ username, email, password }),
        // }).then((r) => {
        //   if (r.ok) {
        //     r.json().then((user) => setUser(user));
        //   }
        // });
        setRecipeCategory("");
        setRecipeTitle("");
        setIngredients("");
        setInstructions("");
    }
  return (
    <>
        <div className="flex flex-col justify-center my-4 p-8 w-3/4">
            <div className="flex flex-col mt-28  justify-center align-center mx-auto w-3/4 bg-black">
                <div className="border-b w-3/4 m-8 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        👨🏾‍🍳CREATE RECIPE 👩🏾‍🍳
                    </h4>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-3/4 m-10">
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="category"
                            name="category"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Category"
                            value={recipeCategory}
                            onChange = { (e) => setRecipeCategory(e.target.value) }
                        />
                        <label htmlFor="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Category</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Title"
                            value={recipeTitle}
                            onChange = { (e) => setRecipeTitle(e.target.value) }
                        />
                        <label htmlFor="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Title</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="ingredients"
                            name="ingredients"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Ingredients"
                            value={ingredients}
                            onChange = { (e) => setIngredients(e.target.value) }
                        />
                        <label htmlFor="email" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Ingredients</label>
                    </div>
                    <div className="relative border-0 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                        <input
                            id="instructions"
                            name="instructions"
                            type="text"
                            className="peer bg-black text-2xl text-white border w-full p-4 placeholder-transparent transition duration-200"
                            placeholder="Instructions"
                            value={instructions}
                            onChange = { (e) => setInstructions(e.target.value) }
                        />
                        <label htmlFor="instructions" className="absolute text-2xl font-semibold text-opacity-80 left-0.5 -top-2 bg-black text-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Instructions</label>
                    </div>
                    
                    <button
                        className="p-3 px-2 pt-2 text-white font-semibold md:bg-orange-800 md:w-full md:hover:bg-orange-700 sm:bg-blue-700"
                        type="submit"
                    >
                        CREATE RECIPE
                    </button>

                </form>
            </div>
        </div>
    </>
  )
}

export default NewRecipeForm

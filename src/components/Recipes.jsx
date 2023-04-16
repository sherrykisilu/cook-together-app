import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import Recipe from './Recipe'
import NewRecipeModal from './NewRecipeModal'

const Recipes = () => {
    const [showAddRecipe, setShowAddRecipe] = useState(false);

    const handleActivate = () => {
        setShowAddRecipe(prevState => !prevState);
    }

    const recipes = [
        "BBQ Recipes",
        "Pastries",
        "Vegan Recipes"
    ];
    
    // const items = recipes.map(recipe => {
    //     <Recipe key={recipe} value={recipe} />
    // });
  return (
    <>
        <div className="flex flex-col justify-center my-4 p-8 w-3/4">
            <div className="flex flex-col justify-center align-center mx-auto w-3/4 p-8">
                <div className="border-b w-3/4 m-10 p-4">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        RECIPES
                    </h4>
                </div>
                <div className="border-x-4 w-3/4 m-10 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                    <h4 className="text-center text-white font-semibold text-4xl damn">
                        <Recipe />
                    </h4>
                </div>
            </div>
            <div className="flex fixed justify-end bottom-0 right-8">
                <FontAwesomeIcon
                    className="peer mt-12 mb-8 transition ease-in-out delay-150 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ..."
                    style={{ fontSize: 80, color: "white" }}
                    icon={faAdd}
                    onClick={handleActivate}
                />
                <span className="hidden flex fixed text-white bottom-0 mb-8 mr-20  peer-hover:block"><i>Add Recipe!</i></span>
                {showAddRecipe && (<NewRecipeModal onActivate={handleActivate} />)}
            </div>
        </div>
    </>
  )
}

export default Recipes
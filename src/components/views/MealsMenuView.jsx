import React, { useState, useEffect } from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TileContainer from '../containers/TileContainer';

const MealsMenuView = () => {
    const req = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=83ba1a6095f544ef8459646b23754d00&minCarbs=10&maxCarbs=50&number=18`;
    const [mealItems, setMealItems] = useState([]);
    const [query, setQuery] = useState('chicken');

    const getMealItems = async () => {
        const response = await fetch(req);
        const data = await response.json();
        setMealItems(data);
    }

    useEffect(() => { getMealItems() }, [query]);

    return (
        <div className="meals-view-root">
            {mealItems.map((meal) => (
                <GridListTile key={meal.title} cols={3} className="meal-tile">
                    <img src={meal.image} alt={meal.title} />
                    <GridListTileBar
                        title={meal.title}
                        subtitle={
                            <TileContainer price={meal.calories}/>
                        }
                    />
                </GridListTile>
            ))}
        </div>
    )
}

export default MealsMenuView;
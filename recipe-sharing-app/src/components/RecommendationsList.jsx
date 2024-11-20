import React from 'react';
import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

    return (
        <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Recommendations</h2>
            <button
                className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
                onClick={generateRecommendations}
            >
                Generate Recommendations
            </button>
            {recommendations.length > 0 ? (
                recommendations.map((recipe) => (
                    <div key={recipe.id} className="p-2 bg-gray-100 rounded mb-2">
                        <h3 className="font-medium">{recipe.title}</h3>
                        <p className="text-sm text-gray-600">{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No recommendations yet.</p>
            )}
        </div>
    );
};

export default RecommendationsList;
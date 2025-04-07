const recipes = [
    {
        id: 1,
        title: "🍗 Butter Chicken",
        cuisine: "Indian",
        difficulty: "Easy",
        prepTime: 30,
        cookTime: 45,
        ingredients: [
            "1 kg chicken, cut into pieces",
            "2 cups tomato puree",
            "1 cup heavy cream",
            "2 tbsp butter",
            "2 tbsp ginger-garlic paste",
            "2 tbsp garam masala",
            "1 tbsp red chili powder",
            "1 tsp turmeric powder",
            "Salt to taste",
            "2 tbsp kasuri methi (dried fenugreek leaves)",
            "1 cup yogurt for marination"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours",
            "Heat butter in a pan and cook marinated chicken until golden",
            "Add tomato puree and cook for 15 minutes",
            "Add cream and simmer for 10 minutes",
            "Finish with kasuri methi and butter",
            "Serve hot with naan bread 🫓"
        ],
        tags: ["🍛 curry", "🍽️ dinner", "🌶️ spicy", "⭐ popular"]
    },
    {
        id: 2,
        title: "🥜 Kung Pao Chicken",
        cuisine: "Chinese",
        difficulty: "Hard",
        prepTime: 25,
        cookTime: 15,
        ingredients: [
            "500g chicken breast, diced",
            "1 cup peanuts",
            "6-8 dried red chilies",
            "3 cloves garlic, minced",
            "1-inch ginger, minced",
            "2 green onions",
            "2 tbsp soy sauce",
            "1 tbsp vinegar",
            "1 tbsp sugar",
            "2 tbsp cornstarch",
            "Sesame oil"
        ],
        instructions: [
            "Mix chicken with cornstarch and soy sauce, marinate for 30 minutes",
            "Heat wok until smoking, add oil and dried chilies",
            "Add chicken and stir-fry until golden",
            "Add garlic, ginger, and peanuts",
            "Mix sauce ingredients and add to wok",
            "Finish with green onions and sesame oil",
            "Serve hot with steamed rice 🍚"
        ],
        tags: ["🥘 stir-fry", "🌶️ spicy", "🥜 nuts"]
    },
    {
        id: 3,
        title: "🌯 Enchiladas Verdes",
        cuisine: "Mexican",
        difficulty: "Easy",
        prepTime: 40,
        cookTime: 30,
        ingredients: [
            "12 corn tortillas",
            "500g chicken, shredded",
            "2 cups green salsa",
            "2 cups Mexican cheese blend",
            "1 cup sour cream",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "1 cup chicken broth",
            "Fresh cilantro",
            "Salt and pepper to taste",
            "Oil for frying"
        ],
        instructions: [
            "Cook and shred chicken with onions and garlic",
            "Warm tortillas until pliable",
            "Fill tortillas with chicken mixture and roll",
            "Place in baking dish and cover with green salsa",
            "Top with cheese and bake at 350°F for 25 minutes",
            "Garnish with sour cream and cilantro",
            "Serve hot with Mexican rice 🍚"
        ],
        tags: ["🌮 Mexican", "🍽️ dinner", "🌶️ spicy", "🧀 cheese"]
    },
    {
        id: 4,
        title: "🥘 Dal Makhani",
        cuisine: "Indian",
        difficulty: "Medium",
        prepTime: 480,
        cookTime: 60,
        ingredients: [
            "2 cups black lentils (urad dal)",
            "1/2 cup red kidney beans (rajma)",
            "1 cup heavy cream",
            "4 tbsp butter",
            "2 onions, finely chopped",
            "4 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "2 green chilies, slit",
            "2 tbsp cream for garnish",
            "Spices:",
            "2 tsp cumin seeds",
            "2 tbsp garam masala",
            "1 tsp red chili powder",
            "Salt to taste"
        ],
        instructions: [
            "Soak lentils and kidney beans overnight",
            "Pressure cook with salt until soft (about 45 minutes)",
            "Heat butter, add cumin seeds until they crackle",
            "Add onions, sauté until golden brown",
            "Add ginger-garlic paste, green chilies, cook for 2 minutes",
            "Add tomato puree, all spices, cook for 10 minutes",
            "Add cooked lentils and beans, simmer for 30 minutes",
            "Add cream, cook for 10 more minutes",
            "Garnish with cream and butter",
            "Serve hot with naan or rice 🫓"
        ],
        tags: ["🥘 dal", "🍽️ dinner", "vegetarian", "⭐ popular"]
    },
    {
        id: 5,
        title: "🥬 Palak Paneer",
        cuisine: "Indian",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 40,
        ingredients: [
            "500g spinach, blanched and pureed",
            "250g paneer, cubed",
            "2 onions, finely chopped",
            "2 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "2 green chilies",
            "2 tbsp butter",
            "1 cup cream",
            "Spices:",
            "2 tsp cumin seeds",
            "1 tsp garam masala",
            "1 tsp turmeric powder",
            "Salt to taste"
        ],
        instructions: [
            "Blanch spinach, blend into smooth puree",
            "Heat butter, add cumin seeds",
            "Sauté onions until golden",
            "Add ginger-garlic paste, green chilies",
            "Add tomato puree, cook until oil separates",
            "Add all spices, cook for 2 minutes",
            "Add spinach puree, simmer for 15 minutes",
            "Add paneer cubes, cream",
            "Cook for 5 more minutes",
            "Serve hot with roti 🫓"
        ],
        tags: ["🥬 spinach", "vegetarian", "🧀 paneer", "healthy"]
    },
    {
        id: 6,
        title: "🍚 Chicken Biryani",
        cuisine: "Indian",
        difficulty: "Hard",
        prepTime: 60,
        cookTime: 90,
        ingredients: [
            "For Rice:",
            "3 cups basmati rice",
            "6 cups water",
            "2 bay leaves",
            "4 cardamom pods",
            "4 cloves",
            "2 cinnamon sticks",
            
            "For Chicken Marinade:",
            "1 kg chicken pieces",
            "1 cup yogurt",
            "2 tbsp ginger-garlic paste",
            "2 tbsp biryani masala",
            "1 tsp turmeric powder",
            "2 tsp red chili powder",
            "Salt to taste",
            
            "For Gravy:",
            "3 large onions, thinly sliced",
            "4 tomatoes, chopped",
            "1/2 cup mint leaves",
            "1/2 cup coriander leaves",
            "4 green chilies, slit",
            "1/2 cup oil",
            "Saffron strands soaked in milk",
            "1/2 cup ghee"
        ],
        instructions: [
            "Marinate chicken for 2 hours minimum",
            "Cook rice with whole spices until 70% done",
            "Fry onions until golden brown",
            "Layer in heavy bottom pot: gravy, chicken, rice",
            "Add saffron milk, mint, coriander between layers",
            "Seal pot with dough, cook on low heat for 45 minutes",
            "Let rest for 10 minutes before opening",
            "Serve hot with raita 🥗"
        ],
        tags: ["🍚 biryani", "🍗 chicken", "⭐ popular", "🌶️ spicy"]
    },
    {
        id: 7,
        title: "🥘 Mapo Tofu",
        cuisine: "Chinese",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 25,
        ingredients: [
            "400g soft tofu, cubed",
            "200g ground pork",
            "3 cloves garlic, minced",
            "2 tbsp doubanjiang (spicy bean paste)",
            "1 tbsp soy sauce",
            "1 tbsp Sichuan peppercorns",
            "2 green onions, chopped",
            "2 tbsp cornstarch mixed with water",
            "1 cup chicken broth",
            "2 tbsp vegetable oil",
            "Steamed rice for serving"
        ],
        instructions: [
            "Gently pat tofu dry with paper towels",
            "Heat oil in wok, add ground pork",
            "Add garlic, doubanjiang, stir-fry until fragrant",
            "Add soy sauce and Sichuan peppercorns",
            "Pour in chicken broth, bring to simmer",
            "Add tofu cubes carefully",
            "Thicken with cornstarch mixture",
            "Garnish with green onions",
            "Serve hot over steamed rice 🍚"
        ],
        tags: ["🥘 Chinese", "🌶️ spicy", "tofu", "pork"]
    },
    {
        id: 8,
        title: "🥟 Dim Sum Dumplings",
        cuisine: "Chinese",
        difficulty: "Hard",
        prepTime: 60,
        cookTime: 15,
        ingredients: [
            "For Filling:",
            "500g ground pork",
            "200g shrimp, minced",
            "2 cups Chinese cabbage, minced",
            "2 tbsp ginger, minced",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "For Wrappers:",
            "2 cups dumpling flour",
            "3/4 cup warm water",
            "For Dipping Sauce:",
            "Soy sauce",
            "Black vinegar",
            "Chili oil"
        ],
        instructions: [
            "Mix all filling ingredients well",
            "Make dough, rest for 30 minutes",
            "Roll dough into thin circles",
            "Place filling in center of each wrapper",
            "Fold and pleat to form dumplings",
            "Steam for 8-10 minutes",
            "Serve hot with dipping sauce 🥢"
        ],
        tags: ["🥟 dumplings", "Chinese", "steamed", "⭐ popular"]
    },
    {
        id: 9,
        title: "🍜 Chow Mein",
        cuisine: "Chinese",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        ingredients: [
            "400g egg noodles",
            "200g chicken or shrimp (optional)",
            "2 cups mixed vegetables (cabbage, carrots, bean sprouts)",
            "2 cloves garlic, minced",
            "1-inch ginger, julienned",
            "2 green onions, chopped",
            "For Sauce:",
            "3 tbsp soy sauce",
            "1 tbsp dark soy sauce",
            "1 tbsp oyster sauce",
            "1 tsp sesame oil",
            "1/2 tsp white pepper"
        ],
        instructions: [
            "Boil noodles until al dente, drain and set aside",
            "Mix sauce ingredients in a bowl",
            "Heat wok until smoking, add oil",
            "Stir-fry meat if using until cooked",
            "Add vegetables, garlic, ginger",
            "Add noodles and sauce, toss well",
            "Garnish with green onions",
            "Serve hot 🍜"
        ],
        tags: ["🍜 noodles", "Chinese", "stir-fry", "⭐ popular"]
    },
    {
        id: 10,
        title: "🥢 Sweet and Sour Pork",
        cuisine: "Chinese",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 20,
        ingredients: [
            "500g pork belly, cubed",
            "1 bell pepper, chunked",
            "1 onion, chunked",
            "1 pineapple, chunked",
            "For Batter:",
            "1 cup cornstarch",
            "1 egg",
            "1/2 cup water",
            "For Sauce:",
            "1/2 cup pineapple juice",
            "3 tbsp ketchup",
            "2 tbsp vinegar",
            "2 tbsp sugar",
            "1 tbsp soy sauce"
        ],
        instructions: [
            "Mix batter ingredients until smooth",
            "Coat pork pieces in batter",
            "Deep fry until golden brown",
            "Make sauce: combine all sauce ingredients",
            "Stir-fry vegetables briefly",
            "Add sauce and fried pork",
            "Toss until well coated",
            "Serve hot with rice 🍚"
        ],
        tags: ["🥢 Chinese", "🐖 pork", "sweet & sour", "⭐ popular"]
    },
    {
        id: 11,
        title: "🌮 Tacos al Pastor",
        cuisine: "Mexican",
        difficulty: "Hard",
        prepTime: 480,
        cookTime: 120,
        ingredients: [
            "2kg pork shoulder, sliced",
            "4 dried guajillo chilies",
            "2 dried ancho chilies",
            "1 pineapple",
            "2 onions",
            "4 cloves garlic",
            "2 tbsp achiote paste",
            "2 tbsp vinegar",
            "1 tbsp oregano",
            "Corn tortillas",
            "Fresh cilantro",
            "Lime wedges"
        ],
        instructions: [
            "Soak chilies, blend with spices for marinade",
            "Marinate pork overnight",
            "Layer meat on vertical spit with pineapple",
            "Cook slowly, rotating against heat",
            "Slice meat directly onto warm tortillas",
            "Top with diced pineapple, onion, cilantro",
            "Serve with lime wedges 🌮"
        ],
        tags: ["🌮 tacos", "🐖 pork", "🌶️ spicy", "⭐ popular"]
    },
    {
        id: 12,
        title: "🥑 Guacamole",
        cuisine: "Mexican",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 0,
        ingredients: [
            "3 ripe avocados",
            "1 lime, juiced",
            "1 onion, finely diced",
            "2 tomatoes, diced",
            "2 cloves garlic, minced",
            "1 jalapeño, seeded and minced",
            "1/4 cup fresh cilantro, chopped",
            "Salt and pepper to taste",
            "Tortilla chips for serving"
        ],
        instructions: [
            "Halve and pit avocados, scoop into bowl",
            "Mash avocados with lime juice",
            "Mix in onion, tomatoes, garlic, jalapeño",
            "Fold in cilantro",
            "Season with salt and pepper",
            "Serve immediately with chips 🌯"
        ],
        tags: ["🥑 avocado", "Mexican", "appetizer", "vegetarian"]
    },
    {
        id: 13,
        title: "🌶️ Chiles Rellenos",
        cuisine: "Mexican",
        difficulty: "Hard",
        prepTime: 45,
        cookTime: 30,
        ingredients: [
            "6 large poblano peppers",
            "400g Oaxaca or Monterey Jack cheese",
            "4 eggs, separated",
            "1 cup all-purpose flour",
            "Oil for frying",
            "For Sauce:",
            "4 tomatoes, roasted",
            "2 cloves garlic",
            "1 onion",
            "2 chipotle peppers in adobo",
            "Salt to taste"
        ],
        instructions: [
            "Roast and peel poblanos",
            "Stuff with cheese strips",
            "Whip egg whites until stiff peaks form",
            "Fold in egg yolks",
            "Coat peppers in flour, then egg batter",
            "Fry until golden brown",
            "Blend sauce ingredients until smooth",
            "Serve peppers with warm sauce 🌶️"
        ],
        tags: ["🌶️ spicy", "Mexican", "vegetarian", "cheese"]
    },
    {
        id: 14,
        title: "🍫 Mole Poblano",
        cuisine: "Mexican",
        difficulty: "Expert",
        prepTime: 120,
        cookTime: 180,
        ingredients: [
            "4 dried ancho chilies",
            "4 dried guajillo chilies",
            "2 chipotle chilies",
            "2 corn tortillas, torn",
            "2 oz dark chocolate",
            "1/4 cup sesame seeds",
            "1/4 cup pumpkin seeds",
            "1/4 cup almonds",
            "2 ripe plantains",
            "2 tomatoes, roasted",
            "1 onion, roasted",
            "4 garlic cloves, roasted",
            "1 cinnamon stick",
            "2 whole cloves",
            "1/4 tsp anise seeds",
            "4 cups chicken broth",
            "Salt to taste",
            "Cooked chicken for serving"
        ],
        instructions: [
            "Toast all dried chilies until fragrant",
            "Toast nuts and seeds until golden",
            "Roast vegetables until charred",
            "Blend chilies with broth until smooth",
            "Blend nuts, seeds, spices separately",
            "Cook sauce over low heat for 2 hours",
            "Add chocolate, simmer until melted",
            "Serve over cooked chicken 🍗"
        ],
        tags: ["🍫 mole", "Mexican", "🌶️ spicy", "⭐ traditional"]
    },
    {
        id: 16,
        title: "🍛 Butter Chicken",
        cuisine: "Punjabi",
        difficulty: "Medium",
        prepTime: 40,
        cookTime: 30,
        ingredients: [
            "1kg chicken, cut into pieces",
            "2 cups yogurt",
            "2 tbsp butter",
            "2 onions, finely chopped",
            "4 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "2 tbsp tandoori masala",
            "1 cup heavy cream",
            "Salt to taste",
            "Kasuri methi",
            "Honey for sweetness"
        ],
        instructions: [
            "Marinate chicken in yogurt and spices",
            "Cook chicken in tandoor or oven",
            "Prepare gravy with butter and tomatoes",
            "Add cream and kasuri methi",
            "Simmer until thick",
            "Serve hot with naan 🫓"
        ],
        tags: ["🍛 curry", "Punjabi", "🍗 chicken", "⭐ popular"]
    },
    {
        id: 17,
        title: "🥘 Chole Bhature",
        cuisine: "Punjabi",
        difficulty: "Hard",
        prepTime: 480,
        cookTime: 60,
        ingredients: [
            "For Chole:",
            "2 cups chickpeas, soaked overnight",
            "2 onions, chopped",
            "2 tomatoes, pureed",
            "2 tbsp ginger-garlic paste",
            "2 tbsp chole masala",
            "Tea bags for color",
            
            "For Bhature:",
            "3 cups maida (all-purpose flour)",
            "1/2 cup yogurt",
            "1 tsp sugar",
            "Oil for deep frying"
        ],
        instructions: [
            "Cook chickpeas with tea bags until soft",
            "Prepare masala gravy",
            "Mix bhatura dough, rest for 4 hours",
            "Roll and deep fry bhature",
            "Serve hot with pickled onions 🧅"
        ],
        tags: ["🥘 breakfast", "Punjabi", "⭐ popular", "vegetarian"]
    },
    {
        id: 18,
        title: "🥛 Lassi",
        cuisine: "Punjabi",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 0,
        ingredients: [
            "2 cups thick yogurt",
            "1/2 cup milk",
            "Sugar to taste",
            "Cardamom powder",
            "Saffron strands",
            "Chopped nuts for garnish",
            "Ice cubes"
        ],
        instructions: [
            "Blend yogurt until smooth",
            "Add milk and sugar",
            "Add cardamom and saffron",
            "Blend with ice",
            "Garnish with nuts",
            "Serve chilled 🥛"
        ],
        tags: ["🥛 drink", "Punjabi", "summer", "vegetarian"]
    }
];

function createRecipeCard(recipe, detailed = false) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    if (detailed) {
        card.innerHTML = `
            <button class="btn back-btn">← Back to Recipes</button>
            <h2>${recipe.title}</h2>
            <div class="recipe-details">
                <div class="recipe-info">
                    <p><strong>🕒 Prep Time:</strong> ${recipe.prepTime} mins</p>
                    <p><strong>👨‍🍳 Cook Time:</strong> ${recipe.cookTime} mins</p>
                    <p><strong>🏷️ Difficulty:</strong> ${recipe.difficulty}</p>
                    <p><strong>🍽️ Cuisine:</strong> ${recipe.cuisine}</p>
                </div>
                <div class="ingredients">
                    <h3>📝 Ingredients:</h3>
                    <ul class="ingredients-list">
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
                <div class="instructions">
                    <h3>📋 Instructions:</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                    </ol>
                </div>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <button class="btn close-btn">Close Recipe</button>
        `;

        const backButton = card.querySelector('.back-btn');
        backButton.addEventListener('click', () => {
            displayRecipes(recipes);
        });

        const closeButton = card.querySelector('.close-btn');
        const recipeDetails = card.querySelector('.recipe-details');
        
        closeButton.addEventListener('click', () => {
            recipeDetails.style.display = 'none';
            closeButton.textContent = 'Show Recipe';
            closeButton.classList.add('show-btn');
            
            closeButton.addEventListener('click', () => {
                if (recipeDetails.style.display === 'none') {
                    recipeDetails.style.display = 'block';
                    closeButton.textContent = 'Close Recipe';
                    closeButton.classList.remove('show-btn');
                } else {
                    recipeDetails.style.display = 'none';
                    closeButton.textContent = 'Show Recipe';
                    closeButton.classList.add('show-btn');
                }
            });
        });
    } else {
        card.innerHTML = `
            <h2>${recipe.title}</h2>
            <div class="recipe-preview">
                <p><strong>🍽️ Cuisine:</strong> ${recipe.cuisine}</p>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            const grid = document.getElementById('recipeGrid');
            grid.innerHTML = '';
            grid.appendChild(createRecipeCard(recipe, true));
        });
    }
    
    return card;
}

function filterAndDisplayRecipes(fromButton = false) {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCuisine = document.getElementById('cuisineFilter').value;
    
    const filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm);
        const matchesCuisine = !selectedCuisine || recipe.cuisine === selectedCuisine;
        
        return matchesSearch && matchesCuisine;
    });

    // Only show detailed view when button is clicked and there's one result
    if (fromButton && filtered.length === 1) {
        const grid = document.getElementById('recipeGrid');
        grid.innerHTML = '';
        grid.appendChild(createRecipeCard(filtered[0], true));
    } else {
        displayRecipes(filtered);
    }
}

// Update event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
    
    // Pass true when button is clicked
    document.getElementById('getRecipes').addEventListener('click', () => filterAndDisplayRecipes(true));
    
    // Pass false for other filter events
    document.getElementById('searchInput').addEventListener('input', () => filterAndDisplayRecipes(false));
    document.getElementById('cuisineFilter').addEventListener('change', () => filterAndDisplayRecipes(false));
});

function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        grid.innerHTML = '<p class="no-results">No recipes found matching your criteria 😕</p>';
        return;
    }

    // Group recipes by cuisine
    const groupedRecipes = recipesToShow.reduce((acc, recipe) => {
        if (!acc[recipe.cuisine]) {
            acc[recipe.cuisine] = [];
        }
        acc[recipe.cuisine].push(recipe);
        return acc;
    }, {});

    // Display recipe grid
    Object.entries(groupedRecipes).forEach(([cuisine, recipes]) => {
        const section = document.createElement('div');
        section.className = 'cuisine-section';
        section.innerHTML = `<h2 class="cuisine-title">${cuisine} Cuisine</h2>`;
        
        const recipeList = document.createElement('div');
        recipeList.className = 'recipe-list';
        
        recipes.forEach(recipe => {
            const card = createRecipeCard(recipe, false);
            card.addEventListener('click', () => {
                // When a recipe is clicked, replace grid with detailed view
                grid.innerHTML = '';
                const detailedView = document.createElement('div');
                detailedView.className = 'single-recipe-container';
                detailedView.appendChild(createRecipeCard(recipe, true));
                grid.appendChild(detailedView);
            });
            recipeList.appendChild(card);
        });
        
        section.appendChild(recipeList);
        grid.appendChild(section);
    });
}
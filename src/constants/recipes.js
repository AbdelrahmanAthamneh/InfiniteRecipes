import ChickenSaladImage from "../assets/Chicken Salad.png";
import BeefBurgerImage from "../assets/Beef Burger.png";
import PastaSaladImage from "../assets/Pasta Salad.png";
import FruitSaladImage from "../assets/Fruit Salad.png";
import GrilledSalmonImage from "../assets/Grilled Salmon.png";
import EggSandwichImage from "../assets/Egg Sandwich.png";
import AvocadoToastImage from "../assets/Avocado Toast.png";
import VegetableStirFryImage from "../assets/Vegetable Stir-fry.png";
import ChickenWrapImage from "../assets/Chicken Wrap.png";
import SmoothieBowImage from "../assets/Smoothie Bowl.png";
import ChocolateBananaPancakesImage from "../assets/Chocolate Banana Pancakes.png";
import MushroomSoupImage from "../assets/Mushroom Soup.png";
import SpinachOmeletteImage from "../assets/Spinach Omelette.png";
import AppleCrumbleImage from "../assets/Apple Crumble.png";
import YogurtParfaitImage from "../assets/Yogurt Parfait.png";
import StuffedPeppersImage from "../assets/Stuffed Peppers.png";
import BroccoliPastaImage from "../assets/Broccoli Pasta.png";
import GrapesAndCheesePlatterImage from "../assets/Grapes and Cheese Platter.png";
import TofuStirFryImage from "../assets/Tofu Stir-fry.png";
import AlmondMilkSmoothieImage from "../assets/Almond Milk Smoothie.png";
import OrangeChickenImage from "../assets/Orange Chicken.png";
import SpinachSaladImage from "../assets/Spinach Salad.png";
import StrawberryYogurtImage from "../assets/Strawberry Yogurt.png";
import ChickenAndRiceImage from "../assets/Chicken and Rice.png";
import AvocadoSaladImage from "../assets/Avocado Salad.png";
import ChocolateMilkshakeImage from "../assets/Chocolate Milkshake.png";
import BlueberryMuffinsImage from "../assets/Blueberry Muffins.png";
import BananaPancakesImage from "../assets/Banana Pancakes.png";
import MushroomRisottoImage from "../assets/Mushroom Risotto.png";
import AppleAndCheeseSnackImage from "../assets/Apple and Cheese Snack.png";

export const RECIPES = [
  {
    id: 1,
    name: "Chicken Salad",
    image: ChickenSaladImage,
    steps: {
      one: "Chop lettuce, tomato, and chicken.",
      two: "Mix all chopped ingredients in a bowl.",
      three: "Add a dressing of your choice.",
      four: "Toss the salad and serve.",
    },
    ingredients: ["Chicken", "Lettuce", "Tomato"],
  },
  {
    id: 2,
    name: "Beef Burger",
    image: BeefBurgerImage,
    steps: {
      one: "Grill the beef patty.",
      two: "Toast the bread buns.",
      three: "Assemble the burger with cheese, lettuce, and tomato.",
      four: "Serve with a side of fries.",
    },
    ingredients: ["Beef", "Bread", "Cheese", "Lettuce", "Tomato"],
  },
  {
    id: 3,
    name: "Pasta Salad",
    image: PastaSaladImage,
    steps: {
      one: "Cook the pasta according to the package instructions.",
      two: "Chop vegetables such as tomato, cucumber, and pepper.",
      three: "Mix pasta and vegetables in a large bowl.",
      four: "Add a dressing of your choice and toss.",
    },
    ingredients: ["Pasta", "Tomato", "Cucumber", "Pepper"],
  },
  {
    id: 4,
    name: "Fruit Salad",
    image: FruitSaladImage,
    steps: {
      one: "Chop apple, banana, orange, and grapes.",
      two: "Mix all the chopped fruits in a bowl.",
      three: "Add a bit of lemon juice to enhance the flavor.",
      four: "Serve chilled.",
    },
    ingredients: ["Apple", "Banana", "Orange", "Grapes"],
  },
  {
    id: 5,
    name: "Grilled Salmon",
    image: GrilledSalmonImage,
    steps: {
      one: "Season the salmon fillet with salt and pepper.",
      two: "Preheat the grill to medium-high heat.",
      three: "Grill the salmon for 6-8 minutes per side.",
      four: "Serve with a side of steamed broccoli.",
    },
    ingredients: ["Salmon", "Broccoli"],
  },
  {
    id: 6,
    name: "Egg Sandwich",
    image: EggSandwichImage,
    steps: {
      one: "Boil the eggs and slice them.",
      two: "Toast the bread.",
      three: "Assemble the sandwich with lettuce, tomato, and egg slices.",
      four: "Serve with a side of fruit.",
    },
    ingredients: ["Egg", "Bread", "Lettuce", "Tomato"],
  },
  {
    id: 7,
    name: "Avocado Toast",
    image: AvocadoToastImage,
    steps: {
      one: "Toast the bread.",
      two: "Mash the avocado and spread it on the toast.",
      three: "Add a sprinkle of salt and pepper.",
      four: "Top with sliced tomatoes or a poached egg.",
    },
    ingredients: ["Bread", "Avocado", "Tomato"],
  },
  {
    id: 8,
    name: "Vegetable Stir-fry",
    image: VegetableStirFryImage,
    steps: {
      one: "Chop broccoli, carrot, and mushroom.",
      two: "Heat oil in a pan and add the vegetables.",
      three: "Stir-fry for 5-7 minutes.",
      four: "Serve with a side of rice.",
    },
    ingredients: ["Broccoli", "Carrot", "Mushroom", "Rice"],
  },
  {
    id: 9,
    name: "Chicken Wrap",
    image: ChickenWrapImage,
    steps: {
      one: "Cook the chicken and slice it.",
      two: "Chop lettuce and tomato.",
      three: "Assemble the wrap with chicken, lettuce, and tomato.",
      four: "Roll the wrap and serve.",
    },
    ingredients: ["Chicken", "Lettuce", "Tomato"],
  },
  {
    id: 10,
    name: "Smoothie Bowl",
    image: SmoothieBowImage,
    steps: {
      one: "Blend banana, strawberry, and yogurt.",
      two: "Pour the smoothie into a bowl.",
      three: "Top with sliced fruits and almonds.",
      four: "Serve immediately.",
    },
    ingredients: ["Banana", "Strawberry", "Yogurt", "Almonds"],
  },
  {
    id: 11,
    name: "Chocolate Banana Pancakes",
    image: ChocolateBananaPancakesImage,
    steps: {
      one: "Prepare pancake batter.",
      two: "Add sliced bananas and chocolate chips to the batter.",
      three: "Cook the pancakes on a hot griddle.",
      four: "Serve with a drizzle of syrup.",
    },
    ingredients: ["Banana", "Chocolate"],
  },
  {
    id: 12,
    name: "Mushroom Soup",
    image: MushroomSoupImage,
    steps: {
      one: "Chop mushrooms and onions.",
      two: "Sauté onions and mushrooms in a pot.",
      three: "Add broth and let it simmer.",
      four: "Blend the soup until smooth.",
    },
    ingredients: ["Mushroom"],
  },
  {
    id: 13,
    name: "Spinach Omelette",
    image: SpinachOmeletteImage,
    steps: {
      one: "Whisk eggs in a bowl.",
      two: "Chop spinach and add it to the eggs.",
      three: "Pour the mixture into a hot pan.",
      four: "Cook until the omelette is set.",
    },
    ingredients: ["Egg", "Spinach"],
  },
  {
    id: 14,
    name: "Apple Crumble",
    image: AppleCrumbleImage,
    steps: {
      one: "Chop apples and place them in a baking dish.",
      two: "Mix oats, butter, and sugar for the topping.",
      three: "Sprinkle the topping over the apples.",
      four: "Bake until golden brown.",
    },
    ingredients: ["Apple"],
  },
  {
    id: 15,
    name: "Yogurt Parfait",
    image: YogurtParfaitImage,
    steps: {
      one: "Layer yogurt in a glass.",
      two: "Add a layer of chopped fruits.",
      three: "Repeat the layers.",
      four: "Top with a sprinkle of almonds.",
    },
    ingredients: ["Yogurt", "Strawberry", "Blueberry", "Almonds"],
  },
  {
    id: 16,
    name: "Stuffed Peppers",
    image: StuffedPeppersImage,
    steps: {
      one: "Cut the tops off the peppers and remove seeds.",
      two: "Stuff peppers with a mixture of rice and vegetables.",
      three: "Place the peppers in a baking dish.",
      four: "Bake until the peppers are tender.",
    },
    ingredients: ["Pepper", "Rice"],
  },
  {
    id: 17,
    name: "Broccoli Pasta",
    image: BroccoliPastaImage,
    steps: {
      one: "Cook the pasta according to package instructions.",
      two: "Steam the broccoli.",
      three: "Mix pasta and broccoli in a pan.",
      four: "Add a sauce of your choice and serve.",
    },
    ingredients: ["Pasta", "Broccoli"],
  },
  {
    id: 18,
    name: "Grapes and Cheese Platter",
    image: GrapesAndCheesePlatterImage,
    steps: {
      one: "Arrange grapes and cheese on a platter.",
      two: "Add some nuts for extra flavor.",
      three: "Serve with crackers or bread.",
      four: "Enjoy as a snack or appetizer.",
    },
    ingredients: ["Grapes", "Cheese"],
  },
  {
    id: 19,
    name: "Tofu Stir-fry",
    image: TofuStirFryImage,
    steps: {
      one: "Chop tofu and vegetables.",
      two: "Heat oil in a pan and add the tofu.",
      three: "Add vegetables and stir-fry for 5-7 minutes.",
      four: "Serve with rice.",
    },
    ingredients: ["Tofu", "Broccoli", "Carrot", "Rice"],
  },
  {
    id: 20,
    name: "Almond Milk Smoothie",
    image: AlmondMilkSmoothieImage,
    steps: {
      one: "Blend almonds with water to make almond milk.",
      two: "Add fruits of your choice and blend again.",
      three: "Pour the smoothie into a glass.",
      four: "Serve immediately.",
    },
    ingredients: ["Almonds", "Banana", "Strawberry"],
  },
  {
    id: 21,
    name: "Orange Chicken",
    image: OrangeChickenImage,
    steps: {
      one: "Cook the chicken and set aside.",
      two: "Make an orange sauce using orange juice and zest.",
      three: "Mix the chicken with the sauce.",
      four: "Serve with rice.",
    },
    ingredients: ["Chicken", "Orange", "Rice"],
  },
  {
    id: 22,
    name: "Spinach Salad",
    image: SpinachSaladImage,
    steps: {
      one: "Chop spinach, cucumber, and tomato.",
      two: "Mix all the chopped ingredients in a bowl.",
      three: "Add a dressing of your choice.",
      four: "Toss the salad and serve.",
    },
    ingredients: ["Spinach", "Cucumber", "Tomato"],
  },
  {
    id: 23,
    name: "Strawberry Yogurt",
    image: StrawberryYogurtImage,
    steps: {
      one: "Chop strawberries.",
      two: "Mix the strawberries with yogurt.",
      three: "Add a bit of honey for sweetness.",
      four: "Serve chilled.",
    },
    ingredients: ["Strawberry", "Yogurt"],
  },
  {
    id: 24,
    name: "Chicken and Rice",
    image: ChickenAndRiceImage,
    steps: {
      one: "Cook the chicken and set aside.",
      two: "Cook the rice according to package instructions.",
      three: "Mix the chicken with the rice.",
      four: "Serve with a side of vegetables.",
    },
    ingredients: ["Chicken", "Rice"],
  },
  {
    id: 25,
    name: "Avocado Salad",
    image: AvocadoSaladImage,
    steps: {
      one: "Chop avocado, tomato, and cucumber.",
      two: "Mix all the chopped ingredients in a bowl.",
      three: "Add a dressing of your choice.",
      four: "Toss the salad and serve.",
    },
    ingredients: ["Avocado", "Tomato", "Cucumber"],
  },
  {
    id: 26,
    name: "Chocolate Milkshake",
    image: ChocolateMilkshakeImage,
    steps: {
      one: "Blend milk with chocolate syrup.",
      two: "Add a scoop of ice cream.",
      three: "Blend again until smooth.",
      four: "Serve with a topping of whipped cream.",
    },
    ingredients: ["Milk", "Chocolate"],
  },
  {
    id: 27,
    name: "Blueberry Muffins",
    image: BlueberryMuffinsImage,
    steps: {
      one: "Prepare muffin batter.",
      two: "Add blueberries to the batter.",
      three: "Pour the batter into muffin cups.",
      four: "Bake until golden brown.",
    },
    ingredients: ["Blueberry"],
  },
  {
    id: 28,
    name: "Banana Pancakes",
    image: BananaPancakesImage,
    steps: {
      one: "Prepare pancake batter.",
      two: "Add sliced bananas to the batter.",
      three: "Cook the pancakes on a hot griddle.",
      four: "Serve with a drizzle of syrup.",
    },
    ingredients: ["Banana"],
  },
  {
    id: 29,
    name: "Mushroom Risotto",
    image: MushroomRisottoImage,
    steps: {
      one: "Sauté mushrooms in a pot.",
      two: "Add rice and broth.",
      three: "Cook until the rice is tender.",
      four: "Serve with grated cheese.",
    },
    ingredients: ["Mushroom", "Rice"],
  },
  {
    id: 30,
    name: "Apple and Cheese Snack",
    image: AppleAndCheeseSnackImage,
    steps: {
      one: "Slice the apple and cheese.",
      two: "Arrange on a plate.",
      three: "Add some almonds for extra flavor.",
      four: "Serve as a quick snack.",
    },
    ingredients: ["Apple", "Cheese", "Almonds"],
  },
];

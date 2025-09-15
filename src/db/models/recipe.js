import { model, Schema } from 'mongoose';


const recipeSchema = new Schema(
  {
    nameRecipe: {
      type: String,
      required: true,
    },
    dishPhoto: {
      type: String,
    },
    recipeDescription: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    calories: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const RecipesCollection = model('recipe', recipeSchema);

package recipe

import (
	"database/sql"
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type Recipe struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	RecipeId    int8   `json:"recipeId"`
}

var AllRecipes []Recipe

func PopulateRecipes() {
	AllRecipes = []Recipe{
		Recipe{Name: "Recipe 1", Description: "This is a sample description", RecipeId: 1},
		Recipe{Name: "Recipe 2", Description: "This is a sample description", RecipeId: 2},
		Recipe{Name: "Recipe 3", Description: "This is a sample description", RecipeId: 3},
	}
}

func GetRecipesDb(db *sql.DB, start, count int) ([]Recipe, error) {
	return nil, errors.New("Not implemented")
}

func (r *Recipe) GetRecipeDb(db *sql.DB) error {
	return errors.New("Not implemented")
}

func DeleteRecipe(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	for index, recipe := range AllRecipes {
		if strconv.Itoa(int(recipe.RecipeId)) == id {
			AllRecipes = append(AllRecipes[:index], AllRecipes[index+1:]...)
		}
	}
}

func CreateRecipe(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var recipe Recipe
	json.Unmarshal(reqBody, &recipe)
	AllRecipes = append(AllRecipes, recipe)
	json.NewEncoder(w).Encode(recipe)
}

func UpdateRecipe(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	vars := mux.Vars(r)
	key := vars["id"]
	var recipe Recipe
	json.Unmarshal(reqBody, &recipe)
	for index, foundRecipe := range AllRecipes {
		if strconv.Itoa(int(foundRecipe.RecipeId)) == key {
			AllRecipes[index] = recipe
		}
	}
	json.NewEncoder(w).Encode(recipe)
}

func ReturnRecipeById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	for _, recipe := range AllRecipes {
		if strconv.Itoa(int(recipe.RecipeId)) == key {
			json.NewEncoder(w).Encode(recipe)
		}
	}
}

func ReturnAllRecipes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(AllRecipes)
}

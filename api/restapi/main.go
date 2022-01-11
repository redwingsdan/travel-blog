package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	recipe "restapi/recipe"
	travelblog "restapi/travelblog"
	user "restapi/user"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to the REST API Home Page!")
	fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", homePage)
	userEndpoints(myRouter)
	recipeEndpoints(myRouter)
	travelblogEndpoints(myRouter)
	log.Fatal(http.ListenAndServe(":10000",
		handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
			handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"}),
			handlers.AllowedOrigins([]string{"*"}))(myRouter)))
	//http.HandleFunc("/", homePage)
	//http.HandleFunc("/users", returnAllUsers)
	//log.Fatal(http.ListenAndServe(":10000", nil))
}

func userEndpoints(myRouter *mux.Router) {
	myRouter.HandleFunc("/users", user.ReturnAllUsers)
	myRouter.HandleFunc("/user", user.CreateUser).Methods("POST")
	myRouter.HandleFunc("/user/{id:[0-9]+}", user.DeleteUser).Methods("DELETE")
	myRouter.HandleFunc("/user/{id:[0-9]+}", user.UpdateUser).Methods("PUT")
	myRouter.HandleFunc("/user/{id:[0-9]+}", user.ReturnUserById)
}

func recipeEndpoints(myRouter *mux.Router) {
	myRouter.HandleFunc("/recipes/load", recipe.ReturnAllRecipes).Methods("POST")
	myRouter.HandleFunc("/recipes", recipe.CreateRecipe).Methods("POST")
	myRouter.HandleFunc("/recipes/{id:[0-9]+}", recipe.ReturnRecipeById)
}

func travelblogEndpoints(myRouter *mux.Router) {
	myRouter.HandleFunc("/travel-blog/load", travelblog.ReturnAllBlogs).Methods("POST")
	myRouter.HandleFunc("/travel-blog", travelblog.CreateBlog).Methods("POST")
	myRouter.HandleFunc("/travel-blog/{id:[0-9]+}", travelblog.ReturnBlogById)
}

func main() {
	a := App{}
	a.Initialize(
		os.Getenv("APP_DB_USERNAME"),
		os.Getenv("APP_DB_PASSWORD"),
		os.Getenv("APP_DB_NAME"))

	a.Run(":8010")

	user.PopulateUsers()
	recipe.PopulateRecipes()
	travelblog.PopulateBlogs()
	handleRequests()
}

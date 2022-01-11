package user

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type User struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	UserId    int8   `json:"userId"`
}

var AllUsers []User

func PopulateUsers() {
	AllUsers = []User{
		User{FirstName: "Daniel", LastName: "Peterson", UserId: 1},
		User{FirstName: "Kayley", LastName: "Murphy", UserId: 2},
	}
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	for index, user := range AllUsers {
		if strconv.Itoa(int(user.UserId)) == id {
			AllUsers = append(AllUsers[:index], AllUsers[index+1:]...)
		}
	}
}

func CreateUser(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var user User
	json.Unmarshal(reqBody, &user)
	AllUsers = append(AllUsers, user)
	json.NewEncoder(w).Encode(user)
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	vars := mux.Vars(r)
	key := vars["id"]
	var user User
	json.Unmarshal(reqBody, &user)
	for index, foundUser := range AllUsers {
		if strconv.Itoa(int(foundUser.UserId)) == key {
			AllUsers[index] = user
		}
	}
	json.NewEncoder(w).Encode(user)
}

func ReturnUserById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	for _, user := range AllUsers {
		if strconv.Itoa(int(user.UserId)) == key {
			json.NewEncoder(w).Encode(user)
		}
	}
}

func ReturnAllUsers(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(AllUsers)
}

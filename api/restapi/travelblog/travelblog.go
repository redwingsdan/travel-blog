package travelblog

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type TravelBlog struct {
	Title       string `json:"title"`
	TextContent string `json:"textContent"`
	BlogId      int8   `json:"blogId"`
}

var AllBlogs []TravelBlog

func PopulateBlogs() {
	AllBlogs = []TravelBlog{
		TravelBlog{Title: "Destination 1", TextContent: "This is a sample text", BlogId: 1},
		TravelBlog{Title: "Destination 2", TextContent: "This is a sample text", BlogId: 2},
		TravelBlog{Title: "Destination 3", TextContent: "This is a sample text", BlogId: 3},
	}
}

func DeleteBlog(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	for index, blog := range AllBlogs {
		if strconv.Itoa(int(blog.BlogId)) == id {
			AllBlogs = append(AllBlogs[:index], AllBlogs[index+1:]...)
		}
	}
}

func CreateBlog(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var blog TravelBlog
	json.Unmarshal(reqBody, &blog)
	AllBlogs = append(AllBlogs, blog)
	json.NewEncoder(w).Encode(blog)
}

func UpdateBlog(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	vars := mux.Vars(r)
	key := vars["id"]
	var blog TravelBlog
	json.Unmarshal(reqBody, &blog)
	for index, foundBlog := range AllBlogs {
		if strconv.Itoa(int(foundBlog.BlogId)) == key {
			AllBlogs[index] = blog
		}
	}
	json.NewEncoder(w).Encode(blog)
}

func ReturnBlogById(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	for _, blog := range AllBlogs {
		if strconv.Itoa(int(blog.BlogId)) == key {
			json.NewEncoder(w).Encode(blog)
		}
	}
}

func ReturnAllBlogs(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(AllBlogs)
}

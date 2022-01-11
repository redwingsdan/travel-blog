package main_test

import (
	"log"
	"os"
	main "restapi"
	"testing"
)

var a main.App

func TestMain(m *testing.M) {
	a.Initialize(
		os.Getenv("APP_DB_USERNAME"),
		os.Getenv("APP_DB_PASSWORD"),
		os.Getenv("APP_DB_NAME"))

	ensureTableExists()
	code := m.Run()
	clearTable()
	os.Exit(code)
}

func ensureTableExists() {
	if _, err := a.DB.Exec(tableCreationQuery); err != nil {
		log.Fatal(err)
	}
}

func clearTable() {
	a.DB.Exec("DELETE FROM travel_blogs")
	a.DB.Exec("ALTER SEQUENCE travel_blogs_blog_id_seq RESTART WITH 1")
}

const tableCreationQuery = `CREATE TABLE travel_blogs
(
    blog_id SERIAL,
    title TEXT NOT NULL,
    text_content TEXT NOT NULL,
    CONSTRAINT travel_blogs_pkey PRIMARY KEY (blog_id)
)`

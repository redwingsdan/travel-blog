cd restapi
go build
go run restapi

DB Script
CREATE TABLE recipes
(
    recipe_id SERIAL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    CONSTRAINT recipes_pkey PRIMARY KEY (recipe_id)
);

CREATE TABLE travel_blogs
(
    blog_id SERIAL,
    title TEXT NOT NULL,
    text_content TEXT NOT NULL,
    CONSTRAINT travel_blogs_pkey PRIMARY KEY (blog_id)
)


docker run -it -p 5432:5432 -d postgres
go test -v

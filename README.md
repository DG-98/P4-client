## The Anime Library 
![image](https://user-images.githubusercontent.com/85405879/149440750-86e779a0-cf9a-4ef6-b550-036b83ee3c1e.png)

## Server Repo
https://github.com/DG-98/TAL-server

## Tech Used 
React: I decided on React for this project to refine my skills with front-end development. The speed and usability of React allowed me to be able to load multiple things almost instantly on the same page, and cut down on the need to load new pages. 

MongoDB: The amazing part of MongoDB when it came to this project was the ability to adjust and change models on the fly especially when you're not sure exactly what data you might need when it comes to calling in a sizable amount of information from an API.

Express: I used express for the ease of creating routes and due to my experience using it.

## User Stories
The goal for this app was to be a comparison to the popular website MyAnimeList. Someone using this website at the very least would want the ability to search an anime of their choosing and view info about their search. 

Users would also add shows that they enjoyed or intend to watch to a list to keep everything organized with the ability to also remove from their list. 

## Goals and Approach 
My vision for this project was to be able to search and get info for shows people are actually interested in. 

Like most I intended to build the app from the back-end first and while it started that way I found it easier for me to plan and envision what information I want to pull working from the front-end and modifying the back-end to fit my needs as I went.

The order of creation was the list/likes routes -> home page showing seasonal anime -> search bar to search for specific shows -> a details page for each show pulled from the API.

After the inital creation I revisted the home page and gave the option for the user to choose to either display anime from a season of their choosing, or to search for an anime. 

## Long-term goals 
I would like to eventually implement different lists such as "currently watching" and "already watched" 
I would also like to be able to generate reccomendations based off of the items on your lists. 

## Routing 
| VERB  | ROUTE   | ACTION   | DESCRIPTION   |
|---|---|---|---|
|GET:|/list|Index(Read)|Displays all items added to list|
|POST:|/list|Create(Create)|Adds show to users list|
|DELETE:|/list/:id|Delete   |Deletes show from users list   |

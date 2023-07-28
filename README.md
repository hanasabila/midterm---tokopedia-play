# 📹 Tokopedia Play Back-end 
This project is a development of back-end service for Tokopedia Play, submitted for the mid-term project of Full Stack Engineering on GIGIH 3.0 Program. It uses Node.js and Express.js for building the APIs and MongoDB for the database.

### 🗃️ Database Structure
MongoDB is utilized to store data (document) regarding to Tokopedia Play's requirements.
The database basically has 3 collections: 
- `videos`
- `products`
- `comments`

![db schema](./assets/database.png)

**Products and comments collections are getting videoID from videos collection.**
#### videos
This collection stored video thumbnail documents with the following schema:
```json
{
	"_id": "string",
	"imgURL": "string"
}
```

#### products
This collection stored product document with the following schema:
```json
{
    "_id": "string",
    "videoID": "string",
    "productID": "string",
    "title": "string",
    "price": "string"
}
```

#### comments
This collection stored comments from the user with the following schema:
```json
{
    "_id": "string",
    "videoID": "string",
    "username": "string",
    "timestamp": "string"
}

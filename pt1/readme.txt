db.dbName.find().sort(thingName: 1)  // Sorts, -1 is ascending, 1 is descending, works with any collection
db.dbName.find({thingName: {$regex: /search/i}})  // Search by coinsidence whatever is between the /, i to search at the start


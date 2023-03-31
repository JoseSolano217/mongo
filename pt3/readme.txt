db.Category.findOne({categoryName: "Man-made horrors beyond our comprehension"}, {categoryState: 1})
db.Category.findOne({categoryState: 3}, {categoryName: -1})

db.Category.findOne({categoryName: /horrors/i}, {categoryName: 1})
db.Category.findOne({categoryState: /3/i}, {categoryName: -1})

db.Product.find({productName: {$regex: /cunny/i}}, {productName: 1}).sort({productName: 1})
db.Product.find({productName: {$regex: /zone/i}}, {productName: 1}).sort({IVA: 1})

db.Product.find({IVA: {$lt: 80}}, {IVA: 1})
db.Product.find({ProductValue: {$lt: 80}}, {IVA: 1})

db.Product.find({IVA: {$gt: 80}}, {IVA: 1})
db.Product.find({ProductValue: {$gt: 80}}, {IVA: 1})

db.Product.find({expireDate: {$lt: new Date('04/03/2024')}}, 
{expireDate: 1, productName: 1}).sort({expireDate: 1})
db.Product.find({expireDate: {$gt: new Date('04/03/2020')}}, 
{expireDate: 1, productName: 1}).count()

db.Product.find({ProductValue: {$lte: 100000, $gte:20000}}, 
{productName: 1, IVA: 1, productAmount: 1})
db.Product.find({IVA: {$lte: 80, $gte:90}}, 
{productName: 1, IVA: 1, productAmount: 1})

db.Category.find({categoryState: {$eq: 1}}, 
{categoryName: 1, categoryState: 1}).sort({categoryName: -1})
db.Category.find({categoryName: {$eq: "Tools"}}, 
{categoryName: 1, categoryState: 1}).sort({categoryName: 1})

db.Product.find({$and: [{productName: /essex/i}, {IVA: {$lte: 50}}]}, 
{productName: 1, productAmount: 1, IVA: 1}).sort({productName: 1})
db.Product.find({$and: [{productName: /b/i}, {IVA: {$gte: 90}}]}, 
{productName: 1, productAmount: 1, IVA: 1}).sort({productName: -1})

const horrorsId = db.Category.findOne({categoryName: /horrors/i}, {_id: 1})
db.Product.find({$or: [{productAmount: {$lt: 50}}, {categoryCode: horrorsId}]}, 
{productAmount: 1, categoryCode: 1})
db.Product.find({$or: [{productAmount: {$gte: 100}}, {productName: /b/}]}, 
{productAmount: 1, productName: 1})

db.Product.find({productName: {$regex: /ban/i}}).skip(10).count()
db.Product.find({productName: {$regex: /sex/i}}).skip(15).count()

db.Product.find({productName: {$regex: /ban/i}}).limit(8)
db.Product.find({productName: {$regex: /sex/i}}).limit(9)

db.Product.find({productName: {$regex: /ban/i}}).skip(10).limit(20).count()
db.Product.find({productName: {$regex: /sex/i}}).skip(10).limit(20).count()
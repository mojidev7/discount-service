# discount-service
get some discounts based on products or categories

## Structure
in this service there are three tables

![tables](/tables.png)

## Simplifcation

for simplicity, complex reletaionsand configurations was discarded

## Assiociations

One To One:
Category is belongs to Category (for handling chaining category)

One To Many:
Category and Products have many discounts and
Category has many Products (simplified; because one product may have multiple categories)

## Structure

```
-src
---service (contains app logic)
-----category 
-----discount
-----product
---system (contains app configs)
-----bin  (contains migration and datas)
-----config (db connection)
-----model (repository for models)
-app.js
```

## How to install?

`docker-compose run discount-service npm run migration`

`docker-compose up -d`

## How it works?

#### first of all remmember that each product has one category that, this category maybe is child of another category.

user must provide product and discount code:
then this service try to find appropriate discount percent on that product!
if product havent any discount code then discount-service try to use the discount of category of the product and finally if doesnt found any discount yet! it trys to find discount on the super category!

#### important note: please check dummy-data.json

## How to use?
simple as hell
just to try POST data to below address:

POST: http://localhost:8080/api/v1/discount

with required body of:
``
{
    "productCode": "iph10",
    "discountCode": "a10"
}
``



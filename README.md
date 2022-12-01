# prisma-bug

npm install

echo "DATABASE_URL=postgresql://anthony:@localhost:5432/test" > ./prisma/.env

npx prisma generate
npx prisma db push

node src/index.js


```
Failed to validate the query: `Field does not exist on enclosing type.` at `Query.findManyUserOrThrow`
```
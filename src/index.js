const { PrismaClient } = require('@prisma/client');

async function main() {
  const db = new PrismaClient();
  const id = 'b5482369-586b-4998-badf-2df19ddb8ed5';

  const p1 = db.user.findUniqueOrThrow({ where: { id: id } }).then(x => x);
  const p2 = db.user.findUniqueOrThrow({ where: { id: id } }).then(x => x);

  const [r1, r2] = await Promise.all([p1, p2]);
}

main()
.then(() => {
  console.log('OK');
})
.catch((err) => { console.error(err); process.exit(1); })

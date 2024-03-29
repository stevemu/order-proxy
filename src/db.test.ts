import { testPrismaClient } from '../_tests_/_utils/prismaUtil';
import { Db } from './db';

describe('db', () => {
  const db = new Db(testPrismaClient);

  beforeEach(async () => {
    await db.clear();
  });

  it('store product', async () => {
    await db.storeProduct('MyProduct', 1234, '9999');
  });
});

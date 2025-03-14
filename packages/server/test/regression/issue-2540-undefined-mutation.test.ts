// https://github.com/trpc/trpc/issues/2540
import { routerToServerAndClientNew } from '../___testHelpers';
import { httpBatchLink, httpLink } from '@trpc/client';
import { konn } from 'konn';
import superjson from 'superjson';
import { initTRPC } from '../../src';

describe('no transformer', () => {
  const t = initTRPC.create();
  const appRouter = t.router({
    goodQuery: t.procedure.query(async () => {
      return 'good' as const;
    }),
    goodMutation: t.procedure.mutation(async () => {
      return 'good' as const;
    }),

    voidQuery: t.procedure.query(async () => {
      // void
    }),
    voidMutation: t.procedure.mutation(async () => {
      // void
    }),
  });

  describe('httpLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              links: [
                httpLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });

  describe('httpBatchLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              links: [
                httpBatchLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });

  describe('httpLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              links: [
                httpLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });

  describe('httpBatchLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              links: [
                httpBatchLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });
});

describe('with superjson', () => {
  const t = initTRPC.create({
    transformer: superjson,
  });
  const appRouter = t.router({
    goodQuery: t.procedure.query(async () => {
      return 'good' as const;
    }),
    goodMutation: t.procedure.mutation(async () => {
      return 'good' as const;
    }),

    voidQuery: t.procedure.query(async () => {
      // void
    }),
    voidMutation: t.procedure.mutation(async () => {
      // void
    }),
  });

  describe('httpLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              transformer: superjson,
              links: [
                httpLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });

  describe('httpBatchLink', () => {
    const ctx = konn()
      .beforeEach(() => {
        const opts = routerToServerAndClientNew(appRouter, {
          client({ httpUrl }) {
            return {
              transformer: superjson,
              links: [
                httpBatchLink({
                  url: httpUrl,
                }),
              ],
            };
          },
        });

        return opts;
      })
      .afterEach(async (ctx) => {
        await ctx?.close?.();
      })
      .done();

    test('query with response: good', async () => {
      expect(await ctx.proxy.goodQuery.query()).toBe('good');
    });
    test('query, void response', async () => {
      expect(await ctx.proxy.voidQuery.query()).toBe(undefined);
    });
    test('mutate with response: good', async () => {
      expect(await ctx.proxy.goodMutation.mutate()).toBe('good');
    });
    test('mutate, void response', async () => {
      expect(await ctx.proxy.voidMutation.mutate()).toBe(undefined);
    });
  });
});

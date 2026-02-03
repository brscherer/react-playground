import { rest } from 'msw';

const API = 'https://jsonplaceholder.typicode.com';

export const handlers = [
  rest.get(`${API}/posts`, (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('_limit') || '5');

    const posts = Array.from({ length: limit }).map((_, i) => ({
      id: i + 1,
      title: `Mock Post ${i + 1}`,
      body: `This is a mocked body for post ${i + 1}`,
      userId: (i % 5) + 1,
    }));

    return res(ctx.status(200), ctx.delay(400), ctx.json(posts));
  }),

  rest.post(`${API}/posts`, async (req, res, ctx) => {
    const body = await req.json();
    const created = {
      id: Math.floor(Math.random() * 10000) + 100,
      ...body,
    };
    return res(ctx.status(201), ctx.delay(300), ctx.json(created));
  }),

  rest.get(`${API}/users/:id`, (req, res, ctx) => {
    const { id } = req.params as { id: string };
    const userId = Number(id);

    if (userId > 5) {
      return res(ctx.status(404), ctx.json({ message: 'User not found' }));
    }

    return res(
      ctx.status(200),
      ctx.delay(600),
      ctx.json({ id: userId, name: `Mock User ${userId}`, email: `user${userId}@example.com`, phone: '555-0100' }),
    );
  }),

  rest.get(`${API}/invalid-endpoint`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: 'Not found' }));
  }),

  rest.get(`${API}/api/error-500`, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ message: 'Server error (mock)' }));
  }),
];

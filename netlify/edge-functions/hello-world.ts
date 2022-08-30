import { Context } from 'https://edge.netlify.com';

export default async function (_request: Request, context: Context) {
  const response = await context.next();
  const text = await response.text();

  const city = context.geo.city;

  const newText = `${text} ${city}`;

  return new Response(newText.toLocaleUpperCase(), response);
}

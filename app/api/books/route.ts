import books from "../db";

export async function GET() {
  return Response.json(books);
}

export async function POST(req: Request) {
  const book = await req.json();
  books.push(book);

  return Response.json(books);
}


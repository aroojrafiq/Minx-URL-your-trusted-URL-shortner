import clientPromise from "@/public/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("minx-url");
  const collection = db.collection("urls");

  // If alias not provided, generate random one
  const shortCode =
    body.shortUrl ||
    Math.random().toString(36).substring(2, 8);

  // Check if alias already exists
  const existing = await collection.findOne({ shortUrl: shortCode });
  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "Short URL already exists"
    }, { status: 400 });
  }

  await collection.insertOne({
    longUrl: body.longUrl,
    shortUrl: shortCode
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL shortened successfully",
    shortUrl: shortCode
  });
}

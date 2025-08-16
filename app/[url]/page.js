import { redirect } from "next/navigation";
import clientPromise from "@/public/lib/mongodb";

export default async function Page({ params }) {
  if (!params.url) {
    redirect("/");
  }
  const client = await clientPromise;
  const db = client.db("minx-url");
  const collection = db.collection("urls");

  const doc = await collection.findOne({ shortUrl: params.url });

  if (doc) {
    redirect(doc.longUrl);
  } else {
    redirect("/");
  }
}

import clientPromise from "../../../lib/mongodb";

export default async function cabinHandler(req, res) {
  const client = await clientPromise;
  const db = client.db("sample_airbnb");
  switch (req.method) {
    case "POST":
      let bodyObject = { test: true };
      let myBookingRequest = await db
        .collection("cabins")
        .insertOne(bodyObject);
      res.json(myBookingRequest.ops[0]);
      break;
    case "GET":
      console.log("ran");
      const allBookings = await db
        .collection("listingsAndReviews")
        .find({})
        .limit(10)
        .toArray();
      res.json({ status: 200, data: allBookings });
      break;
  }
}

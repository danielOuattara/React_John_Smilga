import { readFile, writeFile } from "node:fs/promises";

//-------

export async function GET() {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return Response.json([...users]);
}

//-------

export async function POST(request: Request) {
  try {
    const { firstName, lastName, id } = await request.json();
    // validation here if necessary !
    const result = await readFile("users.json", { encoding: "utf8" });
    const users: User[] = result ? JSON.parse(result) : [];
    users.push({ firstName, lastName, id });
    await writeFile("users.json", JSON.stringify(users));
    return Response.json({ message: "user created successfully..." });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "failed to create user..." });
  }
}

//-----

export async function DELETE(request: Request) {
  const { id } = await request.json();
  console.log("id = ", id);
  if (!id) {
    return Response.json({ message: "taskId is required from the url" });
  }

  const result = await readFile("users.json", { encoding: "utf8" });
  const users: User[] = result ? JSON.parse(result) : [];
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  return new Response("deleted successfully");
}

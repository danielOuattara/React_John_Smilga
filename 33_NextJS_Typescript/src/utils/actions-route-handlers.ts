"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = `http://localhost:3000/api/users`;

//------------------------------------------

export async function fetchUsers(): Promise<User[]> {
  const result = await fetch(baseUrl);
  return await result.json();
}

//--------------------------------------------
type FormState = {
  message: string;
};
export async function createUser(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  // frontend validation here if necessary !

  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, id: Date.now().toString() }),
    });

    revalidatePath("/actions");

    return await res.json();
  } catch (error) {
    console.error(error);
    return { message: "failed to create user..." };
  }
}

//---

export async function deleteUser(formData: FormData) {
  const res = await fetch(baseUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: formData.get("id") }),
  });
  revalidatePath("/actions");
}

// export const deleteUser = async (formData: FormData) => {
//   const id = formData.get("id") as string;
//   const users = await fetchUsers();
//   const updatedUsers = users.filter((user) => user.id !== id);
//   await writeFile("users.json", JSON.stringify(updatedUsers));
//   revalidatePath("/actions");
// };

//---

// export const removeUser = async (id: string, formData: FormData) => {
//   // const name = formData.get("name") as string;
//   const users = await fetchUsers();
//   const updatedUsers = users.filter((user) => user.id !== id);
//   await writeFile("users.json", JSON.stringify(updatedUsers));
//   revalidatePath("/actions");
// };

//---

export async function removeUser(id: string, formData: FormData) {
  await fetch(baseUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  revalidatePath("/actions");
}

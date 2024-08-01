"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const createUser = async (formData: FormData) => {
//   const firstName = formData.get("firstName") as string;
//   const lastName = formData.get("lastName") as string;
//   const rawData = Object.fromEntries(formData);
//   console.log(rawData);
//   console.log({ firstName, lastName });
// };

//--------------------------------------------
type FormState = {
  message: string;
};

export const createUser = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const newUser: User = {
    firstName,
    lastName,
    id: Date.now().toString(),
  };

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    await saveUser(newUser);
    revalidatePath("/actions");
    return { message: "user created successfully..." };
  } catch (error) {
    console.error(error);
    return { message: "failed to create user..." };
  }
};

//------------------------------------------------------- OK!
// export const createUser = async (formData: FormData) => {
//   try {
//     const firstName = formData.get("firstName") as string;
//     const lastName = formData.get("lastName") as string;
//     const newUser: User = {
//       firstName,
//       lastName,
//       id: Date.now().toString(),
//     };
//     await saveUser(newUser);
//     revalidatePath("/actions");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     redirect("/");
//   }
// };

//---

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

//---

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

//---

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

//---

// export const removeUser = async (formData: FormData) => {
//   const id = formData.get("id") as string;
//   const users = await fetchUsers();
//   const userToRemoveIndex = users.findIndex((user) => user.id === id);
//   users.splice(userToRemoveIndex, 1);
//   await writeFile("users.json", JSON.stringify(users));
//   revalidatePath("/actions");
// };

export const removeUser = async (id: string, formData: FormData) => {
  // const name = formData.get("name") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

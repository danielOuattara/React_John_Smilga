"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { resolve } from "path";
// import { redirect } from "next/navigation";

// export const createUser = async (formData: FormData) => {
//   const firstName = formData.get("firstName") as string;
//   const lastName = formData.get("lastName") as string;
//   const rawData = Object.fromEntries(formData);
//   console.log(rawData);
//   console.log({ firstName, lastName });
// };

//--------------------------------------------
type FormState = string | undefined;

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

  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    // throw new Error("Error"); / for testing
    await saveUser(newUser);
    revalidatePath("/actions");
    // --> throw Error();
    return "user created successfully...";
  } catch (error) {
    console.error(error);
    return "failed to create user...";
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

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};

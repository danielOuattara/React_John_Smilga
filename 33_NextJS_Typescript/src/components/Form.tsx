"use client";

import { createUser } from "@/utils/actions";

export default function Form() {
  return (
    <form
      action={createUser}
      className="max-w-lg flex flex-col gap-y-4 shadow rounded p-8"
    >
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        type="text"
        name="firstName"
        required
        className="border shadow rounded py-2 px-3 text-gray-700"
        defaultValue="peter"
      />
      <input
        type="text"
        name="lastName"
        required
        className="border shadow rounded py-2 px-3 text-gray-700"
        defaultValue="smith"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize"
      >
        submit
      </button>
    </form>
  );
}

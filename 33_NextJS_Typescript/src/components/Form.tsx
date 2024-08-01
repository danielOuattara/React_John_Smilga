"use client";

// import { createUser } from "@/utils/actions";
import { createUser } from "@/utils/actions-route-handlers";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction] = useFormState(createUser, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state && state.message) {
      setShowMessage(true);
    }
    const timer = setTimeout(() => setShowMessage(false), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <form
      action={formAction}
      className="m-4 max-w-lg flex flex-col gap-y-4 shadow rounded p-8"
    >
      {showMessage && state.message && <p>{state.message}</p>}
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

      <SubmitButton />
    </form>
  );
}

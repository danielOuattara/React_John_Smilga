import { deleteUser, removeUser } from "@/utils/actions";

type TypeProps = {
  id: string;
};

export default function DeleteButton({ id }: TypeProps) {
  const removeUserWitId = removeUser.bind(null, id);
  return (
    <form action={removeUserWitId}>
      {/* <input type="hidden" name="name" value="delete" /> */}
      <button
        type="submit"
        className="bg-red-800 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

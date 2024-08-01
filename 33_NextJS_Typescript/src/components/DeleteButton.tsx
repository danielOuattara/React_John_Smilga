// import { deleteUser, removeUser } from "@/utils/actions";
import { deleteUser } from "@/utils/actions-route-handlers";

type TypeProps = {
  id: string;
};

// export default function DeleteButton({ id }: TypeProps) {
//   return (
//     <form action={deleteUser}>
//       <input type="hidden" name="id" value={id} />
//       <button
//         type="submit"
//         className="bg-red-800 text-white text-xs rounded p-2"
//       >
//         delete
//       </button>
//     </form>
//   );
// }

//------------------------------------------------------------

// import { removeUser } from "@/utils/actions";
import { removeUser } from "@/utils/actions-route-handlers";

export default function DeleteButton({ id }: TypeProps) {
  const removeUserWitId = removeUser.bind(null, id);
  return (
    <form action={removeUserWitId} method="DELETE">
      <input type="hidden" name="name" value="delete" />
      <button
        type="submit"
        className="bg-red-800 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

//------------------------------------

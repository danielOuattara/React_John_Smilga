// import { fetchUsers } from "@/utils/actions";
import { fetchUsers } from "@/utils/actions-route-handlers";
import DeleteButton from "./DeleteButton";

export default async function UserList() {
  const users = await fetchUsers();
  return (
    <div className="m-4 max-w-lg">
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4
              key={user.id}
              className="capitalize text-lg flex justify-between items-center mb-2 border p-3 rounded rounded-md"
            >
              {user.firstName} {user.lastName}
              <DeleteButton id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}

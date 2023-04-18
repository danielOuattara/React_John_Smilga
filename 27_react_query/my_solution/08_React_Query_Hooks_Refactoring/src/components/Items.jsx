import { SingleItem } from "./../components";
import { useFetchTasks } from "./../customHooks";

export default function Items() {
  const { data, failureReason, isLoading, error, isError } = useFetchTasks();

  if (failureReason) {
    return (
      <>
        <p style={{ marginTop: "2rem" }}>{failureReason.message}</p>
        <p style={{ marginTop: "1rem" }}>{failureReason.code}</p>
      </>
    );
  }

  if (isLoading) {
    return <p style={{ marginTop: "2rem" }}>Loading...</p>;
  }

  if (isError) {
    return (
      <>
        <p style={{ marginTop: "2rem" }}>{error.message}</p>
        <p style={{ marginTop: "1rem" }}>{error.response.data}</p>
      </>
    );
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
}

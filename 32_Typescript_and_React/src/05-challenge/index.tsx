type TypeBasicProfileCardProps = {
  type: "basic";
  name: string;
  email?: string;
};
type TypeAdvancedProfileCardProps = {
  type: "advanced";
  name: string;
  email: string;
};

type TypeProfileCardProps =
  | TypeBasicProfileCardProps
  | TypeAdvancedProfileCardProps;

function Component({ type, name, email }: TypeProfileCardProps) {
  if (type === "basic")
    return (
      <article className="alert alert-success">
        <h2>user : {name}</h2>
      </article>
    );

  return (
    <article className="alert alert-danger">
      <h2>user : {name}</h2>
      <h2>email : {email}</h2>
    </article>
  );
}
export default Component;

/* Below: how to use in App.tsx */

/* 
import Component from "./05-challenge";

export default function App() {
  return (
    <main>
      <Component type="basic" name="Susan" />
      <Component type="advanced" name="Anna" email="anna@email.com" />
    </main>
  );
}

*/

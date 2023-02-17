import avatar from "../../../assets/default-avatar.svg";

export default function Person({ name, nickName = "shakeAndBake", images }) {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;

  return (
    <div>
      <img
        // src={images?.[0]?.small?.url ?? avatar}
        src={images?.[0].small?.url ?? avatar}
        alt={name}
        style={{ width: "50px" }}
      />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}

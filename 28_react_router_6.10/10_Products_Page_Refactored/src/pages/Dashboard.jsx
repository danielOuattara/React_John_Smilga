const Dashboard = (props) => {
  return (
    <section className="section">
      <h4>Hello {props.user?.name}</h4>
    </section>
  );
};
export default Dashboard;

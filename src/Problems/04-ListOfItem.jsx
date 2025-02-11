// list of items

const ListOfItem = ({}) => {
  const users = [
    {
      username: "john_doe",
      id: 1,
      emailId: "john@example.com",
      job: "Software Engineer",
    },
    {
      username: "jane_smith",
      id: 2,
      emailId: "jane@example.com",
      job: "Product Manager",
    },
    {
      username: "mike_wilson",
      id: 3,
      emailId: "mike@example.com",
      job: "Data Analyst",
    },
    {
      username: "sarah_lee",
      id: 4,
      emailId: "sarah@example.com",
      job: "UX Designer",
    },
    {
      username: "david_kim",
      id: 5,
      emailId: "david@example.com",
      job: "DevOps Engineer",
    },
  ];

  return (
    <>
      {" "}
      04-ListOfItem
      <h1>List of User with info...</h1>
      <div>
        {users.map((user) => {
          return (
            <div className="flex gap-6 text-xl" key={user.id}>
              <h2>UserName: {user.username} </h2>
              <h2>emailId: {user.emailId} </h2>
              <h2>Job: {user.job} </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListOfItem;

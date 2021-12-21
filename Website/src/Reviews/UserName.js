import useFetch from '../hooks/UseFetch';

const UserName = ({ id }) => {
  const {
    data: user,
    isPending,
    error,
  } = useFetch('http://localhost:8000/users?userId=' + id);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        <div className="UserName">
          {console.log(user)}
          <p>{user[0].name}</p>
        </div>
      )}
    </>
  );
};

export default UserName;

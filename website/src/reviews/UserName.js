import useFetch from '../hooks/UseFetch';

const UserName = ({ id }) => {
  const {
    data: user,
    isPending,
    error,
  } = useFetch('http://localhost:8000/users?userId=' + id);

  return (
    <>
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div>{error}</div>}
      {user && (
        
        <div className="UserName">
          <p>1</p>
        </div>
      )}
    </>
  );
};

export default UserName;

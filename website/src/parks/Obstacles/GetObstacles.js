import useFetch from '../../hooks/UseFetch'

const GetObstacles = (id) => {

    const {
        data: obstacle,
        isPending,
        error,
      } = useFetch('https://skate-buddy.josholaus.com/api/Obstacles/' + id.id);
  
    return (

      <div className="obstacle">
            {isPending && 
                <div className='loading'>
                    <h1>
                        LOADING...
                    </h1>
                </div>}
            {error &&
                <div className='error'>
                    <h1>Etwas ist schiefgelaufen</h1>
                </div>}
            {obstacle &&
            <div className='single-obstacle'>
                <p>{obstacle.description}</p>
            </div>
            }
      </div>
    );
  };


export default GetObstacles;
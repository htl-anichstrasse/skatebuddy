import './ObstacleList.css'

const ObstacleList = ({Obstacles}) => {

    return (
        <div className="obstacles">
           {Obstacles.map(obstaclesID=> (
              <div className="obstacle">
              <div className='single-obstacle'>
                  <div className="dropdown-obstacles">
                      <span className='obstacle-pic'><img src={`https://skate-buddy.josholaus.com/api/obstaclepictures/${obstaclesID.ObstacleID}`} alt="pic" className='obstacle-pic'></img></span>
                          <div className="dropdown-content-obstacles">
                              <h5 className="description">{obstaclesID.Description}</h5>
                              <p className='Oname'>Schwierigkeit: {obstaclesID.difficulty}</p>
                          </div>
                  </div>
              </div>
        </div>
           ))} 
        </div>
      )

}

export default ObstacleList;
import './Obstacles.css'
import GetObstacles from './GetObstacles';

const ObstacleList = ({ObstaclesIds}) => {

    return (
        <div className="obstacles">
           {ObstaclesIds.map(ObstaclesId=> (
            <div>
              <GetObstacles id={ObstaclesId.ObstacleID}></GetObstacles>
            </div>
           ))} 
        </div>
      )

}

export default ObstacleList;
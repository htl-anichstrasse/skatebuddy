import './ObstacleList.css'
import GetObstacles from './GetObstacles';

const ObstacleList = ({ObstaclesIds}) => {

    return (
        <div className="obstacles">
           {ObstaclesIds.map(ObstaclesId=> (
              <GetObstacles id={ObstaclesId.ObstacleID}></GetObstacles>
           ))} 
        </div>
      )

}

export default ObstacleList;
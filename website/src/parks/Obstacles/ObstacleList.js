import './ObstacleList.css'
import GetObstacles from './GetObstacles';

const ObstacleList = ({ObstaclesIds}) => {

    return (
        <div className="obstacles">
           {ObstaclesIds.map(obstaclesId=> (
              <GetObstacles id={obstaclesId.obstacleid}></GetObstacles>
           ))} 
        </div>
      )

}

export default ObstacleList;
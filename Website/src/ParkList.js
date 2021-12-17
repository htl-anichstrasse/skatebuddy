import {Link} from 'react-router-dom';

const ParkList = ({skateparks}) =>{

    return (
        <div className="park-list">
          {skateparks.map(skatepark => (
            <div className="park-preview" key={skatepark.skateparkId} >
                    <Link to={`/skateparks/${skatepark.skateparkId}`}>
                    <h2>{ skatepark.name }</h2>
                    </Link>
            </div>
        ))}
    </div>
    )
}

export default ParkList;
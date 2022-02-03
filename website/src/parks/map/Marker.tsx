import './Marker.css';
import { Link } from 'react-router-dom';

//https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4

const Marker = (props: any) => {
    const { color, name, link} = props;

    return (
      <div>
        {!link &&
        <div>
         <div
         className="pin bounce"
         style={{ backgroundColor: color, cursor: 'pointer' }}
         title={name}
       />
        <div className="pulse" />
        </div>
        }
        {link &&
               <div>
                  <Link to={`/skateparks/${link}`} className="linktoskate">
                 <div
               className="pin bounce"
               style={{ backgroundColor: color, cursor: 'pointer' }}
               title={name}
             />
              <div className="pulse" />
                 </Link>
              </div>
        }
      </div>
    );
  };

  export default Marker;
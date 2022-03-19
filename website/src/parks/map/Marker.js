import './Marker.css';
import { Link } from 'react-router-dom';

const Marker = (props) => {
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
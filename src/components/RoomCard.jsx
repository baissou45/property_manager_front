import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomCard = ({ room })  => {
    const imgStyle = {
        width: '85%',
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "10px",
    }

    return (
        <div className="row mb-3 p-3 m-5 border shadow">
            <div className="col-4">
                <Link to={`/rooms/${room.id}`}>
                     <img src={ room.image } style={ imgStyle } />
                </Link>
            </div>
            <div className="col-8">
                <div className="d-flex justify-content-between align-items-center">
                    <h2> { room.hotel.name } <span className='text-muted font-italic'> ( room : { room.number }) </span> </h2>

                    <h4 style={{ fontSize: "2em" }}> Price : <strong className='font-italic text-success'> { room.price } </strong> € </h4>

                    <div className="bg-primary p-2 text-white rounded">
                        { room.hotel.rate } <i className="fa fa-star text-warning" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <a className='text-primary' href={`https://www.google.fr/maps/@${room.hotel.lat},${room.hotel.long},15z?entry=ttu`} target='_blanc'>
                        <div className="bg-primary py-2 px-3 rounded mr-3 my-3">
                            <i className="fa fa-map-marker fa-2x text-white" aria-hidden="true"></i>
                        </div>
                    </a>
                    <a className='text-primary' href={`https://www.google.fr/maps/@${room.hotel.lat},${room.hotel.long},15z?entry=ttu`} target='_blanc'>
                         { room.hotel.country } <br />
                         { room.hotel.address }, { room.hotel.city },
                    </a>
                </div>

                <p className='text-muted font-italic'> { room.description } </p>

                <div className="d-flex justify-content-between">
                    <p className='font-italic font-500 p-0'> <strong> { room.type } </strong> </p>
                    <Link to={`/rooms/${room.id}`} className="btn btn-primary pull-right w-25">See more</Link>
                </div>

            </div>
        </div>
    )
}

RoomCard.propTypes = {
    room: PropTypes.object.isRequired,
};

export default RoomCard;

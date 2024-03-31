import { useLoaderData } from 'react-router-dom'
import Card from '../../components/Card';

export default function RoomShow() {
  const room = useLoaderData();
  console.log(room);

  return (
    <div>
        <div style={{
            position: 'relative',
            background: `url("${room.image}") no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40vh",
            width: "100%",
            border: "1px solid black",
         }}>
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, background: "rgba(0, 0, 0, 0.2)" }}></div>
            <h3 className='text-white' style={{ position: "absolute", bottom: 0, right: 20 }}> { room.hotel.name } </h3>
        </div>

        <div className="card text-left mt-4 mx-5">
          <div className="card-body row">

            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center">
                  <a className='text-primary' href={`https://www.google.fr/maps/@${room.hotel.lat},${room.hotel.long},15z?entry=ttu`} target='_blanc'>
                      <div className="bg-primary py-2 px-3 rounded mr-3 my-3">
                          <i className="fa fa-map-marker fa-2x text-white" aria-hidden="true"></i>
                      </div>
                  </a>
                  <a className='text-primary' href={`https://www.google.fr/maps/@${room.hotel.lat},${room.hotel.long},15z?entry=ttu`} target='_blanc'>
                        <strong>{ room.hotel.country }</strong> <br />
                        { room.hotel.address }, { room.hotel.city } <br />
                        { room.hotel.zip }
                  </a>
              </div>
            </div>

            <div className='col-12 col-md-6 d-flex flex-column align-items-end'>
              <div className="bg-primary p-2 text-white rounded" style={{ width: "50px" }}>
                  <span>{ room.hotel.rate } <i className="fa fa-star text-warning" aria-hidden="true"></i></span>
              </div>
              <div className="">
              <h4> Price : <strong className='font-italic text-success'> { room.price } </strong> € </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-left mt-3 mx-5">
          <div className="card-body">
            <p className='mt-3'>
              { room.description }
            </p>

            <div className="jumbotron py-3 mt-5">
              <i> { room.hotel.description } </i>

              <div className="d-flex justify-content-between mt-3">
                  <i><i className="fa fa-phone" aria-hidden="true"></i> { room.hotel.tel }</i>
                  <i><i className="fa fa-envelope" aria-hidden="true"></i> { room.hotel.email }</i>
              </div>

            </div>
          </div>
        </div>

    </div>
  )
}
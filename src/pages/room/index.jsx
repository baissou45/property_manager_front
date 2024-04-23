import { useLoaderData } from 'react-router-dom'
import { Room } from '../../models/room';
import RoomCard from '../../components/RoomCard';
import { useState } from 'react';


export default function RoomIndex() {
  const data = useLoaderData();
  const [rooms, setRooms] = useState(data);

  console.log(rooms);

  const submitFilter = async (e) => {
    e.preventDefault();

    const type = document.getElementById('type').selectedOptions[0].value;
    const nbrRoom = document.getElementById('nbrRoom').value;
    const price = document.getElementById('price').value;

    const data = await Room.get_filtered(`type=${type}&nbrRoom=${nbrRoom}&price=${price}`);
    setRooms(data);
  }

  return (
      <div className="position-relative">
        {/* <div className="schroll-top card bg-primary shadow" style={ schroll_top_style } onClick={scholl_to_top}> */}
        {/* <div className="schroll-top card bg-primary shadow">
          <i className="fa fa-arrow-up p-4 text-dark"></i>
        </div> */}
        <form method="get" onSubmit={submitFilter}>
          <div className="card shadow mx-5 position-sticky">
            <div className="card-header">
              Filter
            </div>
            <div className="card-body row">

                <div className="form-group col-12 col-md-4">
                  <label htmlFor="type">Room Type</label>
                  <select className="form-control" name="type" id='type'>
                    <option value="">Choose the type of room</option>
                    <option value="Single King bed">Single King bed </option>
                    <option value="Double Queens bed">Double Queens bed </option>
                    <option value="Queen bed">Queen bed </option>
                    <option value="King bed">King bed </option>
                    <option value="Twin beds">Twin beds </option>
                    <option value="Sofa bed">Sofa bed </option>
                    <option value="Bunk bed">Bunk bed </option>
                    <option value="Single King Handicap">Single King Handicap </option>
                    <option value="Double Queen Handicap">Double Queen Handicap </option>
                    <option value="Single King Suite">Single King Suite </option>
                    <option value="Double Queen Suite">Double Queen Suite </option>
                    <option value="Executive">Executive </option>
                  </select>
                </div>

                <div className="form-group col-12 col-md-4">
                  <label htmlFor="nbrRoom">Number of room</label>
                  <input type="number" name="nbrRoom" id="nbrRoom" className="form-control" />
                </div>

                <div className="form-group col-12 col-md-4">
                  <label htmlFor="price">Price</label>
                  <input type="number" name="price" id="price" className="form-control" />
                </div>

            </div>
            <div className="card-footer">
              <input type="submit" className='btn btn-primary pull-right' value="Filter" />
              <input type="Reset" className='btn btn-danger pull-right mx-3' value="Reset" />
            </div>
          </div>
        </form>
        <div>
          {
            rooms.length > 0
              ? rooms.map((room) => {
                  console.log(room);
                  return (
                    <div key={ room.id }>
                      <RoomCard room={ room } />
                    </div>
                  )
                })
              : <div className="card text-left mx-5 mt-5">
                  <div className="card-body">
                    <h5 className='text-center my-3'>No room found</h5>
                  </div>
              </div>
          }
        </div>
      </div>
  )
}
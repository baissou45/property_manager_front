import { Room } from "../../models/room";
import {useNavigate} from 'react-router-dom';

export default function RoomCreate() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      Room.create({
        type: document.getElementById('type').selectedOptions[0].value,
        number: document.getElementById('number').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        image: document.getElementById('image').files[0]
      }).then((res) => {
          if (res.status == 200) {
            toastr.success(res.data.message);
            navigate('/rooms');
          }
      }).catch((err) => {
        // toastr.error(res.data.message);
      });
    }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      <div className="card text-left shadow">
        <div className="card-header">
          <h5 className="card-title">Create a new room</h5>
        </div>
        <div className="card-body row">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="type">Room Type</label>
              <select className="form-control" name="type" id='type'>
                <option value="Single King bed">Choose the type of room</option>
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

            <div className="form-group col-md-6">
              <label htmlFor="number">Number of room</label>
              <input type="text" name="" id="number" className="form-control"  />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control" id="price" placeholder="Price" required />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="image">Image</label>
              <input type="file" className="form-control" id="image" placeholder="Image" />
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="form-control" rows="3"></textarea>
            </div>
        </div>
        <div className="card-footer">
          <input type="submit" className='btn btn-primary pull-right' value="Create" />
          <input type="Reset" className='btn btn-danger pull-right mx-3' value="Reset" />
        </div>
      </div>
    </form>
  )
}

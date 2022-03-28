import { Link } from 'react-router-dom'

const AddRestaurant = (props) => {
  return (  
    <>
      <h1>add a restaurant!</h1>
      <form
      autoComplete="off"
      // onSubmit={handleSubmit}
      className='container'
    >
      <div className="form-group mb-1">
				<label htmlFor="photo-upload" className="form-label" id='inputGroup-sizing-default'>
				</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						// onChange={handleChangePhoto}
					/>
				</div>
      <div className='input-group mb-1'>
        <label htmlFor="name" className='input-group-text' id='inputGroup-sizing-default' >
          <i className='material-icons'>create</i>
        </label>
        <input
          className="form-control"
          aria-label="Sizing example input"
          type="text"
          autoComplete="off"
          // id=""
          // value={name}
          name="name"
          // onChange={handleChange}
          placeholder='Name of Restaurant'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="address" className='input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>place</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          // id=""
          // value={email}
          name="address"
          // onChange={handleChange}
          placeholder='Address'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="phoneNumber" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>phone</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="number"
          autoComplete="off"
          // id=""
          // value={password}
          name="phoneNumber"
          // onChange={handleChange}
          placeholder='###-###-####'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="price" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>attach_money</i>
        </label>
        <select
          className='form-control'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          // id=""
          // value={passwordConf}
          name="price"
          // onChange={handleChange}
          placeholder='Price Rating in $'
        >
          <option value="">-- Select A Price -- </option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="rating" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>star_half</i>
        </label>
        <select
          className='form-control'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          // id=""
          // value={passwordConf}
          name="rating"
          // onChange={handleChange}
          placeholder='Restaurant Rating'
        >
          <option value=""> -- Select A Rating -- </option>
          <option value="1">☆</option>
          <option value="2">☆☆</option>
          <option value="3">☆☆☆</option>
          <option value="4">☆☆☆☆</option>
          <option value="5">☆☆☆☆☆</option>
        </select>
      </div>
      <div id='sign-up-buttons'>
        <button 
          // disabled={isFormInvalid()} 
          className='btn btn-secondary btn-fluid' 
          id='sign-up-btn' >
          Add Restaurant
        </button>
        <Link to="/restaurants">
          <button className='btn btn-danger btn-fluid' >Cancel</button>
        </Link>
      </div>
    </form>
    </>
  );
}
 
export default AddRestaurant;
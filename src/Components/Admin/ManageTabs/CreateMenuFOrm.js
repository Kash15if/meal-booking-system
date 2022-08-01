const CreateMenu = () => {
  return (
    <div className="col-md-4 col-sm-12 container p-5 bg-light border rounded-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={values.item}
            name="item"
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            className="form-control"
            value={values.Qty}
            onChange={handleInput}
            name="Qty"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateMenu;

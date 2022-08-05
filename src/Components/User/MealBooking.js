//book next 7 days meals
//using cart system +1 - 1 and num with menu

import "./MealBooking.css";

const MealBooking = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h4 style={{ textAlign: "center", margin: "2rem 0 4rem 0" }}>
        My Next 7 days booking
      </h4>
      <div className="container" style={{ overflowX: "scroll" }}>
        <table style={{ width: "70%", margin: "auto" }}>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Menu</th>
            <th>ON/OFF</th>
            <th>Additional Meals</th>
          </tr>

          <tr>
            <td>2022-01-01</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="5"
              />
            </td>
          </tr>

          <tr>
            <td>2022-01-02</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>

          <tr>
            <td>2022-01-03</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>

          <tr>
            <td>2022-01-04</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>
          <tr>
            <td>2022-01-05</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>
          <tr>
            <td>2022-01-06</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>
          <tr>
            <td>2022-01-07</td>
            <td>Lunch</td>
            <td>Fish</td>
            <td>
              <div className="switchBtn">
                <label className="switch">
                  <input type="checkbox" checked />
                  <span className="slider round"></span>
                </label>
              </div>
            </td>
            <td>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              />
            </td>
          </tr>
        </table>
        <div className="saveBtn">
          <button className="btn btn-success">Save Data</button>
        </div>
      </div>
    </div>
  );
};

export default MealBooking;

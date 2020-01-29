import React from 'react';

import coffeeShopData from '../../../helpers/data/coffeeShopData';

import './ShopForm.scss';

class ShopForm extends React.Component {
  state = {
    shopName: '',
    shopAddress: '',
    shopCity: '',
    shopState: '',
    shopZip: '',
    isValid: true,
  }

  changeName = (e) => {
    this.setState({ shopName: e.target.value });
  }

  changeAddress = (e) => {
    this.setState({ shopAddress: e.target.value });
  }

  changeCity = (e) => {
    this.setState({ shopCity: e.target.value });
  }

  changeState = (e) => {
    this.setState({ shopState: e.target.value });
  }

  changeZip = (e) => {
    this.setState({ shopZip: e.target.value });
  }

  setNewShop = (e) => {
    e.preventDefault();
    const {
      shopName,
      shopAddress,
      shopCity,
      shopState,
      shopZip,
    } = this.state;
    const newShopObj = {
      name: shopName,
      address: shopAddress,
      city: shopCity,
      state: shopState,
      zip: shopZip,
    };
    this.checkCurrentShopList(newShopObj);
  }

  saveNewShop = (newShopObj) => {
    coffeeShopData.addNewShop(newShopObj)
      .then(() => this.props.history.push('/shops'))
      .catch((err) => console.error('err from create shop', err));
  }

  checkCurrentShopList = (shopToAdd) => {
    const { isValid } = this.state;
    coffeeShopData.getCoffeeShops(isValid)
      .then((shops) => {
        const checkData = shops.some((shop) => shop.address === shopToAdd.address);
        if (checkData === true) {
          this.setState({ isValid: false });
        } else {
          this.saveNewShop(shopToAdd);
          this.setState({ isValid: true });
        }
      })
      .catch((error) => console.error(error));
  }

  render() {
    const {
      shopName,
      shopAddress,
      shopCity,
      shopState,
      shopZip,
      isValid,
    } = this.state;
    return (
      <div className="ShopForm">
        <h1>Add Shop Form</h1>
        <div className="container justify-content-center">
        <form className="m-1" onSubmit={this.setNewShop}>
            <div className="form-group">
              <label for="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Enter Coffee Shop Name"
                value={shopName}
                onChange={this.changeName}
                required
              />
            </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={shopAddress}
              onChange={this.changeAddress}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Gotham"
                value={shopCity}
                onChange={this.changeCity}
                required
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <input
                type="text"
                className="form-control"
                id="inputState"
                placeholder="New York"
                value={shopState}
                onChange={this.changeState}
                required
              />
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="number"
                className="form-control"
                id="inputZip"
                placeholder="55555"
                value={shopZip}
                onChange={this.changeZip}
                required
              />
            </div>
          </div>
          { (!isValid) && <h6>This shop already exists!  Please check address and try again.</h6>}
          <button type="submit" className="btn btn-primary">Save New Shop</button>
        </form>
      </div>
      </div>
    );
  }
}

export default ShopForm;

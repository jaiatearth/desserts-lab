import React from "react";
import Header from "../Header";
import HomeLink from "../HomeLink";
import label from "../locale/label.config";
import "./style.scss";

class AddItem extends React.Component {
  // Hide toast message
  disableToast = () => {
    document.getElementById("add-item-form").reset();
    document.getElementById("toast").style.visibility = "visible";

    setTimeout(() => {
      const toastElement = document.getElementById("toast");

      if (toastElement) toastElement.style.visibility = "hidden";
    }, 5000);
  };

  // Submit new dessert
  submitItem = (event) => {
    event.preventDefault();
    let items = [];
    let dessertObject = {};
    let itemsStored = JSON.parse(localStorage.getItem("items"));
    const form = document.getElementById("add-item-form");
    const name = form.elements["name"].value;
    const price = parseInt(form.elements["price"].value);

    if (!itemsStored) {
      items = [];
    }
    items = itemsStored;

    let keys = ["name", "price", "id"];
    let values = [name, price, "#" + name.split(" ")[0]];
    // Store the key value pair in to items store..
    for (let i = 0; i < keys.length && i < values.length; i++) {
      dessertObject[keys[i]] = values[i];
    }
    items = items || [];
    items.push(dessertObject);
    localStorage.setItem("items", JSON.stringify(items));

    this.disableToast();
  };

  render() {
    return (
      <div className="additem-container">
        <Header />
        <HomeLink />
        <div className="content">
          <div className="widget">
            <div className="widget__title">{label.add_new_title}</div>
            <div className="widget__content">
              <form onSubmit={this.submitItem} id="add-item-form">
                <div className="widget__content-label">
                  <label>{label.dessert_name}</label>
                </div>
                <div className="widget__content-value">
                  <input
                    type="text"
                    name="name"
                    placeholder="enter dessert name"
                    required
                    pattern="[A-Za-z\s]+"
                  />
                </div>
                <div className="widget__content-label">
                  <label>{label.dessert_price}</label>
                </div>
                <div className="widget__content-value">
                  <input
                    type="number"
                    name="price"
                    placeholder="enter dessert price"
                    required
                  />
                </div>
                <input className="submit" type="submit" value="Submit" />
              </form>
              <span id="toast">{label.success_message}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;

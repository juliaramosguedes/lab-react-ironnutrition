import React, { Component } from 'react';
import Button from '../Button/Button';

class FormAddFood extends Component {
  state = {
    newFood: {
      name: '',
      image: '',
      calories: '',
    },
    showForm: false,
  };

  openForm = () => {
    this.setState({ showForm: true });
  }

  closeForm = () => {
    this.setState({ showForm: false });
  }

   addFood = async (food) => {
    const { addFoodFunction } = this.props;
    const { newFood } = this.state;
    await addFoodFunction(newFood);
    this.closeForm();
  }

  handleChange = (e) => {
    const { newFood } = this.state;
    const { name, value } = e.target;

    newFood[name] = value;

    this.setState({newFood});

  };

  render() {
    const { newFood, showForm } = this.state;
    const { name, image, calories } = newFood;

    return(
      <div>
        <Button type="button" onclick={this.openForm}>Add new food</Button>
        {showForm && (
          <div>
            <input type="text" name="name" value={name} placeholder="food" onChange={(e) => this.handleChange(e)} />
            <input type="text" name="image" value={image} placeholder="image url" onChange={(e) => this.handleChange(e)} />
            <input type="text" name="calories" value={calories} placeholder="calories" onChange={(e) => this.handleChange(e)} />
            <Button type="submit" onclick={this.addFood}>Create</Button>
          </div>
        )}
      </div>
    )
  }
}

export default FormAddFood;
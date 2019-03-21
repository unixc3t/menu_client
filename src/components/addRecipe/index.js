import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actionCreators from "../../actions/actionCreator";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      description: '',
      error: false,
      error_message: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let image_file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: image_file,
        imagePreviewUrl: reader.result
      })
    };
    reader.readAsDataURL(image_file);
  }

  handleSubmit(e) {
    const name = this.state.name.trim();
    this.props.addRecipe(
      name,
      this.state.description,
      this.state.ingredients.split('\n'),
      this.state.imagePreviewUrl
    );
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Recipe Name</label>
          <Form.Input required={true} value={this.state.name} name='name' placeholder='Recipe Name lenght < 6'
                      onChange={(e) => this.setState({name: e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Recipe Image</label>
          <Form.Input type='file' onChange={this.handleImageChange} name='recipe_image'/>
        </Form.Field>
        <Form.Field>
          <label>Ingredients (one per line)</label>
          <Form.TextArea value={this.state.ingredients} name='ingredients' placeholder='Ingredients...'
                         onChange={(e) => this.setState({ingredients: e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea value={this.state.description} name='description' placeholder='Description'
                         onChange={(e) => this.setState({description: e.target.value})}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(null,mapDispatchToProps)(AddRecipe);
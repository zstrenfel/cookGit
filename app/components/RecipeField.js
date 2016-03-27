import React, { Component, PropTypes } from 'react';


class RecipeField extends Component {
  constructor(props) {
    super(props);
  }

  onFieldChange(e) {
    console.log(e.target.value);
    this.context.change(e.target.value, e.target.dataset.index );
  }

  render() {
    return (
      <textarea onChange={this.onFieldChange.bind(this)} data-index={this.props['data-index']} value={this.props.text} />
    )
  }
}
RecipeField.contextTypes = {change: PropTypes.func};
export default RecipeField;
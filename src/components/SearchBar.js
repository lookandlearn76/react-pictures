import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};
  // setting the value of the input to the state.term means that we move to a controlled component.
  //with a controlled component (which we really want as much as possible) we store as much info as poss in the state
// and not the DOM.

//remember below that arrow functions bind 'this' and help avoid errors
  onFormSubmit= (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onInputChange(event){
    console.log(event.target.value);
    // also abbreviated to e-target.value
  }
  onInputClick(){
    console.log('Input was clicked');
  }
  // note that the function below within render is not onInputChange() with the ()
  // this is because if we put the () it will call the function as soon as the component is loaded.
  // some will call this handleInputClick instead of on
  // remember - a div can be clicked but a div can't be clicked - so each e handler is limited by the element
  // remember also the onChange and onClick are names that are fixed but the onInputClick name is changeable.
  // an alternative/condenced syntax would also be onChange={(event)=>console.log(event.target.value)} where the
  // function is defined within the same line as the attribute.
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onClick={this.onInputClick}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

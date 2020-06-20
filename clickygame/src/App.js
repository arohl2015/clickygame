//setting all the react dependencies we're using and also importing component pages
import React, {Component} from 'react';
import Wrapper from "./components/Wrapper/index";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import GameCard from "./components/GameCard/index";
import characters from "./characters.json";

class App extends Component {
    // Setting this.state.characters to the characters json array
    // Also setting the state for the rest of our data that we're tracking
    state = {
      characters,
      currentScore: 0,
      topScore: 0,
      clickedCharacter: []  
    };
 // The shuffle methods allows me to display these cards in random order after they are clicked
 shufflePictures = (pictures) => {
    for (let i = pictures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }
    return pictures;
  };
  // Creating on click handler event to call the shuffle method every time I click on a picture
  // A picture that has already been clicked will reset the game, one that hasn't will increment the score by 1
  // The code will check the score against the top score and also keep track of which picture has been clicked
  handleClick = id => {
    this.shufflePictures(characters);
    let clicked = id.target.id;
    if (this.state.clickedCharacter.includes(clicked)) {
      this.setState({
        clickedPicture: [],
        currentScore: 0,
        characters: characters
      });
      alert("You already clicked on this person, let's try again");
    } else {
      if (this.state.currentScore >= this.state.topScore) {
        this.setState({
          characters: characters,
          currentScore: this.state.currentScore + 1,
          topScore: this.state.currentScore + 1,
          clickedPicture: this.state.clickedPicture.concat(clicked)
        });
      } else {
        this.setState({
        characters: characters,
        currentScore: this.state.currentScore + 1,
        clickedPicture: this.state.clickedPicture.concat(clicked)
        });
      };
    };
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
            {this.state.characters.map(character => (
                <GameCard
                  key={character.id}
                  handleClick={this.handleClick}
                  id={character.id}
                  image={character.image}
                  />
            ))}
      </Wrapper>
    );
  }
}

export default App;

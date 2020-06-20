//setting all the react dependencies we're using and also importing component pages
import React, {Component} from 'react';
import characters from "./characters.json";
import GameCard from "./components/GameCard/index";
import Wrapper from "./components/Wrapper/index";
import Navbar from "./components/Navbar/index";

// The shuffle methods allows me to display these cards in random order after they are clicked
shufflePictures = (pictures) => {
    for (var i = pictures.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = pictures[i];
      pictures[i] = pictures[j];
      pictures[j] = temp;
    }
    return pictures;
  }

class App extends Component {
    // Setting this.state.characters to the characters json array
    // Also setting the state for the rest of our data that we're tracking
    state = {
      characters,
      clicked: [],  
      currentScore: 0,
      topScore: 1,
      highestScore: 0
    };
 
  // Creating on click handler event to call the shuffle method every time I click on a picture
  // A picture that has already been clicked will reset the game, one that hasn't will increment the score by 1
  // The code will check the score against the top score and also keep track of which picture has been clicked
  handleClick = id => {
    if (this.state.clicked.includes(id)) {
        this.setState({
          clicked: [],
          currentScore: 0,
          topScore: 1
        });
      } else {
        this.state.clicked.push(id);
  
        this.setState({
          currentScore: this.state.currentScore + 1,
          topScore: this.state.topScore + 1
        });
        if (
          this.state.topScore >= 0 &&
          this.state.topScore > this.state.highestScore
        ) {
          this.setState({
            highestScore: this.state.topScore
          });
        }
      }
    };

    render() {
        const shuffledCharacter = shufflePictures(this.state.characters);
        return (
          <div>
            <Navbar
              currentScore={this.state.currentScore}
              highestScore={this.state.highestScore}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <h2>If you click on a 30 Rock Character more than once...game over!</h2>
                </div>
                <div className="col-md-6">
                  <Wrapper>
                    {shuffledCharacter.map(characters => (
                      <GameCard
                        key={characters.id}
                        id={characters.id}
                        image={characters.image}
                        name={characters.name}
                        onImgClick={() => this.handleClick(characters.id)}
                      />
                    ))}
                  </Wrapper>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        );
      }
    }
  
export default App;

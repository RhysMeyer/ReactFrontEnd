import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./Popup.css";
import "./Navbar.css";
import "./index.css";

// class ActorList extends React.Component {
//   //   handleFilmClick(film) {}
  
//     render() {
//       const actor = this.props.actor;
  
//       return (
//         <ul>
//           <li>{actor.first_name + " " + " " + actor.last_name}</li>
//         </ul>
//       );
//     }
//   }

class DeleteFilm extends React.Component {

  handleClick = () => {

    axios
      .delete(
        `http://localhost:8080/index/film/delete?id=${this.props.film.film_id}`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
      console.log("Deleted film with id " + this.props.film.film_id)
      window.location.reload(false);

  };

  render() {

    const trigger = this.props.trigger;
    const film = this.props.film;

    return(

      <button class="button" onClick={this.handleClick}>Delete Film</button>
    )

  }
}

class FilmPopupInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ trigger: false });
    console.log(this.state.trigger);
  };

  showActors(film) {
    var string = "";
    film.actor.forEach((actor) => {
        string = string +"\n"+ actor.first_name + " " + actor.last_name + ","
    })

    return string.substr(0, string.length - 1);;
    
  }


  render() {

    const trigger = this.props.trigger;
    const film = this.props.film;

    return trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={this.props.handleClicked}>
            <b>X</b>
          </button>
          <div>
            <h1>Film Info!</h1>
          </div>
          <div class = "right quater">
            <h3>Film ID</h3>
            <p>{film.film_id}</p>
          </div>
          <div class = "left three-quater" >
            <h3>Title</h3>
            <p>{film.title}</p>
          </div>
          <div>
          <h3>Description</h3>
          <p>{film.description}</p>
          </div>
          <div class = "right half">
          <h3>language id</h3>
          <p>{film.language_id}</p>
          </div>
          <div class = "left half">
          <h3>Rental Duration</h3>
          <p>{film.rental_duration}</p>
          </div>
          <div class = "right half">
          <h3>Length</h3>
          <p>{film.length}</p>
          </div>
          <div class = "left half">
          <h3>Replacement Cost</h3>
          <p>{film.replacement_cost}</p>
          </div>
          <div class = "right half">
          <h3>Rating</h3>
          <p>{film.rating}</p>
          </div>
          <div class = "left half">
          <h3>Special Features</h3>
          <p>{film.special_features}</p>
          </div>
          <div>
              <h3>Actors</h3>
              {this.showActors(film)}
              
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

class ActorPopupInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ trigger: false });
    console.log(this.state.trigger);
  };

  showFilms(actor) {
    var string = "";
    actor.films.forEach((actor) => {
        string = string +"\n"+ actor.title + ","
    })

    return string.substr(0, string.length - 1);;
    
  }

  render() {

    const trigger = this.props.trigger;
    const actor = this.props.actor;

    return trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={this.props.handleClicked}>
            <b>X</b>
          </button>
          <div>
          <h3>{actor.first_name} {actor.last_name} has stared in the following:</h3>
          </div>
          <div>
              {this.showFilms(actor)}
              
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

class AddFilmPopupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      title: '',
      description: '',
      releaseYear: '',
      rentalDuration: '',
      languageID: '',
      replacementCost: '',
      length: '',
      specialFeatures: '',
      rating: '',


    };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick = () => {
    this.setState({ trigger: false });
    console.log(this.state.trigger);
  };

  


  render() {

    const trigger = this.props.trigger;
    const actor = this.props.actor;

    return trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={this.props.handleClicked}>
            <b>X</b>
          </button>
          <div>
            <h1>Add Film!</h1>
          </div>
          <div>
          <h3>Title</h3>
          <input type="text" id="title" name="title"  onChange={(e)=>this.props.handleTitleTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Description</h3>
          <input type="text" id="description" name="description" onChange={(e)=>this.props.handleDescriptionTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Rental Duration</h3>
          <input type="text" id="rentalDuration" name="rentalDuration" onChange={(e)=>this.props.handleRentalDurationTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Release Year</h3>
          <input type="text" id="releaseYear" name="releaseYear" onChange={(e)=>this.props.handleReleaseYearChange(e.target.value)}/>
          </div>
          <div>
          <h3>Language ID</h3>
          <input type="text" id="languageID" name="languageID" onChange={(e)=>this.props.handleLanguageIDTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Replacement Cost</h3>
          <input type="text" id="replacementCost" name="replacementCost" onChange={(e)=>this.props.handleReplacementCostTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Length</h3>
          <input type="text" id="length" name="length" onChange={(e)=>this.props.handleLengthTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Special Features</h3>
          <input type="text" id="specialFeatures" name="specialFeatures" onChange={(e)=>this.props.handleSpecialFeaturesTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Rating</h3>
          <input type="text" id="rating" name="rating" onChange={(e)=>this.props.handleRatingTextChange(e.target.value)}/>
          </div>
          <div>
          <button onClick={this.props.buttonClicked}><b>Submit</b></button>
          {/* {console.log(this.state.title + " ", this.state.description + " ",this.state.rentalDuration + " ",this.state.languageID + " ",this.state.replacementCost + " ",this.state.length + " ",this.state.specialFeatures + " ",this.state.rating + " ")} */}
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

class FilmPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    };
    this.handleClicked = this.handleClick.bind(this);
  }

  handleClick = () => {
    // Changing state

    const trig = this.state.trigger;
    if (trig === true) {
      this.setState({ trigger: false });
    } else {
      this.setState({ trigger: true });
    }
  };

  // handleClick = () => {
  //   // Changing state

  //   const trig = this.state.trigger;
  //   if (trig === true) {
  //     this.setState({ trigger: false });
  //   } else {
  //     this.setState({ trigger: true });
  //   }
  // };
  

  // handleTitleTextChange(t)
  //   {
  //       this.setState({
  //         title:t
  //       })
  //   }

  //   handleDescriptionTextChange(d)
  //   {
  //       this.setState({
  //         description:d
  //       })
  //   }

  //   handleRentalDurationTextChange(rd)
  //   {
  //       this.setState({
  //         rentalDuration:rd
  //       })
  //   }

  //   handleReleaseYearChange(ry)
  //   {
  //       this.setState({
  //         releaseYear:ry
  //       })
  //   }

  //   handleLanguageIDTextChange(lid)
  //   {
  //       this.setState({
  //         languageID:lid
  //       })
  //   }

  //   handleReplacementCostTextChange(rc)
  //   {
  //       this.setState({
  //         replacementCost:rc
  //       })
  //   }

  //   handleLengthTextChange(l)
  //   {
  //       this.setState({
  //         length:l
  //       })
  //   }

  //   handleSpecialFeaturesTextChange(sf)
  //   {
  //       this.setState({
  //         specialFeatures:sf
  //       })
  //   }

  //   handleRatingTextChange(r)
  //   {
  //       this.setState({
  //         rating:r
  //       })
  //   }

  //   buttonClicked= () => {
  //     console.log(this.state.title);
  //     console.log(this.state.description);
  //     console.log(this.state.rentalDuration);
  //     console.log(this.state.languageID);
  //     console.log(this.state.replacementCost);
  //     console.log(this.state.length);
  //     console.log(this.state.specialFeatures);
  //     console.log(this.state.rating);
  //     console.log("Hi" + this.state.languageID.toString())
  //     axios
  //     .put(
  //       //`http://localhost:8080/index/Film/Add?title=Testing&description=hello?&release_year=2001&length=10&rating=PG&language_id=1&special_features=Trailers&rental_duration=100&replacement_cost=9.99`
  //       `http://localhost:8080/index/Film/Add?title=${this.state.title}&description=${this.state.description}?&release_year=${this.state.releaseYear}&length=${this.state.length}&rating=PG&language_id=${this.state.languageID}&special_features=${this.state.specialFeatures}&rental_duration=${this.state.rentalDuration}&replacement_cost=${this.state.replacementCost}`
  //     )
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  //   }

  render() {
    const film = this.props.film;
    return (
      <div>
        <button class="button" onClick={this.handleClicked}> More Info</button>
        <FilmPopupInfo
          trigger={this.state.trigger}
          film={film}
          handleClicked={this.handleClicked}
        ></FilmPopupInfo>
      </div>
    );
  }
}

class UpdateFilmPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      title:this.props.film.title,
      description: this.props.film.description,
      release_year: this.props.film.release_year,
      rental_duration: this.props.film.rental_duration,
      language_id: this.props.film.language_id,
      replacement_cost: this.props.film.replacement_cost,
      length: this.props.film.length,
      special_features: this.props.film.special_features,
      rating: this.props.film.rating,
      
    };
    this.handleClicked = this.handleClick.bind(this);
  }

  handleClick = () => {
    // Changing state

    const trig = this.state.trigger;
    if (trig === true) {
      this.setState({ trigger: false });
    } else {
      this.setState({ trigger: true });
    }
  };

  

  handleTitleTextChange(t)
    {
        this.setState({
          title:t
        })
    }

    handleDescriptionTextChange(d)
    {
        this.setState({
          description:d
        })
    }

    handleRentalDurationTextChange(rd)
    {
        this.setState({
          rental_duration:rd
        })
    }

    handleReleaseYearChange(ry)
    {
        this.setState({
          release_year:ry
        })
    }

    handleLanguageIDTextChange(lid)
    {
        this.setState({
          languageID:lid
        })
    }

    handleReplacementCostTextChange(rc)
    {
        this.setState({
          replacement_cost:rc
        })
    }

    handleLengthTextChange(l)
    {
        this.setState({
          length:l
        })
    }

    handleSpecialFeaturesTextChange(sf)
    {
        this.setState({
          special_features:sf
        })
    }

    handleRatingTextChange(r)
    {
        this.setState({
          rating:r
        })
    }

    buttonClicked= () => {
      axios
      .put(
        //`http://localhost:8080/index/Film/Add?title=Testing&description=hello?&release_year=2001&length=10&rating=PG&language_id=1&special_features=Trailers&rental_duration=100&replacement_cost=9.99`
        `http://localhost:8080/index/film/update?film_id=${this.props.film.film_id}&title=${this.state.title}&description=${this.state.description}?&release_year=${this.state.release_year}&length=${this.state.length}&rating=PG&language_id=${this.state.language_id}&special_features=${this.state.special_features}&rental_duration=${this.state.rental_duration}&replacement_cost=${this.state.replacement_cost}`
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
      window.location.reload(false);
    }

  render() {
    const film = this.props.film;
    return (
      <div>
        <button class="button "onClick={this.handleClicked}>Update Film!</button>
        <UpdateFilmPopupForm
            trigger={this.state.trigger}
            film={film}
            handleClicked={this.handleClicked}
            handleTitleTextChange = {this.handleTitleTextChange.bind(this)}
            handleDescriptionTextChange = {this.handleDescriptionTextChange.bind(this)}
            handleRentalDurationTextChange= {this.handleRentalDurationTextChange.bind(this)}
            handleReleaseYearChange = {this.handleReleaseYearChange.bind(this)}
            handleLanguageIDTextChange= {this.handleLanguageIDTextChange.bind(this)}
            handleReplacementCostTextChange= {this.handleReplacementCostTextChange.bind(this)}
            handleLengthTextChange= {this.handleLengthTextChange.bind(this)}
            handleSpecialFeaturesTextChange= {this.handleSpecialFeaturesTextChange.bind(this)}
            handleRatingTextChange= {this.handleRatingTextChange.bind(this)}
            buttonClicked = {this.buttonClicked.bind(this)}
        ></UpdateFilmPopupForm>
      </div>
    );
  }
}

class UpdateFilmPopupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick = () => {
    this.setState({ trigger: false });
    console.log(this.state.trigger);
  };

  


  render() {

    const trigger = this.props.trigger;
    const actor = this.props.actor;
    const film = this.props.film;

    return trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={this.props.handleClicked}>
            <b>X</b>
          </button>
          <div>
            <h1>Update Film!</h1>
          </div>
          <div>
          <h3>Title</h3>
          <input type="text" id="title" name="title"  defaultValue={film.title} onChange={(e)=>this.props.handleTitleTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Description</h3>
          <input type="text" id="description" name="description" defaultValue={film.description} onChange={(e)=>this.props.handleDescriptionTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Release Year</h3>
          <input type="text" id="releaseYear" name="releaseYear" defaultValue={film.release_year} onChange={(e)=>this.props.handleReleaseYearChange(e.target.value)}/>
          </div>
          <div>
          <h3>Rental Duration</h3>
          <input type="text" id="rentalDuration" name="rentalDuration" defaultValue={film.rental_duration}  onChange={(e)=>this.props.handleRentalDurationTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Language ID</h3>
          <input type="text" id="languageID" name="languageID" value={film.language_id} onChange={(e)=>this.props.handleLanguageIDTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Replacement Cost</h3>
          <input type="text" id="replacementCost" name="replacementCost" defaultValue={film.replacement_cost} onChange={(e)=>this.props.handleReplacementCostTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Length</h3>
          <input type="text" id="length" name="length" defaultValue={film.length} onChange={(e)=>this.props.handleLengthTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Special Features</h3>
          <input type="text" id="specialFeatures" name="specialFeatures" defaultValue={film.special_features} onChange={(e)=>this.props.handleSpecialFeaturesTextChange(e.target.value)}/>
          </div>
          <div>
          <h3>Rating</h3>
          <input type="text" id="rating" name="rating" defaultValue={film.rating} onChange={(e)=>this.props.handleRatingTextChange(e.target.value)}/>
          </div>
          <div>
          <button onClick={this.props.buttonClicked}><b>Submit</b></button>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }

}

class AddFilmPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      title: '',
      description: '',
      rentalDuration: '',
      languageID: '',
      replacementCost: '',
      length: '',
      specialFeatures: '',
      rating: ''
    };
    this.handleClicked = this.handleClick.bind(this);
  }

  handleClick = () => {
    // Changing state

    const trig = this.state.trigger;
    if (trig === true) {
      this.setState({ trigger: false });
    } else {
      this.setState({ trigger: true });
    }
  };
  

  handleTitleTextChange(t)
    {
        this.setState({
          title:t
        })
    }

    handleDescriptionTextChange(d)
    {
        this.setState({
          description:d
        })
    }

    handleRentalDurationTextChange(rd)
    {
        this.setState({
          rentalDuration:rd
        })
    }

    handleReleaseYearChange(ry)
    {
        this.setState({
          releaseYear:ry
        })
    }

    handleLanguageIDTextChange(lid)
    {
        this.setState({
          languageID:lid
        })
    }

    handleReplacementCostTextChange(rc)
    {
        this.setState({
          replacementCost:rc
        })
    }

    handleLengthTextChange(l)
    {
        this.setState({
          length:l
        })
    }

    handleSpecialFeaturesTextChange(sf)
    {
        this.setState({
          specialFeatures:sf
        })
    }

    handleRatingTextChange(r)
    {
        this.setState({
          rating:r
        })
    }

    buttonClicked= () => {

      axios
      .post(
                `http://localhost:8080/index/film/add?title=${this.state.title}&description=${this.state.description}&release_year=${this.state.releaseYear}&length=${this.state.length}&rating=PG&language_id=${this.state.languageID}&special_features=${this.state.specialFeatures}&rental_duration=${this.state.rentalDuration}&replacement_cost=${this.state.replacementCost}`
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
      window.location.reload(false);
    }

    render() {
      // const film = this.props.film;
      console.log("Hello")
      return (
        <div>
        <div class="center">
          <button class="addFilmButton" onClick={this.handleClicked}> Add Film</button>
          </div>
          <AddFilmPopupForm
            trigger={this.state.trigger}
            handleClicked={this.handleClicked}

            handleTitleTextChange = {this.handleTitleTextChange.bind(this)}
            handleDescriptionTextChange = {this.handleDescriptionTextChange.bind(this)}
            handleRentalDurationTextChange= {this.handleRentalDurationTextChange.bind(this)}
            handleReleaseYearChange = {this.handleReleaseYearChange.bind(this)}
            handleLanguageIDTextChange= {this.handleLanguageIDTextChange.bind(this)}
            handleReplacementCostTextChange= {this.handleReplacementCostTextChange.bind(this)}
            handleLengthTextChange= {this.handleLengthTextChange.bind(this)}
            handleSpecialFeaturesTextChange= {this.handleSpecialFeaturesTextChange.bind(this)}
            handleRatingTextChange= {this.handleRatingTextChange.bind(this)}
            buttonClicked = {this.buttonClicked.bind(this)}
          ></AddFilmPopupForm>
        </div>
      );
    }
}


class FilmRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trigger: true,
    }
  }

  render() {
    const film = this.props.film;


    return (
      <tr>
        <td>{film.title}</td>
        <td>{film.description}</td>
        <td>{film.release_year}</td>
        <td>{film.length}</td>
        <td>{film.rating}</td>
        <td>
          <FilmPopup film={film}></FilmPopup>
        </td>
        <td>
          <UpdateFilmPopup film={film}></UpdateFilmPopup>
        </td>
        <td>
          <DeleteFilm film={film}></DeleteFilm>
        </td>
      </tr>
    );
  }
}

// class ActorRow extends React.Component {
//   render() {
//     const actor = this.props.actor;

//     return (
//       <tr>
//         <td>{actor.first_name}</td>
//         <td>{actor.last_name}</td>
//       </tr>
//     );
//   }
// }

class FilmTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filmPackages: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/index/film/all")
      .then((response) => this.setState({ filmPackages: response.data }));
  }

  render() {
    const rows = [];
    this.state.filmPackages.forEach((film) => {
      rows.push(<FilmRow film={film} key={film.film_id} />);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release Year</th>
            <th>Length</th>
            <th>Rating</th>
            <th>More Info</th>
            <th colspan="2">Buttons</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

// class ActorTable extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { actorPackages: [] };
//   }

  

//     componentDidMount() {
//       axios
//         .get("http://localhost:8080/index/AllActors")
//         .then((response) => this.setState({ actorPackages: response.data }));
//     }

//     render() {
//       const rows = [];
//       this.state.actorPackages.forEach((actor) => {
//         console.log(actor)
//         rows.push(<ActorRow actor={actor} key={actor.actor_id} />);
//       });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>More Info</th>
//             {/* <th><ActorPopup actor = {actor}/></th> */}
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class FilterableTable extends React.Component {
//   render() {
//     return (
//       <div>
//         <FilmTable films={this.props.films} />
//         <ActorTable actors={this.props.actors} />
//       </div>
//     );
//   }
// }

// class NavBar extends React.Component {
//   render() {
//     return (
//       <div>
//         <div class="topnav">
//           <div class="nav-left">
//             <button>Add xxx</button>
            
//             <button>Actors</button>
//             <AddFilmPopup />
//           </div>
//           <div class="nav-right"></div>
//         </div>
//       </div>
//     );
//   }
// }

class Page extends React.Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <AddFilmPopup />
        <FilmTable films={this.props.films} />
        {/* films={FILMS} actors={ACTORS} */}
      </div>
    );
  }
}

// const ACTORS = 
//     [{"actor_id":1,"first_name":"PENELOPE","last_name":"GUINESS","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":2,"first_name":"NICK","last_name":"WAHLBERG","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":3,"first_name":"ED","last_name":"CHASE","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":4,"first_name":"JENNIFER","last_name":"DAVIS","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":5,"first_name":"JOHNNY","last_name":"LOLLOBRIGIDA","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":6,"first_name":"BETTE","last_name":"NICHOLSON","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":7,"first_name":"GRACE","last_name":"MOSTEL","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":8,"first_name":"MATTHEW","last_name":"JOHANSSON","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":9,"first_name":"JOE","last_name":"SWANK","last_update":"2006-02-15T04:34:33.000+00:00"},
//     {"actor_id":10,"first_name":"CHRISTIAN","last_name":"GABLE","last_update":"2006-02-15T04:34:33.000+00:00"}
// ]

// const FILMS = [
//     {"film_id":1,"title":"ACADEMY DINOSAUR","description":"A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies","release_year":2006,"language_id":1,"rental_duration":6,"rental_rate":0.99,"length":86,"replacement_cost":20.99,"rating":"PG","special_features":"Deleted Scenes,Behind the Scenes"},
//     {"film_id":2,"title":"ACE GOLDFINGER","description":"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China","release_year":2006,"language_id":1,"rental_duration":3,"rental_rate":4.99,"length":48,"replacement_cost":12.99,"rating":"G","special_features":"Trailers,Deleted Scenes"},
//     {"film_id":3,"title":"ADAPTATION HOLES","description":"A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory","release_year":2006,"language_id":1,"rental_duration":7,"rental_rate":2.99,"length":50,"replacement_cost":18.99,"rating":"NC-17","special_features":"Trailers,Deleted Scenes"},
//     {"film_id":4,"title":"AFFAIR PREJUDICE","description":"A Fanciful Documentary of a Frisbee And a Lumberjack who must Chase a Monkey in A Shark Tank","release_year":2006,"language_id":1,"rental_duration":5,"rental_rate":2.99,"length":117,"replacement_cost":26.99,"rating":"G","special_features":"Commentaries,Behind the Scenes"},
//     {"film_id":5,"title":"AFRICAN EGG","description":"A Fast-Paced Documentary of a Pastry Chef And a Dentist who must Pursue a Forensic Psychologist in The Gulf of Mexico","release_year":2006,"language_id":1,"rental_duration":6,"rental_rate":2.99,"length":130,"replacement_cost":22.99,"rating":"G","special_features":"Deleted Scenes"},
//     {"film_id":6,"title":"AGENT TRUMAN","description":"A Intrepid Panorama of a Robot And a Boy who must Escape a Sumo Wrestler in Ancient China","release_year":2006,"language_id":1,"rental_duration":3,"rental_rate":2.99,"length":169,"replacement_cost":17.99,"rating":"PG","special_features":"Deleted Scenes"},
//     {"film_id":7,"title":"AIRPLANE SIERRA","description":"A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat","release_year":2006,"language_id":1,"rental_duration":6,"rental_rate":4.99,"length":62,"replacement_cost":28.99,"rating":"PG-13","special_features":"Trailers,Deleted Scenes"},
//     {"film_id":8,"title":"AIRPORT POLLOCK","description":"A Epic Tale of a Moose And a Girl who must Confront a Monkey in Ancient India","release_year":2006,"language_id":1,"rental_duration":6,"rental_rate":4.99,"length":54,"replacement_cost":15.99,"rating":"R","special_features":"Trailers"},
//     {"film_id":9,"title":"ALABAMA DEVIL","description":"A Thoughtful Panorama of a Database Administrator And a Mad Scientist who must Outgun a Mad Scientist in A Jet Boat","release_year":2006,"language_id":1,"rental_duration":3,"rental_rate":2.99,"length":114,"replacement_cost":21.99,"rating":"PG-13","special_features":"Trailers,Deleted Scenes"},
//     {"film_id":10,"title":"ALADDIN CALENDAR","description":"A Action-Packed Tale of a Man And a Lumberjack who must Reach a Feminist in Ancient China","release_year":2006,"language_id":1,"rental_duration":6,"rental_rate":4.99,"length":63,"replacement_cost":24.99,"rating":"NC-17","special_features":"Trailers,Deleted Scenes"}
// ]

ReactDOM.render(
  <body class="background">
    <div >
    <h1 class="headerTitle">Movie Database!</h1>
    <Page />
    </div>
    </body>,
    document.getElementById('root')
  );
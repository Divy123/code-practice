import React,{Component} from 'react';

class Movie extends Component
{

  render(){
    let i=0;
    const some=for(i in this.props.movies)
    {
      <li>
        <h2>{this.props.movies[i].name}</h2>
      {
        var user=this.props.profiles.filter(profile=>profile.favoriteMovieID===i);
        if(user.length==0)
          <p>None of the current users liked the movie</p>
        else{
          <p>Liked by</p>
          <ul>
            {
            for(i in user)
            {
              var u=i.userID;
              <li>{this.props.users[u].name}</li>
            }
            }
           </ul>
        }
      }
        </li>}
  return(
    <ul>
    
    </ul>);
  }
}
export default Movie;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thinkster-ng-basic-challenge';
  movies = [{
    id: 0,
    title: 'Catwoman',
    imdbImage: 'https://m.media-amazon.com/images/M/MV5BMDFiNTRkNTYtMGY2OS00MTUwLTlhZWUtOTEyOTEzMDJkZTJjXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_QL75_UY562_CR21,0,380,562_.jpg',
    isChosen: false,
  }, {
    id: 1,
    title: 'Speed Racer',
    imdbImage: 'https://m.media-amazon.com/images/M/MV5BMWU4Y2RhYzMtYzIxZC00NmRlLTk0OTctNDg1NTg5Yjk4YjQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    isChosen: false,
  }, {
    id: 2,
    title: 'Green Lantern',
    imdbImage: 'https://m.media-amazon.com/images/M/MV5BYWFkNTdkMzgtMmQ4My00ZjZmLWIwYzMtZDdmMGIyM2Q2ZDgxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_QL75_UY562_CR2,0,380,562_.jpg',
    isChosen: false,
  }, {
    id: 3,
    title: 'Fantastic Four',
    imdbImage: 'https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_QL75_UX190_CR0,0,190,281_.jpg',
    isChosen: false,
  }]
  anyIsChosen: boolean = false;

  vote(movieVoted: number) {
    console.log(movieVoted);
    console.log(`movie voted was ${this.movies[movieVoted].title}`);

    if (this.movies[movieVoted].isChosen) {
      this.anyIsChosen = false;
      return this.movies[movieVoted].isChosen = false;
    }
    this.movies.forEach(movie => {
      if (movie.id === this.movies[movieVoted].id) {
        movie.isChosen = true;
        return this.anyIsChosen = true;
      }
      else
        return movie.isChosen = false;
    })

    return;
  }
}

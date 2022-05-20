import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const allMovies = {
  genres: [
    "Comedy",
    "Fantasy",
    "Crime",
    "Drama",
    "Music",
    "Adventure",
    "History",
    "Thriller",
    "Animation",
    "Family",
    "Mystery",
    "Biography",
    "Action",
    "Film-Noir",
    "Romance",
    "Sci-Fi",
    "War",
    "Western",
    "Horror",
    "Musical",
    "Sport",
  ],
  movies: [
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      runtime: "127",
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Crocodile Dundee",
      year: "1986",
      runtime: "97",
      genres: ["Adventure", "Comedy"],
      director: "Peter Faiman",
      actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
      plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
    },
    {
      id: 6,
      title: "Ratatouille",
      year: "2007",
      runtime: "111",
      genres: ["Animation", "Comedy", "Family"],
      director: "Brad Bird, Jan Pinkava",
      actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
      plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
    },
    {
      id: 7,
      title: "City of God",
      year: "2002",
      runtime: "130",
      genres: ["Crime", "Drama"],
      director: "Fernando Meirelles, Kátia Lund",
      actors:
        "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
      plot: "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
    },

    {
      id: 10,
      title: "Stardust",
      year: "2007",
      runtime: "127",
      genres: ["Adventure", "Family", "Fantasy"],
      director: "Matthew Vaughn",
      actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
      plot: "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
    },
    {
      id: 11,
      title: "Apocalypto",
      year: "2006",
      runtime: "139",
      genres: ["Action", "Adventure", "Drama"],
      director: "Mel Gibson",
      actors:
        "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
      plot: "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
    },

    {
      id: 13,
      title: "No Country for Old Men",
      year: "2007",
      runtime: "122",
      genres: ["Crime", "Drama", "Thriller"],
      director: "Ethan Coen, Joel Coen",
      actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
      plot: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg",
    },
    {
      id: 17,
      title: "The Third Man",
      year: "1949",
      runtime: "93",
      genres: ["Film-Noir", "Mystery", "Thriller"],
      director: "Carol Reed",
      actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
      plot: "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
    },
    {
      id: 18,
      title: "The Beach",
      year: "2000",
      runtime: "119",
      genres: ["Adventure", "Drama", "Romance"],
      director: "Danny Boyle",
      actors:
        "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
      plot: "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      id: 19,
      title: "Scarface",
      year: "1983",
      runtime: "170",
      genres: ["Crime", "Drama"],
      director: "Brian De Palma",
      actors:
        "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
      plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
      rating: 7.5,
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
    },
  ],
};

const Movies = () => {
  const ItemView = ({ item }) => {
    return (
      <View style={styles.movie}>
        <Image
          style={styles.img}
          source={{
            uri: item.posterUrl,
          }}
        />
        <Text
          style={{ marginTop: 10, color: "red", fontSize: 15 }}
          onPress={() => getItem(item)}
        >
          {item.title.toUpperCase()}
        </Text>
        <Text>Overall Rating: {item.rating}</Text>
        <Text>Year: {item.year}</Text>
      </View>
    );
  };
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign: 'center', marginTop: 20, fontSize:20}}>Best Movie collection</Text>
      <View style={styles.container}>
        <FlatList
          style={styles.flatlist}
          data={allMovies.movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          numColumns={2}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  img: {
    width: "100%",
    height: 150,
  },
  movie: {
    flex: 1,
    margin: 10,
  },
  flatlist: {
    marginTop: 20,
    padding: 10,
  },
});

export default Movies;

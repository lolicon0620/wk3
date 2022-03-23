import React from "react";
import { View } from "react-native";

import BookList from "../components/BookList";
import sections from "../json/book_section.json";

const BookListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <BookList list={sections} navigation={navigation} />
    </View>
  );
};

export default BookListScreen;

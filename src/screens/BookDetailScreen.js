import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

const BookDetailScreen = ({ route: { params } }) => {
  const { title, author, image, star, starCount, description, price } = params;
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.bookDetailContainerStyle}>
        <Image style={styles.bookImageStyle} source={{ uri: image }} />
        <View style={styles.bookInfoContainerStyle}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.authorTextStyle}>{author}</Text>
          {star ? (
            <View style={styles.rateContainerStyle}>
              <View style={styles.starContainerStyle}>
                {star.map((value, index) => {
                  return (
                    <View key={index.toString() + title}>
                      {star[index] ? (
                        <Image
                          source={require("../icon/icon_star_filled.png")}
                          style={styles.starImageStyle}
                        />
                      ) : (
                        <Image
                          source={require("../icon/icon_star_empty.png")}
                          style={styles.starImageStyle}
                        />
                      )}
                    </View>
                  );
                })}
              </View>
              <Text style={styles.rateTextStyle}>
                {starCount} / <Text style={styles.rateMaxTextStyle}>5.0</Text>
              </Text>
            </View>
          ) : null}
        </View>
        <View style={styles.descriptionContainerStyle}>
          <Text style={styles.descriptionTextStyle}>{description}</Text>
        </View>
        <Pressable>
          <View style={styles.buyButtonContainerStyle}>
            <Text style={styles.buyButtonTextStyle}>BUY NOW FOR ${price}</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bookDetailContainerStyle: {
    alignItems: "center",
  },
  bookImageStyle: {
    width: 210,
    height: 300,
    marginTop: 8,
  },
  bookInfoContainerStyle: {
    marginTop: 28,
    alignItems: "center",
  },
  titleTextStyle: {
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#131313",
  },
  authorTextStyle: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#666",
    marginTop: 8,
  },
  rateContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 147,
    height: 16,
    marginTop: 8,
  },
  starContainerStyle: {
    flexDirection: "row",
  },
  starImageStyle: {
    width: 14,
    height: 14,
    marginLeft: 4,
  },
  rateTextStyle: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#131313",
    marginLeft: 8,
  },
  rateMaxTextStyle: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#666",
  },
  descriptionContainerStyle: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  descriptionTextStyle: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.168,
    textAlign: "center",
  },
  buyButtonContainerStyle: {
    width: 190,
    height: 36,
    marginTop: 28,
    marginHorizontal: 85,
    borderRadius: 4,
    backgroundColor: "#6200EE",
    justifyContent: "center",
    alignItems: "center",
  },
  buyButtonTextStyle: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#fff",
  },
});

export default BookDetailScreen;

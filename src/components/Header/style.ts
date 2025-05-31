import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#ccc",
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    alignItems: "center",
  },
  viewInfo: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

  },

  text: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 20,
  },

  textName: {
    fontFamily: "Arial",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 5,
  },


  viewBntinfo: {
    marginRight: 25,
    alignItems: "center",
  },
  textviewInfo: {
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "700",
  },

  title: {
    marginTop: 10,
    fontSize: 25,
    fontFamily: "Arial",
    marginLeft: 20,
    fontWeight: "bold",
    opacity: 0.8,
  },
});
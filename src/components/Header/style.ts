import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
    boxShadow: "0px 4px 4px rgba(9, 9, 9, 0.25)",
    justifyContent: "space-between"
  },
  viewInfo: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

  },
  
  text: {
    fontFamily: "Arial",
    fontSize: 18,
    marginLeft: 20,
  },

  textName: {
    fontFamily: "Arial",
    fontSize: 18,
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

  
});
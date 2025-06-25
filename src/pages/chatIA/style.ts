import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  textName: {
    fontFamily: "Arial",
      fontSize: 18,
      textAlign: "center",
      fontWeight: "700",
      marginTop: 10,
  },
  textSend: {
    fontSize: 14,
    color: "black",
    fontFamily: "Arial",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  textResposta: {
    fontSize: 15,
    color: "green",
    fontFamily: "Arial",
    letterSpacing: 1.5,
      marginBottom: 10,
  },
  footer: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
  },
  areaResposta: {
    width: "100%",
    height: "80%",
    paddingHorizontal: 20,
  },

  input: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
  },
  bntSend: {
    width: "20%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

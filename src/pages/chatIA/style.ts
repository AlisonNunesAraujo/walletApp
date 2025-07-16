import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  textName: {
    fontFamily: "Arial",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  areaResposta: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#000",
  },
  textSend: {
    fontSize: 14,
    color: "white",
    fontFamily: "Arial",
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  textResposta: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Arial",
    marginBottom: 5,
    letterSpacing: 1.5,
    
  },
  footer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#000",
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

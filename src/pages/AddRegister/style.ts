import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
    alignItems: "center",
  },

  areaAdd: {
    width: "90%",
    marginTop: 20,
    backgroundColor: "#ccc",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
  },
  title: {
    fontFamily: "Arial",
    fontSize: 15,
  },
  inputAdd: {
    width: "90%",
    height: 40,
    padding: 10,
    borderRadius: 5,
    boxShadow: "1px 3px 3px 0px rgba(8, 8, 8, 0.25)",
    marginBottom: 20,
  },

  areaBntAdd: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
  },
  bnt: {
    width: "30%",
    height: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  textbntAdd: {
    fontSize: 12,
    fontFamily: "Arial",
  },
});
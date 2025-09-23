import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#fff4ff",
    alignItems: "center",
  },

  areaAdd: {
    width: "90%",
    backgroundColor: "#00cc73",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    marginTop: 20,
  },
  title: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  inputAdd: {
    width: "90%",
    height: 40,
    padding: 10,
    borderRadius: 5,
    boxShadow: "1px 3px 3px 0px rgba(122, 119, 119, 0.25)",
    marginBottom: 20,
    backgroundColor: "white",
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
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
  },
  buttonVoltar:{
    width: "90%",
    height: 40,
    backgroundColor: "#00cc73",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  textButtonVoltar: {
    fontSize: 14,
    fontFamily: "Arial",
    color: "white",
    fontWeight: "bold",
  }
});
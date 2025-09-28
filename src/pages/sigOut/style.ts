import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  areaLogin: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    width: "100%",
    height: "80%",
    backgroundColor: "#1D393C",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Title: {
    fontSize: 20,
    fontFamily: "Arial",
    margin: 20,
    color: "black",
    opacity: 0.8,
    fontWeight: "700",
  },
  areaInputs: {
    width: "100%",
    marginTop: 30,
  },
  label: {
    marginLeft: "5%",
    fontSize: 16,
    fontFamily: "Arial",
    color: "white",
    letterSpacing: 1.5,
  },

  formInput: {
    width: "90%",
    height: 40,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    padding: 10,
    marginBottom: 20,
    marginLeft: "5%",
    color: "white",
  },

  bnts: {
    width: "40%",
    height: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  textBnts: {
    fontFamily: "Arial",
    fontSize: 12,
  },
});

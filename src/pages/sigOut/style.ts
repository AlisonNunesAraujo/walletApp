import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  areaLogin: {
    flex: 1,
    backgroundColor: "white",
  },

  form: {
    width: "100%",
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  Title: {
    fontSize: 20,
    fontFamily: "Arial",
    margin: 20,
    opacity: 0.7,
    fontWeight: '700',
    color: 'white'

  },

  formInput: {
    width: "90%",
    height: 40,
    boxShadow: "0px 4px 4px rgba(8, 8, 8, 0.25)",
    padding: 10,
    marginBottom: 20,
  },

  bnts: {
    width: "40%",
    height: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
  },

  textBnts: {
    fontFamily: "Arial",
    fontSize: 12,
  },
});
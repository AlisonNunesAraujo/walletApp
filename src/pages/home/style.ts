import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  areaView: {
    gap: 20,
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    height: "auto",
  },
  areaBnts: {
    width: "90%",
    height: 'auto',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: "column",
    padding: 15,
  },
  textTitle: {
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    fontWeight: "semibold",
    fontSize: 15,
    textAlign: "center",
  },
  textInfo: {
    fontSize: 12,
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    alignItems: "center",
    textAlign: "center",
  },
  buttonIA: {
    position: "absolute",
    bottom: 60,
    right: 50,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00cc73",
  },
  ViewRede:{
    width: "100%",
    bottom: 0,
    position: "absolute"
  }
 
});
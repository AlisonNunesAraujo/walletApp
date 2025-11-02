import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  conteiner: {
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: "column",
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  textTitle: {
    color: "black",
    fontFamily: "Arial",
    margin: 5,
    fontWeight: "700",
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
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  buttonIA: {
    position: "absolute",
    bottom: 20,
    right: 40,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00cc73",
  }
 
});
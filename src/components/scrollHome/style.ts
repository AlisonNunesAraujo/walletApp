import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
   scroll: {
    width: "100%",
    height: 120,
    marginTop: 12,
    marginLeft: 6,
  },
  areaScrool: {
    width: "100%",
    height: 40,
    backgroundColor: "#ccc",
    marginTop: 10,
  },

  conteudoScroll: {
    width: 100,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    margin: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  text: {
    fontSize: 12,
    fontFamily: "Arial",
    color: "black",
    textAlign: "center",
  },
});



import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  areaFlat: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  infoListaVazia: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  textListVazia: {
    fontFamily: 'Arial',
    color: '#6B7280',
    fontSize: 14,
  },
});

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingBlock: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  greetingPrefix: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#111827',
  },
  greetingName: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  profileBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  profileText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: '700',
    color: '#111827',
  },
});
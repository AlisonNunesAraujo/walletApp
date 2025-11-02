import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  areaLogin: {
    flex: 1,
    backgroundColor: 'white',
  },

  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  Title: {
    fontSize: 22,
    marginVertical: 16,
    color: '#111827',
    opacity: 0.95,
    fontWeight: '700',
    fontFamily: 'Arial',
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    // sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  areaInputs: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    marginBottom: 6,
    fontFamily: 'Arial',
  },

  inputRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 10,
    height: 44,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#111827',
    fontFamily: 'Arial',
  },
  eyeButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  primaryBtn: {
    marginTop: 16,
    width: '100%',
    height: 44,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    fontFamily: 'Arial',
  },
  btnDisabled: {
    opacity: 0.6,
  },

  secondaryBtn: {
    marginTop: 10,
    width: '100%',
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'Arial',
  },
});
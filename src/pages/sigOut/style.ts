import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D393C",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },

  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2F565A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    fontFamily: "Arial",
  },

  subtitle: {
    fontSize: 14,
    color: "#D1D1D1",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 14,
    color: "#111",
  },

  primaryButton: {
    height: 48,
    backgroundColor: "#1D393C",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  primaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButton: {
    marginTop: 16,
    alignItems: "center",
  },

  secondaryText: {
    fontSize: 14,
    color: "#1D393C",
    fontWeight: "600",
  },
});

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  infoBlock: {
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    color: "#666",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111",
  },

  description: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },

  logoutButton: {
    marginTop: 20,
    backgroundColor: "#E53935",
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

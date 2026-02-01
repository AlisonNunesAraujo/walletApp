const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// Mantém apenas a configuração padrão do Expo/Metro

module.exports = config;
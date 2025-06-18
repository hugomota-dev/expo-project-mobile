import AsyncStorage from "@react-native-async-storage/async-storage";

// Chave para armazenar os usuários no AsyncStorage
const USERS_STORAGE_KEY = "users";

/**
 * Carrega a lista de usuários do AsyncStorage.
 * @returns {Promise<Array>} Uma Promise que resolve para um array de usuários.
 */
export const loadUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(USERS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Erro ao carregar usuários:", e);
    return [];
  }
};

/**
 * Salva a lista de usuários no AsyncStorage.
 * @param {Array} users - O array de usuários a ser salvo.
 * @returns {Promise<void>} Uma Promise que resolve quando os usuários são salvos.
 */
export const saveUsers = async (users) => {
  try {
    const jsonValue = JSON.stringify(users);
    await AsyncStorage.setItem(USERS_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Erro ao salvar usuários:", e);
  }
};
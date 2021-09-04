import { inflate } from "zlib";

export default obtenerNuevoUsuario = async (payload) => {
  try {
    const resultado = await fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const obj = await resultado.json();
    if (!resultado.ok) {
      throw new Error(obj.message);
    }
    return { success: true };
  } catch (e) {
    console.log();
    return { success: false };
  }
};

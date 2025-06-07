import * as Notifications from "expo-notifications";

export async function notifyLowStock(title: string, stock: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "⚠️ ¡Quedan pocas unidades!",
      body: `Solo quedan ${stock} de "${title}" en stock.`,
    },
    trigger: null,
  });
}

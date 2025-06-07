import * as Notifications from "expo-notifications";

export async function notifyLowStock(title: string, stock: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "⚠️ Low Stock Alert!",
      body: `Only ${stock} units of "${title}" left in stock.`,
    },
    trigger: null,
  });
}
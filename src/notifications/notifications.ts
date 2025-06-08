import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import { i18n } from "../locales";

export async function scheduleWelcomeNotification() {
  const welcomeDate = new Date(Date.now() + 2000); // HACK to show the notification -- 2 seconds from now

  await Notifications.scheduleNotificationAsync({
    content: {
      title: i18n.t("notifications.welcome.title"),
      body: i18n.t("notifications.welcome.body"),
      data: { type: "welcome" },
    },
    trigger: {
      type: SchedulableTriggerInputTypes.DATE,
      date: welcomeDate,
    },
  });
}

export async function configurePushNotifications() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    return;
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  await scheduleWelcomeNotification();
}

import notifications from "../assets/images/notifications.svg";
import storyAndSubscriptions from "../assets/images/story_and_subscription.svg";
import myCards from "../assets/images/my_cards.svg";
import saved from "../assets/images/saved.svg";
import medicines from "../assets/images/medicines.svg";
import noteOfMedicines from "../assets/images/note_of_medicines.svg";
import settings from "../assets/images/settings.svg"; // Same as `story_and_subscriptions.svg`

type Data = {
  icon: string;
  title: string;
  badge: number;
  status: string;
};

export const rows: Data[] = [
  {
    icon: notifications,
    title: "Уведомления",
    badge: 2,
    status: "alert",
  },
  {
    icon: storyAndSubscriptions,
    title: "История подписки",
    badge: 0,
    status: "success",
  },
  {
    icon: myCards,
    title: "Мои карты",
    badge: 0,
    status: "success",
  },
  {
    icon: saved,
    title: "Сохраненные",
    badge: 12,
    status: "success",
  },
  {
    icon: medicines,
    title: "Лекарства",
    badge: 0,
    status: "success",
  },
  {
    icon: noteOfMedicines,
    title: "Заметка лекарств",
    badge: 0,
    status: "success",
  },
  {
    icon: settings,
    title: "Настройки",
    badge: 0,
    status: "success",
  },
];

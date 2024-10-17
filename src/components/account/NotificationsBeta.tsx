import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const NotificationsBeta = ({ notifications }: { notifications: any }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return (
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
        );
      case "error":
        return (
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-red-500"
          />
        );
      case "warning":
        return (
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-yellow-500"
          />
        );
      case "info":
        return (
          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="notifications-container p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((notification: any) => (
          <li
            key={notification.id}
            className={`p-4 rounded-md border ${
              notification.isRead
                ? "bg-gray-100"
                : "bg-gray-50 border-violet-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Icone en fonction du type de notification */}
                {getIcon(notification.type)}
                <div className="ml-3">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-500">
                    {notification.message}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400">
                  {notification.date}
                </span>
                {!notification.isRead && (
                  <button className="ml-3 text-sm text-blue-600 hover:underline">
                    Marquer comme lu
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsBeta;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Notifications = ({ notifications }: { notifications: any }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return (
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
        );
      case "error":
        return (
          <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />
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
    <div className="md:p-4 max-w-2xl ">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <div className="space-y-3">
        {notifications.map((notification: any) => (
          <div
            key={notification.id}
            className={`flex items-start p-4 border rounded-lg ${
              notification.isRead ? "bg-gray-100" : "bg-white"
            } shadow-sm`}
          >
            <div className="mr-4">{getIcon(notification.type)}</div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">
                {notification.title}
              </h3>
              <p className="text-sm font-Quicksand">{notification.message}</p>
              <p className="text-xs text-gray-400">
                {new Date(notification.date).toLocaleDateString()}
              </p>
            </div>
            {!notification.isRead && (
              <span className="ml-4 text-xs font-semibold text-violet-600">
                Nouveau
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

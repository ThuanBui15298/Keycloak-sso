import { lazy } from "react";
import type { Path } from "react-router-dom";
import { generateEncodedPath } from "../../utils/generateEncodedPath";
import type { AppRouteObject } from "../../routes";

export type UserProfileTab = "attributes" | "attributes-group" | "json-editor";

export type UserProfileParams = {
  realm: string;
  tab: UserProfileTab;
};

const RealmSettingsSection = lazy(() => import("../RealmSettingsSection"));

export const UserProfileRoute: AppRouteObject = {
  path: "/:realm/realm-settings/user-profile/:tab",
  element: <RealmSettingsSection />,
  breadcrumb: (t) => t("realm-settings:userProfile"),
  handle: {
    access: "view-realm",
  },
};

export const toUserProfile = (params: UserProfileParams): Partial<Path> => ({
  pathname: generateEncodedPath(UserProfileRoute.path, params),
});

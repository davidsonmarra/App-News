import { NativeModules } from "react-native";
import { ITheme } from "@types";

export default class WhiteLabelConfig {
  public static readonly APP_NAME: string =
    NativeModules.WhiteLabelConfig.getAppName();
  public static readonly THEME: ITheme = NativeModules.WhiteLabelConfig.theme;
}

// WhiteLabelConfig.java for WL1 product flavor

package com.whitelabelnews;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import javax.annotation.Nonnull;
import java.util.Map;
import java.util.HashMap;

public class WhiteLabelConfig extends ReactContextBaseJavaModule {

    @Nonnull
    private final String appName;

    public WhiteLabelConfig(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.white_label_app_name);
    }


    @Nonnull
    @Override
    public String getName() {
        return "WhiteLabelConfig";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getAppName() {
        return appName;
    }

    @Nonnull
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        WritableMap themeMap = Arguments.createMap();
        themeMap.putString("background", "#2c292e");
        themeMap.putString("primary", "#a92621");
        themeMap.putString("secondary", "#f1f1f1");
        themeMap.putString("title", "#f1f1f1");
        themeMap.putString("heroTitle", "#f1f1f1");
        themeMap.putString("brightness", "rgba(0, 0, 0, 0.5)");
        themeMap.putString("cardBackground", "#f1f1f111");
        themeMap.putString("mode", "light");


        constants.put("theme", themeMap);
        return constants;
    }
}
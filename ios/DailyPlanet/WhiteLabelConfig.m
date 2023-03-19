//
//  WhiteLabelConfig.m
//  DailyPlanet
//
//  Created by Davidson Marra on 10/03/23.
//

#import <Foundation/Foundation.h>
#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig

  RCT_EXPORT_MODULE(WhiteLabelConfig);
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }

  - (NSDictionary *)constantsToExport {
    return @{
      @"theme": @{
        @"background": @"#f3f8fe",
        @"primary": @"#8db5d7",
        @"secondary": @"#fee344",
        @"title": @"#1c1c1c",
        @"heroTitle": @"#f1f1f1",
        @"brightness": @"rgba(0, 0, 0, 0.7)",
        @"cardBackground": @"#1c1c1c33",
        @"mode": @"dark"
      }
    };
  }

  + (BOOL)requiresMainQueueSetup {
    return YES;
  }

@end

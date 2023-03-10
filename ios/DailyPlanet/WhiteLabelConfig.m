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
        @"title": @"#f1f1f1",
        @"heroTitle": @"#f1f1f1",
        @"brightness": @"rgba(0, 0, 0, 0.5)"
      }
    };
  }

  + (BOOL)requiresMainQueueSetup {
    return YES;
  }

@end

//
//  WhiteLabelConfig.m
//  whiteLabelNews
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
        @"background": @"#2c292e",
        @"primary": @"#a92621",
        @"title": @"#1c1c1c",
        @"heroTitle": @"#f1f1f1",
        @"brightness": @"rgba(0, 0, 0, 0.5)"
      }
    };
  }

  + (BOOL)requiresMainQueueSetup {
    return YES;
  }

@end

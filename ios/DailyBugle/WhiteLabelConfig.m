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
    return @"Daily Bungle";
  }

@end

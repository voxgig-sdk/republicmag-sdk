package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPostEntityFunc func(client *RepublicmagSDK, entopts map[string]any) RepublicmagEntity


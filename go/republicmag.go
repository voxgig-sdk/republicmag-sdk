package voxgigrepublicmagsdk

import (
	"github.com/voxgig-sdk/republicmag-sdk/go/core"
	"github.com/voxgig-sdk/republicmag-sdk/go/entity"
	"github.com/voxgig-sdk/republicmag-sdk/go/feature"
	_ "github.com/voxgig-sdk/republicmag-sdk/go/utility"
)

// Type aliases preserve external API.
type RepublicmagSDK = core.RepublicmagSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RepublicmagEntity = core.RepublicmagEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RepublicmagError = core.RepublicmagError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPostEntityFunc = func(client *core.RepublicmagSDK, entopts map[string]any) core.RepublicmagEntity {
		return entity.NewPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRepublicmagSDK = core.NewRepublicmagSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRepublicmagSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RepublicmagSDK  { return NewRepublicmagSDK(nil) }
func Test() *RepublicmagSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

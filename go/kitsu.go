package voxgigkitsusdk

import (
	"github.com/voxgig-sdk/kitsu-sdk/go/core"
	"github.com/voxgig-sdk/kitsu-sdk/go/entity"
	"github.com/voxgig-sdk/kitsu-sdk/go/feature"
	_ "github.com/voxgig-sdk/kitsu-sdk/go/utility"
)

// Type aliases preserve external API.
type KitsuSDK = core.KitsuSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type KitsuEntity = core.KitsuEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type KitsuError = core.KitsuError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAnimeEntityFunc = func(client *core.KitsuSDK, entopts map[string]any) core.KitsuEntity {
		return entity.NewAnimeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewKitsuSDK = core.NewKitsuSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

package = "voxgig-sdk-kitsu"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/kitsu-sdk.git"
}
description = {
  summary = "Kitsu SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["kitsu_sdk"] = "kitsu_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

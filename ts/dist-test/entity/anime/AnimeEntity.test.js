"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AnimeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KITSU_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KITSU_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KitsuSDK.test();
        const ent = testsdk.Anime();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KITSU_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'anime.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "anime", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "tokyo", "kind": "query", "name": "filter_text", "orig": "filter_text", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 10, "kind": "query", "name": "page_limit", "orig": "page_limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 0, "kind": "query", "name": "page_offset", "orig": "page_offset", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /anime", "json": "{\"operationId\":\"searchAnime\",\"parameters\":[{\"description\":\"Search query text to filter anime titles\",\"in\":\"query\",\"name\":\"filter[text]\",\"required\":true,\"schema\":{\"example\":\"tokyo\",\"type\":\"string\"}},{\"description\":\"Number of results to return per page\",\"in\":\"query\",\"name\":\"page[limit]\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":20,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination\",\"in\":\"query\",\"name\":\"page[offset]\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/vnd.api+json\":{\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"attributes\":{\"properties\":{\"ageRating\":{\"description\":\"Age rating classification\",\"type\":\"string\"},\"ageRatingGuide\":{\"description\":\"Explanation of the age rating\",\"type\":\"string\"},\"averageRating\":{\"description\":\"Average user rating\",\"type\":\"string\"},\"canonicalTitle\":{\"description\":\"Official title of the anime\",\"type\":\"string\"},\"coverImage\":{\"description\":\"Cover images in various sizes\",\"properties\":{\"large\":{\"format\":\"uri\",\"type\":\"string\"},\"original\":{\"format\":\"uri\",\"type\":\"string\"},\"small\":{\"format\":\"uri\",\"type\":\"string\"},\"tiny\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"endDate\":{\"description\":\"Date when the anime ended airing\",\"format\":\"date\",\"type\":\"string\"},\"episodeCount\":{\"description\":\"Total number of episodes\",\"type\":\"integer\"},\"episodeLength\":{\"description\":\"Average length of episodes in minutes\",\"type\":\"integer\"},\"popularityRank\":{\"description\":\"Ranking based on popularity\",\"type\":\"integer\"},\"posterImage\":{\"description\":\"Poster images in various sizes\",\"properties\":{\"large\":{\"format\":\"uri\",\"type\":\"string\"},\"medium\":{\"format\":\"uri\",\"type\":\"string\"},\"original\":{\"format\":\"uri\",\"type\":\"string\"},\"small\":{\"format\":\"uri\",\"type\":\"string\"},\"tiny\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"ratingRank\":{\"description\":\"Ranking based on rating\",\"type\":\"integer\"},\"showType\":{\"description\":\"Type of anime (TV, movie, OVA, etc.)\",\"enum\":[\"TV\",\"movie\",\"OVA\",\"ONA\",\"special\",\"music\"],\"type\":\"string\"},\"slug\":{\"description\":\"URL-friendly identifier\",\"type\":\"string\"},\"startDate\":{\"description\":\"Date when the anime started airing\",\"format\":\"date\",\"type\":\"string\"},\"status\":{\"description\":\"Current airing status\",\"enum\":[\"current\",\"finished\",\"tba\",\"unreleased\",\"upcoming\"],\"type\":\"string\"},\"synopsis\":{\"description\":\"Brief description of the anime\",\"type\":\"string\"},\"titles\":{\"additionalProperties\":{\"type\":\"string\"},\"description\":\"Anime titles in various languages\",\"type\":\"object\"}},\"type\":\"object\"},\"id\":{\"description\":\"Unique identifier for the anime\",\"type\":\"string\"},\"relationships\":{\"description\":\"Related resources\",\"properties\":{\"categories\":{\"properties\":{\"links\":{\"properties\":{\"related\":{\"format\":\"uri\",\"type\":\"string\"},\"self\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"genres\":{\"properties\":{\"links\":{\"properties\":{\"related\":{\"format\":\"uri\",\"type\":\"string\"},\"self\":{\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":{\"description\":\"Resource type\",\"example\":\"anime\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"properties\":{\"first\":{\"description\":\"Link to first page\",\"type\":\"string\"},\"last\":{\"description\":\"Link to last page\",\"type\":\"string\"},\"next\":{\"description\":\"Link to next page\",\"type\":\"string\"}},\"type\":\"object\"},\"meta\":{\"properties\":{\"count\":{\"description\":\"Total number of results\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with anime search results\"},\"400\":{\"content\":{\"application/vnd.api+json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"detail\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"string\"},\"title\":{\"description\":\"Error title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid search parameters\"},\"500\":{\"content\":{\"application/vnd.api+json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"detail\":{\"description\":\"Detailed error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"string\"},\"title\":{\"description\":\"Error title\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/anime", "segments": [{ "lit": "anime" }], "select": { "exist": ["filter_text", "page_limit", "page_offset"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "anime", "name__orig": "anime", "Name": "Anime", "name_": "anime", "name-": "anime", "NAME": "ANIME", "index$": 0 }, { "active": true, "entity": "anime", "key$": "BasicAnimeFlow", "kind": "basic", "name": "BasicAnimeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "anime_ref01", "srcdatavar": "anime_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-anime_ref01" } }], "index$": 0 }] }, 'Anime');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let anime_ref01_data = Object.values(setup.data.existing.anime)[0];
        // LOAD
        const anime_ref01_ent = client.Anime();
        const anime_ref01_match_dt0 = {};
        const anime_ref01_data_dt0 = (await anime_ref01_ent.load(anime_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != anime_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/anime/AnimeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KitsuSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['anime01', 'anime02', 'anime03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KITSU_TEST_ANIME_ENTID': idmap,
        'KITSU_TEST_LIVE': 'FALSE',
        'KITSU_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['KITSU_TEST_ANIME_ENTID'];
    const live = 'TRUE' === env.KITSU_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KITSU_TEST_ANIME_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KitsuSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KITSU_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=AnimeEntity.test.js.map
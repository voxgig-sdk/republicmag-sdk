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
(0, node_test_1.describe)('PostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when REPUBLICMAG_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('REPUBLICMAG_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RepublicmagSDK.test();
        const ent = testsdk.Post();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.REPUBLICMAG_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "author", "req": false, "short": "Author of the post", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "category", "req": false, "short": "Category of the post (politics, economics, society, culture, etc.)", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "content", "req": false, "short": "Full content of the post", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "excerpt", "req": false, "short": "Short excerpt or summary of the post", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the post", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "uri", "name": "imageUrl", "req": false, "short": "URL to the post's featured image", "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "date-time", "name": "publishedAt", "req": true, "short": "Publication date and time of the post", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "tags", "req": false, "short": "Tags associated with the post", "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "title", "req": true, "short": "Title of the post", "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "Last update date and time of the post", "type": "`$STRING`", "index$": 9 }, { "active": true, "format": "uri", "name": "url", "req": false, "short": "URL to the full post on republicmag.io", "type": "`$STRING`", "index$": 10 }], "id": { "field": "id", "name": "id" }, "name": "post", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/posts/recent", "json": "{\"operationId\":\"getPostsRecent\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"author\":{\"description\":\"Author of the post\",\"type\":\"string\"},\"category\":{\"description\":\"Category of the post (politics, economics, society, culture, etc.)\",\"enum\":[\"politics\",\"economics\",\"society\",\"culture\",\"analytics\",\"news\",\"commentary\"],\"type\":\"string\"},\"content\":{\"description\":\"Full content of the post\",\"type\":\"string\"},\"excerpt\":{\"description\":\"Short excerpt or summary of the post\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the post\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to the post's featured image\",\"format\":\"uri\",\"type\":\"string\"},\"publishedAt\":{\"description\":\"Publication date and time of the post\",\"format\":\"date-time\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags associated with the post\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the post\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update date and time of the post\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the full post on republicmag.io\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"publishedAt\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with recent posts\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/posts/recent", "segments": [{ "lit": "api" }, { "lit": "posts" }, { "lit": "recent" }], "select": { "$action": "recent" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 0 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "post_ref01" } }], "index$": 0 }] }, 'Post');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let post_ref01_data = Object.values(setup.data.existing.post)[0];
        // LIST
        const post_ref01_ent = client.Post();
        const post_ref01_match = {};
        const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/post/PostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RepublicmagSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['post01', 'post02', 'post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'REPUBLICMAG_TEST_POST_ENTID': idmap,
        'REPUBLICMAG_TEST_LIVE': 'FALSE',
        'REPUBLICMAG_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['REPUBLICMAG_TEST_POST_ENTID'];
    const live = 'TRUE' === env.REPUBLICMAG_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['REPUBLICMAG_TEST_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RepublicmagSDK(merge([
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
        explain: 'TRUE' === env.REPUBLICMAG_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PostEntity.test.js.map
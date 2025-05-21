"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/gpt/route";
exports.ids = ["app/api/gpt/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Froute&page=%2Fapi%2Fgpt%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Froute.ts&appDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Froute&page=%2Fapi%2Fgpt%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Froute.ts&appDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_don_Desktop_ai_meal_planner_app_api_gpt_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/gpt/route.ts */ \"(rsc)/./app/api/gpt/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/gpt/route\",\n        pathname: \"/api/gpt\",\n        filename: \"route\",\n        bundlePath: \"app/api/gpt/route\"\n    },\n    resolvedPagePath: \"/Users/don/Desktop/ai-meal-planner/app/api/gpt/route.ts\",\n    nextConfigOutput,\n    userland: _Users_don_Desktop_ai_meal_planner_app_api_gpt_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/gpt/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZncHQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdwdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdwdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRvbiUyRkRlc2t0b3AlMkZhaS1tZWFsLXBsYW5uZXIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGZG9uJTJGRGVza3RvcCUyRmFpLW1lYWwtcGxhbm5lciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvP2ZiYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2Rvbi9EZXNrdG9wL2FpLW1lYWwtcGxhbm5lci9hcHAvYXBpL2dwdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ3B0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ3B0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ncHQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZG9uL0Rlc2t0b3AvYWktbWVhbC1wbGFubmVyL2FwcC9hcGkvZ3B0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dwdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Froute&page=%2Fapi%2Fgpt%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Froute.ts&appDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/gpt/route.ts":
/*!******************************!*\
  !*** ./app/api/gpt/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_gpt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/gpt */ \"(rsc)/./libs/gpt.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function POST(request) {\n    try {\n        const { messages, userId, max, temp } = await request.json();\n        const result = await (0,_libs_gpt__WEBPACK_IMPORTED_MODULE_0__.sendOpenAi)(messages, userId, max, temp);\n        console.log(\"test gpt nextjs api\", result);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            result\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Failed to process request\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dwdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDRztBQUVwQyxlQUFlRSxLQUFLQyxPQUFnQjtJQUN2QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNSixRQUFRSyxJQUFJO1FBQzFELE1BQU1DLFNBQVMsTUFBTVQscURBQVVBLENBQUNJLFVBQVVDLFFBQVFDLEtBQUtDO1FBQ3ZERyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRjtRQUNuQyxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDO1FBQU87SUFDdEMsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBT1gscURBQVlBLENBQUNPLElBQUksQ0FBQztZQUFFSSxPQUFPO1FBQTRCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25GO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8uL2FwcC9hcGkvZ3B0L3JvdXRlLnRzPzNhODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZE9wZW5BaSB9IGZyb20gJ0AvbGlicy9ncHQnO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcywgdXNlcklkLCBtYXgsIHRlbXAgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzZW5kT3BlbkFpKG1lc3NhZ2VzLCB1c2VySWQsIG1heCwgdGVtcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGdwdCBuZXh0anMgYXBpJywgcmVzdWx0KVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByZXN1bHQgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gcHJvY2VzcyByZXF1ZXN0JyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn0gIl0sIm5hbWVzIjpbInNlbmRPcGVuQWkiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsIm1lc3NhZ2VzIiwidXNlcklkIiwibWF4IiwidGVtcCIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/gpt/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/gpt.ts":
/*!*********************!*\
  !*** ./libs/gpt.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendOpenAi: () => (/* binding */ sendOpenAi)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n\n// Use this if you want to make a call to OpenAI GPT-4 for instance. userId is used to identify the user on openAI side.\nconst sendOpenAi = async (messages, userId, max = 1000, temp = 1)=>{\n    const url = \"https://api.vveai.com/v1/chat/completions\";\n    console.log(\"Ask GPT >>>\");\n    messages.map((m)=>console.log(\" - \" + m.role.toUpperCase() + \": \" + m.content));\n    const body = JSON.stringify({\n        model: \"gpt-4\",\n        messages,\n        max_tokens: max,\n        temperature: temp,\n        user: userId\n    });\n    const options = {\n        headers: {\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    try {\n        console.log(\"test gpt lib url body options\", url, body, options);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(url, body, options);\n        console.log(\"test gpt lib res\", res);\n        const answer = res.data.choices[0].message.content;\n        const usage = res?.data?.usage;\n        console.log(\">>> \" + answer);\n        console.log(\"TOKENS USED: \" + usage?.total_tokens + \" (prompt: \" + usage?.prompt_tokens + \" / response: \" + usage?.completion_tokens + \")\");\n        console.log(\"\\n\");\n        return answer;\n    } catch (e) {\n        console.error(\"GPT Error: \" + e?.response?.status, e?.response?.data);\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL2dwdC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUUxQix3SEFBd0g7QUFDakgsTUFBTUMsYUFBYSxPQUN4QkMsVUFDQUMsUUFDQUMsTUFBTSxJQUFJLEVBQ1ZDLE9BQU8sQ0FBQztJQUVSLE1BQU1DLE1BQU07SUFFWkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1pOLFNBQVNPLEdBQUcsQ0FBQyxDQUFDQyxJQUNaSCxRQUFRQyxHQUFHLENBQUMsUUFBUUUsRUFBRUMsSUFBSSxDQUFDQyxXQUFXLEtBQUssT0FBT0YsRUFBRUcsT0FBTztJQUc3RCxNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUM7UUFDMUJDLE9BQU87UUFDUGY7UUFDQWdCLFlBQVlkO1FBQ1plLGFBQWFkO1FBQ2JlLE1BQU1qQjtJQUNSO0lBRUEsTUFBTWtCLFVBQVU7UUFDZEMsU0FBUztZQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEsSUFBSTtRQUNGbkIsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0YsS0FBS1EsTUFBTU87UUFDeEQsTUFBTU0sTUFBTSxNQUFNM0IsNkNBQUtBLENBQUM0QixJQUFJLENBQUN0QixLQUFLUSxNQUFNTztRQUN4Q2QsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQm1CO1FBRWhDLE1BQU1FLFNBQVNGLElBQUlHLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDbkIsT0FBTztRQUNsRCxNQUFNb0IsUUFBUU4sS0FBS0csTUFBTUc7UUFFekIxQixRQUFRQyxHQUFHLENBQUMsU0FBU3FCO1FBQ3JCdEIsUUFBUUMsR0FBRyxDQUNULGtCQUNBeUIsT0FBT0MsZUFDUCxlQUNBRCxPQUFPRSxnQkFDUCxrQkFDQUYsT0FBT0csb0JBQ1A7UUFFRjdCLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE9BQU9xQjtJQUNULEVBQUUsT0FBT1EsR0FBRztRQUNWOUIsUUFBUStCLEtBQUssQ0FBQyxnQkFBZ0JELEdBQUdFLFVBQVVDLFFBQVFILEdBQUdFLFVBQVVUO1FBQ2hFLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8uL2xpYnMvZ3B0LnRzPzFmZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gVXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gbWFrZSBhIGNhbGwgdG8gT3BlbkFJIEdQVC00IGZvciBpbnN0YW5jZS4gdXNlcklkIGlzIHVzZWQgdG8gaWRlbnRpZnkgdGhlIHVzZXIgb24gb3BlbkFJIHNpZGUuXG5leHBvcnQgY29uc3Qgc2VuZE9wZW5BaSA9IGFzeW5jIChcbiAgbWVzc2FnZXM6IGFueVtdLCAvLyBUT0RPOiB0eXBlIHRoaXNcbiAgdXNlcklkOiBzdHJpbmcsXG4gIG1heCA9IDEwMDAsXG4gIHRlbXAgPSAxXG4pID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnZ2ZWFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJztcblxuICBjb25zb2xlLmxvZygnQXNrIEdQVCA+Pj4nKTtcbiAgbWVzc2FnZXMubWFwKChtKSA9PlxuICAgIGNvbnNvbGUubG9nKCcgLSAnICsgbS5yb2xlLnRvVXBwZXJDYXNlKCkgKyAnOiAnICsgbS5jb250ZW50KVxuICApO1xuXG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgbW9kZWw6ICdncHQtNCcsXG4gICAgbWVzc2FnZXMsXG4gICAgbWF4X3Rva2VuczogbWF4LFxuICAgIHRlbXBlcmF0dXJlOiB0ZW1wLFxuICAgIHVzZXI6IHVzZXJJZCxcbiAgfSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVl9YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcblxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0IGdwdCBsaWIgdXJsIGJvZHkgb3B0aW9ucycsIHVybCwgYm9keSwgb3B0aW9ucylcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgYm9keSwgb3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QgZ3B0IGxpYiByZXMnLCByZXMpXG5cbiAgICBjb25zdCBhbnN3ZXIgPSByZXMuZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudDtcbiAgICBjb25zdCB1c2FnZSA9IHJlcz8uZGF0YT8udXNhZ2U7XG5cbiAgICBjb25zb2xlLmxvZygnPj4+ICcgKyBhbnN3ZXIpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ1RPS0VOUyBVU0VEOiAnICtcbiAgICAgIHVzYWdlPy50b3RhbF90b2tlbnMgK1xuICAgICAgJyAocHJvbXB0OiAnICtcbiAgICAgIHVzYWdlPy5wcm9tcHRfdG9rZW5zICtcbiAgICAgICcgLyByZXNwb25zZTogJyArXG4gICAgICB1c2FnZT8uY29tcGxldGlvbl90b2tlbnMgK1xuICAgICAgJyknXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7XG5cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignR1BUIEVycm9yOiAnICsgZT8ucmVzcG9uc2U/LnN0YXR1cywgZT8ucmVzcG9uc2U/LmRhdGEpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwic2VuZE9wZW5BaSIsIm1lc3NhZ2VzIiwidXNlcklkIiwibWF4IiwidGVtcCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtIiwicm9sZSIsInRvVXBwZXJDYXNlIiwiY29udGVudCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWwiLCJtYXhfdG9rZW5zIiwidGVtcGVyYXR1cmUiLCJ1c2VyIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwicmVzIiwicG9zdCIsImFuc3dlciIsImRhdGEiLCJjaG9pY2VzIiwibWVzc2FnZSIsInVzYWdlIiwidG90YWxfdG9rZW5zIiwicHJvbXB0X3Rva2VucyIsImNvbXBsZXRpb25fdG9rZW5zIiwiZSIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/gpt.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Froute&page=%2Fapi%2Fgpt%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Froute.ts&appDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdon%2FDesktop%2Fai-meal-planner&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
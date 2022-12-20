(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{483:function(e,t,a){"use strict";a.r(t);var s=a(62),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pagination-settings-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination-settings-api"}},[e._v("#")]),e._v(" Pagination Settings API")]),e._v(" "),a("h2",{attrs:{id:"_1-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),a("p",[e._v("This specification describes the customizable options for the pagination settings.")]),e._v(" "),a("h2",{attrs:{id:"_2-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),a("p",[e._v("Despite the default values that work out-of-the-box for most users, some need to go further in customization.")]),e._v(" "),a("p",[e._v("This settings will host the parameters to configure the paging behavior for an index.")]),e._v(" "),a("h2",{attrs:{id:"_3-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),a("h3",{attrs:{id:"_3-1-pagination-api-resource-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-pagination-api-resource-definition"}},[e._v("#")]),e._v(" 3.1. "),a("code",[e._v("pagination")]),e._v(" API resource definition")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Field")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Required")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#311-maxTotalHits"}},[e._v("maxTotalHits")])]),e._v(" "),a("td",[e._v("Integer")]),e._v(" "),a("td",[e._v("False")])])])]),e._v(" "),a("h4",{attrs:{id:"_3-1-1-maxtotalhits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-maxtotalhits"}},[e._v("#")]),e._v(" 3.1.1. "),a("code",[e._v("maxTotalHits")])]),e._v(" "),a("ul",[a("li",[e._v("Type: Integer")]),e._v(" "),a("li",[e._v("Required: False")]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("1000")])])]),e._v(" "),a("p",[e._v("Define the maximum number of documents reachable for a search request.")]),e._v(" "),a("p",[e._v("e.g. It means that with the default value of "),a("code",[e._v("1000")]),e._v(", it is not possible to see the "),a("code",[e._v("1001")]),e._v("st result for a "),a("strong",[e._v("search query")]),e._v(".")]),e._v(" "),a("p",[e._v("The value of 1000 ensures good performance and prevents malicious users from scraping documents from a Meilisearch instance.")]),e._v(" "),a("p",[e._v("Increasing this value can degrade performance as well as expose the data of an instance to scrapping.")]),e._v(" "),a("h2",{attrs:{id:"_3-2-api-endpoints-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2. API Endpoints Definition")]),e._v(" "),a("h3",{attrs:{id:"_3-2-1-global-settings-api-endpoints-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-global-settings-api-endpoints-definition"}},[e._v("#")]),e._v(" 3.2.1. Global Settings API Endpoints Definition")]),e._v(" "),a("p",[a("code",[e._v("pagination")]),e._v(" is a sub-resource of "),a("code",[e._v("/indexes/:index_uid/settings")]),e._v(".")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0123-settings-api.html"}},[e._v("Settings API")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"_3-2-2-indexes-index-uid-settings-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-indexes-index-uid-settings-pagination"}},[e._v("#")]),e._v(" 3.2.2. "),a("code",[e._v("indexes/:index_uid/settings/pagination")])]),e._v(" "),a("p",[e._v("Manage the pagination configuration for an index.")]),e._v(" "),a("h4",{attrs:{id:"_3-2-2-1-get-indexes-index-uid-settings-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-1-get-indexes-index-uid-settings-pagination"}},[e._v("#")]),e._v(" 3.2.2.1. "),a("code",[e._v("GET")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/pagination")])]),e._v(" "),a("p",[e._v("Allow fetching the current definition of the pagination setting for an index.")]),e._v(" "),a("p",[a("code",[e._v("200")]),e._v(" - Response body")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxTotalHits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("All properties must be returned when the resource is retrieved.")]),e._v(" "),a("h5",{attrs:{id:"_3-2-2-1-2-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-1-2-errors"}},[e._v("#")]),e._v(" 3.2.2.1.2. Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 If the index does not exist, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error.")],1)]),e._v(" "),a("h4",{attrs:{id:"_3-2-2-2-patch-indexes-index-uid-settings-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-patch-indexes-index-uid-settings-pagination"}},[e._v("#")]),e._v(" 3.2.2.2. "),a("code",[e._v("PATCH")]),e._v(" - "),a("code",[e._v("indexes/:index_uid/settings/pagination")])]),e._v(" "),a("p",[e._v("Allow customizing partially the settings of the pagination for an index.")]),e._v(" "),a("p",[e._v("Request payload")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxTotalHits"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("code",[e._v("202 Accepted")]),e._v(" - Example Response")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"indexUid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"books"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"enqueued"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"settingsUpdate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enqueuedAt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2022-03-01T18:39:29.228155Z"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h5",{attrs:{id:"_3-2-2-2-1-response-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-1-response-definition"}},[e._v("#")]),e._v(" 3.2.2.2.1. Response Definition")]),e._v(" "),a("p",[e._v("When the request is successful, Meilisearch returns the HTTP code "),a("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),a("code",[e._v("task")]),e._v(" Object for "),a("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"_3-2-2-2-2-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-2-errors"}},[e._v("#")]),e._v(" 3.2.2.2.2. Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 Omitting Content-Type header returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_content_type"}},[e._v("missing_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an empty Content-Type returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending a different Content-Type than "),a("code",[e._v("application/json")]),e._v(" returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_content_type"}},[e._v("invalid_content_type")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an empty payload returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_payload"}},[e._v("missing_payload")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending an invalid JSON payload returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#malformed_payload"}},[e._v("malformed_payload")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Sending a value different from "),a("code",[e._v("null")]),e._v(" or with a different type than "),a("code",[e._v("Integer")]),e._v(" for the "),a("code",[e._v("maxTotalHits")]),e._v(" field returns a\n"),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#bad_request"}},[e._v("bad_request")]),e._v(" error.")],1)]),e._v(" "),a("h6",{attrs:{id:"_3-2-2-2-2-1-async-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-2-1-async-errors"}},[e._v("#")]),e._v(" 3.2.2.2.2.1. Async Errors")]),e._v(" "),a("ul",[a("li",[e._v("🔴 When Meilisearch is secured, if the API Key do not have the "),a("code",[e._v("indexes.create")]),e._v(" action defined, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related asynchronous "),a("code",[e._v("task")]),e._v(" resource. See "),a("a",{attrs:{href:"#32221-response-definition"}},[e._v("3.2.2.2.1. Response Definition")]),e._v(".")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Otherwise, Meilisearch will create the index in a lazy way. See "),a("a",{attrs:{href:"#32223-lazy-index-creation"}},[e._v("3.2.2.2.3. Lazy Index Creation")]),e._v(".")])]),e._v(" "),a("h5",{attrs:{id:"_3-2-2-2-3-lazy-index-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-2-3-lazy-index-creation"}},[e._v("#")]),e._v(" 3.2.2.2.3. Lazy Index Creation")]),e._v(" "),a("p",[e._v("If the requested "),a("code",[e._v("index_uid")]),e._v(" does not exist, and the authorization layer allows it (See "),a("a",{attrs:{href:"#322221-async-errors"}},[e._v("3.2.2.2.2.1. Async Errors")]),e._v("), Meilisearch will create the index when the related asynchronous task resource is executed. See "),a("a",{attrs:{href:"#32221-response-definition"}},[e._v("3.2.2.2.1. Response Definition")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"_3-2-2-3-delete-indexes-index-uid-settings-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-delete-indexes-index-uid-settings-pagination"}},[e._v("#")]),e._v(" 3.2.2.3. "),a("code",[e._v("DELETE")]),e._v("- "),a("code",[e._v("indexes/:index_uid/settings/pagination")])]),e._v(" "),a("p",[e._v("Allow resetting the pagination setting to the default for an index.")]),e._v(" "),a("h5",{attrs:{id:"_3-2-2-3-1-response-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-1-response-definition"}},[e._v("#")]),e._v(" 3.2.2.3.1. Response Definition")]),e._v(" "),a("p",[e._v("When the request is in a successful state, Meilisearch returns the HTTP code "),a("code",[e._v("202 Accepted")]),e._v(". The response's content is the summarized representation of the received asynchronous task.")]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/specifications/text/0060-tasks-api.html#summarized-task-object-for-202-accepted"}},[e._v("Summarized "),a("code",[e._v("task")]),e._v(" Object for "),a("code",[e._v("202 Accepted")])]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"_3-2-2-3-2-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-2-errors"}},[e._v("#")]),e._v(" 3.2.2.3.2. Errors")]),e._v(" "),a("h6",{attrs:{id:"_3-2-2-3-2-1-asynchronous-index-not-found-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-3-2-1-asynchronous-index-not-found-error"}},[e._v("#")]),e._v(" 3.2.2.3.2.1. Asynchronous Index Not Found Error")]),e._v(" "),a("ul",[a("li",[e._v("🔴 If the requested "),a("code",[e._v("index_uid")]),e._v(" does not exist, the API returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#index_not_found"}},[e._v("index_not_found")]),e._v(" error in the related async "),a("code",[e._v("task")]),e._v(" resource. See "),a("a",{attrs:{href:"#32231-response-definition"}},[e._v("3.2.2.3.1. Response Definition")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"_3-2-3-general-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-general-errors"}},[e._v("#")]),e._v(" 3.2.3. General Errors")]),e._v(" "),a("p",[e._v("These errors apply to all endpoints described here.")]),e._v(" "),a("h4",{attrs:{id:"_3-2-3-1-auth-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-1-auth-errors"}},[e._v("#")]),e._v(" 3.2.3.1. Auth Errors")]),e._v(" "),a("p",[e._v("The auth layer can return the following errors if Meilisearch is secured (a master-key is defined).")]),e._v(" "),a("ul",[a("li",[e._v("🔴 Accessing this route without the "),a("code",[e._v("Authorization")]),e._v(" header returns a "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#missing_authorization_header"}},[e._v("missing_authorization_header")]),e._v(" error.")],1),e._v(" "),a("li",[e._v("🔴 Accessing this route with a key that does not have permissions (i.e. other than the master-key) returns an "),a("RouterLink",{attrs:{to:"/specifications/text/0061-error-format-and-definitions.html#invalid_api_key"}},[e._v("invalid_api_key")]),e._v(" error.")],1)]),e._v(" "),a("h2",{attrs:{id:"_2-technical-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-technical-details"}},[e._v("#")]),e._v(" 2. Technical Details")]),e._v(" "),a("p",[e._v("n/a")]),e._v(" "),a("h2",{attrs:{id:"_3-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-future-possibilities"}},[e._v("#")]),e._v(" 3. Future Possibilities")]),e._v(" "),a("ul",[a("li",[e._v("Introduces parameters regarding the pagination.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
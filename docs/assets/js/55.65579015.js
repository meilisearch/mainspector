(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{479:function(e,t,s){"use strict";s.r(t);var a=s(62),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compression-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compression-headers"}},[e._v("#")]),e._v(" Compression Headers")]),e._v(" "),s("h2",{attrs:{id:"_1-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),s("p",[e._v("Send and receive compressed payload, using the "),s("code",[e._v("Accept-Encoding")]),e._v(" and "),s("code",[e._v("Content-Encoding")]),e._v(" HTTP headers.")]),e._v(" "),s("p",[e._v("Meilisearch supports "),s("code",[e._v("gzip")]),e._v(", "),s("code",[e._v("deflate")]),e._v(" and "),s("code",[e._v("brotli")]),e._v(" compression methods.")]),e._v(" "),s("h2",{attrs:{id:"_2-motivation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),s("p",[e._v("Compression HTTP headers can be used to improve transfer speed and to reduce bandwidth consumption by sending/receiving compressed, smaller payload.")]),e._v(" "),s("h2",{attrs:{id:"_3-functional-specification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),s("h3",{attrs:{id:"_3-1-supported-compression-algorithms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-supported-compression-algorithms"}},[e._v("#")]),e._v(" 3.1. Supported Compression Algorithms")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("name")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("gzip")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("br")]),e._v(" (refers to brotli)")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("deflate")])])])])]),e._v(" "),s("h3",{attrs:{id:"_3-2-sending-a-compressed-payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-sending-a-compressed-payload"}},[e._v("#")]),e._v(" 3.2. Sending a compressed payload")]),e._v(" "),s("p",[e._v("Specify the algorithm used to compress the payload being sent to Meilisearch within the "),s("code",[e._v("Content-Encoding")]),e._v(" header.")]),e._v(" "),s("p",[e._v("See "),s("a",{attrs:{href:"https://httpwg.org/specs/rfc9110.html#field.content-encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC9110"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"_3-2-1-example-with-gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-example-with-gzip"}},[e._v("#")]),e._v(" 3.2.1 Example with "),s("code",[e._v("gzip")])]),e._v(" "),s("p",[s("code",[e._v("cat ~/movies.json | gzip | curl -X POST 'http://localhost:7700/indexes/movies/documents' --data-binary @- -H 'Content-Type: application/json' -H 'Content-Encoding: gzip'")])]),e._v(" "),s("h3",{attrs:{id:"_3-3-receiving-a-compressed-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-receiving-a-compressed-response"}},[e._v("#")]),e._v(" 3.3. Receiving a compressed response")]),e._v(" "),s("p",[e._v("Specify to Meilisearch the compression methods to use by order of preference when sending a response to a client within the "),s("code",[e._v("Accept-Encoding")]),e._v(" header.")]),e._v(" "),s("p",[e._v("See "),s("a",{attrs:{href:"https://httpwg.org/specs/rfc9110.html#field.accept-encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC9110"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h4",{attrs:{id:"_3-3-1-example-with-gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-example-with-gzip"}},[e._v("#")]),e._v(" 3.3.1. Example with "),s("code",[e._v("gzip")])]),e._v(" "),s("p",[s("code",[e._v("curl -sH 'Accept-encoding: gzip' 'http://localhost:7700/indexes/movies/search' | gunzip -")])]),e._v(" "),s("h2",{attrs:{id:"_4-technical-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),s("p",[e._v("N/A")]),e._v(" "),s("h2",{attrs:{id:"_5-future-possibilities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),s("ul",[s("li",[e._v("Support "),s("code",[e._v("zstd")]),e._v(" compression method.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
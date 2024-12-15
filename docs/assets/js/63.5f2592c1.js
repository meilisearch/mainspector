(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{489:function(e,t,a){"use strict";a.r(t);var r=a(62),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ranking-score"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranking-score"}},[e._v("#")]),e._v(" Ranking Score")]),e._v(" "),a("h2",{attrs:{id:"_1-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-summary"}},[e._v("#")]),e._v(" 1. Summary")]),e._v(" "),a("p",[e._v("Adds two kinds of scores to documents returned by a "),a("RouterLink",{attrs:{to:"/specifications/text/0118-search-api.html"}},[e._v("search query")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"_2-motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-motivation"}},[e._v("#")]),e._v(" 2. Motivation")]),e._v(" "),a("p",[e._v("When configuring the Meilisearch relevancy according to their needs, users cannot know why one document has been favored over another.")]),e._v(" "),a("p",[e._v("Showing how the documents ranked according to Meilisearch’s ranking rules unlocks:")]),e._v(" "),a("ul",[a("li",[e._v("Further customization of the developer workflow, such as fine-tuning settings and improving relevancy for example.")]),e._v(" "),a("li",[e._v("Returning a unified list of results for multi-index search queries")]),e._v(" "),a("li",[e._v("Sharding")]),e._v(" "),a("li",[e._v("Debugging and helping users better understand how ranking works")])]),e._v(" "),a("h2",{attrs:{id:"_3-functional-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-functional-specification"}},[e._v("#")]),e._v(" 3. Functional Specification")]),e._v(" "),a("h3",{attrs:{id:"_3-1-ranking-score"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-ranking-score"}},[e._v("#")]),e._v(" 3.1. Ranking score")]),e._v(" "),a("p",[e._v("A ranking score is a number attached to each document returned by a search when the "),a("RouterLink",{attrs:{to:"/specifications/text/0118-search-api.html#3117-showrankingscore"}},[a("code",[e._v("showRankingScore")])]),e._v(" flag is set to true in the search query.")],1),e._v(" "),a("h4",{attrs:{id:"_3-1-1-scale-and-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-scale-and-interpretation"}},[e._v("#")]),e._v(" 3.1.1. Scale and interpretation")]),e._v(" "),a("p",[e._v("The ranking score is contained between 1.0 and 0.0. A higher score signifies better relevancy, with 1.0 representing a perfect match, and 0.0 indicating that the document does not match the query (Meilisearch should not return documents that do not match the query).")]),e._v(" "),a("p",[e._v("That number rates the relevancy of the document with respect to the specified search query and the current settings of the index.")]),e._v(" "),a("p",[e._v("The score of a document follows its relevancy in the sense of Meilisearch, in that the first few ranking rules have a much higher influence on the score than the next rules. This is consistent with the way that later ranking rules are only used to break ties with earlier ranking rules, when ranking documents.")]),e._v(" "),a("h4",{attrs:{id:"_3-1-2-score-independence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-score-independence"}},[e._v("#")]),e._v(" 3.1.2. Score independence")]),e._v(" "),a("p",[e._v("The score of a document is independent of what other documents are contained in the index but is influenced by the settings of the index. The table below details all the settings that can influence the score. Unlisted settings do not influence the ranking score.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Setting name")]),e._v(" "),a("th",[e._v("Influences if")]),e._v(" "),a("th",[e._v("Rationale")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("searchableAttributes")])]),e._v(" "),a("td",[e._v("The "),a("code",[e._v("attribute")]),e._v(" ranking rule is used")]),e._v(" "),a("td",[e._v("The "),a("code",[e._v("attribute")]),e._v(" ranking rule rates the document depending on the attribute in which the query terms show up. The order is determined by "),a("code",[e._v("searchableAttributes")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("rankingRules")])]),e._v(" "),a("td",[e._v("Always")]),e._v(" "),a("td",[e._v("The score is computed by computing the subscore of each ranking rule with a weight that depends on their order.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("stopWords")])]),e._v(" "),a("td",[e._v("Always")]),e._v(" "),a("td",[e._v("Stop words influence the "),a("code",[e._v("words")]),e._v(" ranking rule, which is almost always used")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("synonyms")])]),e._v(" "),a("td",[e._v("Always")]),e._v(" "),a("td",[e._v("Synonyms influence the "),a("code",[e._v("words")]),e._v(" ranking rule, which is almost always used")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("typoTolerance")])]),e._v(" "),a("td",[e._v("The "),a("code",[e._v("typo")]),e._v(" ranking rule is used")]),e._v(" "),a("td",[e._v("Used to compute the maximum number of typos for a query")])])])]),e._v(" "),a("p",[e._v("Additionally, the following can impact score independence:")]),e._v(" "),a("ul",[a("li",[e._v("If the "),a("code",[e._v("attribute")]),e._v(" ranking rule is used, but "),a("code",[e._v("searchableAttributes")]),e._v(" has not been specified, then the score is dependent on all the fields that appear in documents and their precise order, as determined by Meilisearch.\nthe score is dependent on the search query.")])]),e._v(" "),a("p",[e._v("Depending on the use case, it can be meaningful to compare scores coming from indexes with settings that are different:")]),e._v(" "),a("ul",[a("li",[e._v("When comparing two scores produced on two indexes with different settings, possibly on a distinct search query, one is comparing the relevancy of each of the scored documents to their respective search query. This is good to present the most relevant documents first when working with heterogeneous indexes, without taking into account which document best suits one single query.")]),e._v(" "),a("li",[e._v("On the other hand, to find what document best suits one single query against two homogeneous indexes, one must be careful to make sure that the indexes have the settings above set to the same value.")])]),e._v(" "),a("h4",{attrs:{id:"_3-1-3-the-sort-ranking-rules-do-not-impact-the-score"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-the-sort-ranking-rules-do-not-impact-the-score"}},[e._v("#")]),e._v(" 3.1.3. The sort ranking rules do not impact the score")]),e._v(" "),a("p",[e._v("Custom "),a("code",[e._v("sort")]),e._v(" and "),a("code",[e._v("geosort")]),e._v(" ranking rules modify the ranking of documents such that they are returned sorted by the value of the target field, rather than by their relevancy to the search query.")]),e._v(" "),a("p",[e._v("As such, these ranking rules have no impact on the score. As a corollary of this, if a "),a("code",[e._v("sort")]),e._v(" ranking rule is not the last ranking rule, then it is possible to see documents returned with ranking scores that are not monotonically decreasing.")]),e._v(" "),a("p",[e._v("Similarly, re-ranking documents by their ranking score will ignore any "),a("code",[e._v("sort")]),e._v(" ranking rule.")]),e._v(" "),a("p",[e._v("If you need to factor sort ranking rules into your score, then use the "),a("a",{attrs:{href:"#32-ranking-score-details"}},[e._v("ranking score details")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_3-2-ranking-score-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-ranking-score-details"}},[e._v("#")]),e._v(" 3.2. Ranking score details")]),e._v(" "),a("p",[e._v("The ranking score details are represented as an object attached to each document returned by a search when the "),a("RouterLink",{attrs:{to:"/specifications/text/0118-search-api.html#3118-showrankingscoredetails"}},[a("code",[e._v("showRankingScoreDetails")])]),e._v(" flag is set to true in the search query.")],1),e._v(" "),a("h4",{attrs:{id:"_3-2-1-general-shape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-general-shape"}},[e._v("#")]),e._v(" 3.2.1. General shape")]),e._v(" "),a("p",[e._v("The fields of the object have for key the identifier of the various ranking rules that were applied, and for value an object with at least the following field:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("order")]),e._v(": the numerical order in which the ranking rule was applied. Starts at 0. Consecutive numbers denote ranking rules consecutively applied.")])]),e._v(" "),a("p",[e._v("Additionally, all ranking rules except the "),a("code",[e._v("sort")]),e._v(" and "),a("code",[e._v("geosort")]),e._v(" ranking rules have the following field:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("score")]),e._v(": the relevancy score of the document relative to this search query, for this ranking rule. A number between 1.0 and 0.0, with 1.0 meaning a perfect match to the query according to the ranking rule, and 0.0 no match.")])]),e._v(" "),a("h4",{attrs:{id:"_3-2-2-ranking-rule-specific-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-ranking-rule-specific-fields"}},[e._v("#")]),e._v(" 3.2.2. Ranking-rule-specific fields")]),e._v(" "),a("p",[e._v("Each ranking rule exposes specific fields meant to provide semantic information about how the ranking rule was applied to the document.")]),e._v(" "),a("p",[e._v("The table below details these rule-specific fields.")]),e._v(" "),a("p",[e._v("​")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Ranking rule")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Field description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("words")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("ul",[a("li",[a("code",[e._v("matchingWords")]),e._v(": Number of words in the query that match in the document. The higher the better")]),a("li",[a("code",[e._v("maxMatchingWords")]),e._v(": Maximum number of words in the query that can match in the document for this iteration of the "),a("code",[e._v("words")]),e._v(" ranking rule. Usually, the query length, but if one of the query terms is set as a stop word, it won’t be counted here.")])])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("typo")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("ul",[a("li",[a("code",[e._v("typoCount")]),e._v(": Number of typos to correct in the query so that the document matches for this iteration of the "),a("code",[e._v("typo")]),e._v(" ranking rule.")]),a("li",[a("code",[e._v("maxTypoCount")]),e._v(": Maximum number of typos possible in a document for this iteration of the "),a("code",[e._v("typo")]),e._v(" ranking rule.")])])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("proximity")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("No rule-specific field")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("attribute")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("ul",[a("li",[a("code",[e._v("attributeRankingOrderScore")]),e._v(": Results sorted based on the attribute ranking order")]),a("li",[a("code",[e._v("queryWordDistanceScore")]),e._v(": Documents with attributes containing the query words close to their position in the query will be considered more relevant than documents containing the query words far from their position in the query")])])])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("exactness")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("ul",[a("li",[a("code",[e._v("matchType")]),e._v(": It has one of the following values:"),a("ul",[a("li",[a("code",[e._v("exactMatch")]),e._v(": The query exactly matches the entire value of an attribute")]),a("li",[a("code",[e._v("matchesStart")]),e._v(": The query matches exactly the start of the value of an attribute")]),a("li",[a("code",[e._v("noExactMatch")]),e._v(": The query doesn't exactly match a document ")])])]),a("li",[a("code",[e._v("matchingWords")]),e._v(": for "),a("code",[e._v("matchesStart")]),e._v(", the number of exact words contained in an attribute. The higher the better")]),a("li",[a("code",[e._v("maxMatchingWords")]),e._v(": for "),a("code",[e._v("noExactMatch")]),e._v(", the maximum number of exact words contained in an attribute")])])])])])]),e._v(" "),a("h4",{attrs:{id:"_3-2-3-sort-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-sort-ranking-rules"}},[e._v("#")]),e._v(" 3.2.3. Sort ranking rules")]),e._v(" "),a("p",[a("code",[e._v("Sort")]),e._v(", "),a("code",[e._v("_geosort")]),e._v(" and (EXPERIMENTAL) "),a("code",[e._v("vectorSort")]),e._v(" ranking rules appear as fields in the score details, but with the following difference:")]),e._v(" "),a("ul",[a("li",[e._v("Their key follows the following format: "),a("code",[e._v("{:attribute-sorted-on}:{:sort-direction}")]),e._v(", with the "),a("code",[e._v(":attribute-sorted-on")]),e._v(" the name of the attribute that is being sorted on, and the "),a("code",[e._v(":sort-direction")]),e._v(" either "),a("code",[e._v("asc")]),e._v(" if the sort is in ascending order, or "),a("code",[e._v("desc")]),e._v(" if the sort is in descending order. For the "),a("code",[e._v("geosort")]),e._v(" ranking rule, it is similarly "),a("code",[e._v("_geoPoint({:lat}, {:lng}):{:sort-direction}")]),e._v(", with the "),a("code",[e._v(":lat")]),e._v(" and "),a("code",[e._v(":lng")]),e._v(" being the latitude and respective longitude of the point that serves as base to sort by distance. (EXPERIMENTAL) For the  "),a("code",[e._v("vectorSort")]),e._v(" ranking rule, it is similarly "),a("code",[e._v("vectorSort(:targetVector)")]),e._v(" with the "),a("code",[e._v(":targetVector")]),e._v(" being the searched for vector.")]),e._v(" "),a("li",[e._v("They don't have a "),a("code",[e._v("score")]),e._v(" field, but instead they have a "),a("code",[e._v("value")]),e._v(" field, representing the value used to sort the document. It is typically the value of the sorted attribute for the document, but can sometimes be a subvalue (case where the value is an array of values).")]),e._v(" "),a("li",[e._v("For the "),a("code",[e._v("_geosort")]),e._v(", there is an additional "),a("code",[e._v("distance")]),e._v(" field representing the distance between the target point and the point used in the document to sort the document.")]),e._v(" "),a("li",[e._v("(EXPERIMENTAL) for the "),a("code",[e._v("vectorSort")]),e._v(", there is an additional "),a("code",[e._v("similarity")]),e._v(" field representing the similarity between the target vector and the value vector.")])]),e._v(" "),a("h4",{attrs:{id:"_3-2-4-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-example"}},[e._v("#")]),e._v(" 3.2.4 Example")]),e._v(" "),a("p",[e._v("The following is an example of a "),a("code",[e._v("_scoreDetails")]),e._v(" returned for a document matching a search query.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"_rankingScoreDetails"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"words"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"matchingWords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxMatchingWords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"typo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"typoCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxTypoCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"proximity"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"attribute"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"attributes_ranking_order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.8333333333333334")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"attributes_query_word_order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.8333333333333334")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exactness"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"matchType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exactMatch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"score"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"release_date:asc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"order"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1165881600")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"_4-technical-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-technical-details"}},[e._v("#")]),e._v(" 4. Technical Details")]),e._v(" "),a("h3",{attrs:{id:"_4-1-ranking-score-calculation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ranking-score-calculation"}},[e._v("#")]),e._v(" 4.1. Ranking score calculation")]),e._v(" "),a("p",[e._v("The ranking score calculation in this section is given for informative purposes and is not normative.")]),e._v(" "),a("p",[e._v("The implementation computes the "),a("a",{attrs:{href:"#31-ranking-score"}},[e._v("ranking score")]),e._v(" from each ranking rule (excluding "),a("code",[e._v("sort")]),e._v(" and "),a("code",[e._v("geosort")]),e._v(") with two bits of data per ranking rule. For the "),a("code",[e._v("k")]),e._v("th applied ranking rule:")]),e._v(" "),a("ul",[a("li",[e._v("The maximum rank "),a("code",[e._v("max_rank_k")]),e._v(" that a document can score with the rule, "),a("a",{attrs:{href:"#312-score-independence"}},[e._v("independently from the other documents in the index")])]),e._v(" "),a("li",[e._v("The rank "),a("code",[e._v("rank_k")]),e._v(" of that document for that rule, with the highest rank being equal to the maximum rank, and the lowest rank being equal to 1.")])]),e._v(" "),a("p",[e._v("The score is given by the following formula, assuming "),a("code",[e._v("n")]),e._v(" ranking rules denoted from "),a("code",[e._v("0")]),e._v(" to "),a("code",[e._v("n-1")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("score = sum(i in 0..(n-1), (rank_i - 1) / product(j in 0..=i, max_rank_j)) + (rank_(n-1) / product(i in 0..n, max_rank_i))\n")])])]),a("p",[e._v("The intuition behind this formula is that every document falls in a range for each rule, between "),a("code",[e._v("rank_i / max_rank_i")]),e._v(" and "),a("code",[e._v("(rank_i - 1) / max_rank_i")]),e._v(", and the next ranking rule allows to refine where the document is in this range, with the last ranking rule providing the exact score.")]),e._v(" "),a("h3",{attrs:{id:"_4-2-hidden-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-hidden-ranking-rules"}},[e._v("#")]),e._v(" 4.2. Hidden ranking rules")]),e._v(" "),a("p",[e._v("If the "),a("RouterLink",{attrs:{to:"/specifications/text/0123-displayed-attributes-setting-api.html"}},[a("code",[e._v("displayedAttributes")])]),e._v(" list is defined, then attributes that are not part of that list, but are used in "),a("code",[e._v("sort")]),e._v(" ranking rules are "),a("strong",[e._v("hidden")]),e._v(".")],1),e._v(" "),a("p",[e._v("Instead of seeing "),a("code",[e._v("{:attribute-sorted-on}:{:sort-direction}")]),e._v(" like described in "),a("a",{attrs:{href:"#323-sort-ranking-rules"}},[e._v("the relevant section")]),e._v(", the name of that field is replaced with "),a("code",[e._v("<hidden-rule-{:number}>")]),e._v(", with "),a("code",[e._v("{:number}")]),e._v(" a number that serves to uniquely distinguish between such hidden rules.")]),e._v(" "),a("p",[e._v("Note: that number is not guaranteed to start at 0 nor to be consecutive. The only guarantee is that no hidden ranking rule will have the same number.")]),e._v(" "),a("p",[e._v("Furthermore, the "),a("code",[e._v("value")]),e._v(" that was used to sort the document is also hidden and replaced by "),a("code",[e._v('"<hidden>"')]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_4-3-disabled-optimization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-disabled-optimization"}},[e._v("#")]),e._v(" 4.3. Disabled optimization")]),e._v(" "),a("p",[e._v("The engine optimizes search by skipping the application of ranking rules when there's only one remaining document (no tie to break).")]),e._v(" "),a("p",[e._v("To compute an accurate score, however, all ranking rules must be applied, so this optimization is disabled as soon as a score is requested in the search request. When no scores are requested, the optimization is active.")]),e._v(" "),a("h2",{attrs:{id:"_5-future-possibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-future-possibilities"}},[e._v("#")]),e._v(" 5. Future Possibilities")]),e._v(" "),a("ul",[a("li",[e._v("Extend the "),a("RouterLink",{attrs:{to:"/specifications/text/0192-multi-search-api.html"}},[e._v("multi-search API")]),e._v(" to rerank documents according to their score, providing federated search.")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);
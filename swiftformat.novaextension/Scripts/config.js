function getRules() {
	var rules = [];
	if (nova.config.get("computer.gareth.swiftformat.rule.andOperator", "boolean")) {
		rules.push("andOperator");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.anyObjectProtocol", "boolean")) {
		rules.push("anyObjectProtocol");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.blankLinesAroundMark", "boolean")) {
		rules.push("blankLinesAroundMark");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.blankLinesAtEndOfScope", "boolean")) {
		rules.push("blankLinesAtEndOfScope");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.blankLinesAtStartOfScope", "boolean")) {
		rules.push("blankLinesAtStartOfScope");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.blankLinesBetweenScopes", "boolean")) {
		rules.push("blankLinesBetweenScopes");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.braces", "boolean")) {
		rules.push("braces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.consecutiveBlankLines", "boolean")) {
		rules.push("consecutiveBlankLines");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.consecutiveSpaces", "boolean")) {
		rules.push("consecutiveSpaces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.duplicateImports", "boolean")) {
		rules.push("duplicateImports");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.elseOnSameLine", "boolean")) {
		rules.push("elseOnSameLine");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.emptyBraces", "boolean")) {
		rules.push("emptyBraces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.enumNamespaces", "boolean")) {
		rules.push("enumNamespaces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.extensionAccessControl", "boolean")) {
		rules.push("extensionAccessControl");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.fileHeader", "boolean")) {
		rules.push("fileHeader");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.hoistPatternLet", "boolean")) {
		rules.push("hoistPatternLet");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.indent", "boolean")) {
		rules.push("indent");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.initCoderUnavailable", "boolean")) {
		rules.push("initCoderUnavailable");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.isEmpty", "boolean")) {
		rules.push("isEmpty");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.leadingDelimiters", "boolean")) {
		rules.push("leadingDelimiters");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.linebreakAtEndOfFile", "boolean")) {
		rules.push("linebreakAtEndOfFile");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.linebreaks", "boolean")) {
		rules.push("linebreaks");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.markTypes", "boolean")) {
		rules.push("markTypes");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.modifierOrder", "boolean")) {
		rules.push("modifierOrder");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.numberFormatting", "boolean")) {
		rules.push("numberFormatting");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.organizeDeclarations", "boolean")) {
		rules.push("organizeDeclarations");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.preferKeyPath", "boolean")) {
		rules.push("preferKeyPath");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantBackticks", "boolean")) {
		rules.push("redundantBackticks");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantBreak", "boolean")) {
		rules.push("redundantBreak");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantExtensionACL", "boolean")) {
		rules.push("redundantExtensionACL");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantFileprivate", "boolean")) {
		rules.push("redundantFileprivate");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantGet", "boolean")) {
		rules.push("redundantGet");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantInit", "boolean")) {
		rules.push("redundantInit");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantLet", "boolean")) {
		rules.push("redundantLet");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantLetError", "boolean")) {
		rules.push("redundantLetError");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantNilInit", "boolean")) {
		rules.push("redundantNilInit");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantObjc", "boolean")) {
		rules.push("redundantObjc");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantParens", "boolean")) {
		rules.push("redundantParens");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantPattern", "boolean")) {
		rules.push("redundantPattern");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantRawValues", "boolean")) {
		rules.push("redundantRawValues");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantReturn", "boolean")) {
		rules.push("redundantReturn");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantSelf", "boolean")) {
		rules.push("redundantSelf");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantType", "boolean")) {
		rules.push("redundantType");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.redundantVoidReturnType", "boolean")) {
		rules.push("redundantVoidReturnType");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.semicolons", "boolean")) {
		rules.push("semicolons");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.sortedImports", "boolean")) {
		rules.push("sortedImports");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.sortedSwitchCases", "boolean")) {
		rules.push("sortedSwitchCases");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundBraces", "boolean")) {
		rules.push("spaceAroundBraces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundBrackets", "boolean")) {
		rules.push("spaceAroundBrackets");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundComments", "boolean")) {
		rules.push("spaceAroundComments");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundGenerics", "boolean")) {
		rules.push("spaceAroundGenerics");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundOperators", "boolean")) {
		rules.push("spaceAroundOperators");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceAroundParens", "boolean")) {
		rules.push("spaceAroundParens");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceInsideBraces", "boolean")) {
		rules.push("spaceInsideBraces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceInsideBrackets", "boolean")) {
		rules.push("spaceInsideBrackets");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceInsideComments", "boolean")) {
		rules.push("spaceInsideComments");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceInsideGenerics", "boolean")) {
		rules.push("spaceInsideGenerics");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.spaceInsideParens", "boolean")) {
		rules.push("spaceInsideParens");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.strongOutlets", "boolean")) {
		rules.push("strongOutlets");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.strongifiedSelf", "boolean")) {
		rules.push("strongifiedSelf");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.todos", "boolean")) {
		rules.push("todos");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.trailingClosures", "boolean")) {
		rules.push("trailingClosures");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.trailingCommas", "boolean")) {
		rules.push("trailingCommas");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.trailingSpace", "boolean")) {
		rules.push("trailingSpace");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.typeSugar", "boolean")) {
		rules.push("typeSugar");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.unusedArguments", "boolean")) {
		rules.push("unusedArguments");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.void", "boolean")) {
		rules.push("void");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrap", "boolean")) {
		rules.push("wrap");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrapArguments", "boolean")) {
		rules.push("wrapArguments");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrapAttributes", "boolean")) {
		rules.push("wrapAttributes");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrapEnumCases", "boolean")) {
		rules.push("wrapEnumCases");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrapMultilineStatementBraces", "boolean")) {
		rules.push("wrapMultilineStatementBraces");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.wrapSwitchCases", "boolean")) {
		rules.push("wrapSwitchCases");
	}
	if (nova.config.get("computer.gareth.swiftformat.rule.yodaConditions", "boolean")) {
		rules.push("yodaConditions");
	}
	return rules.join(",");
}
function getOptions() {
	var options = [];
	var nowrapoperators = nova.config.get("computer.gareth.swiftformat.option.nowrapoperators", "string");
	if (nowrapoperators) {
		options.push("--nowrapoperators", nowrapoperators);
	}
	var header = nova.config.get("computer.gareth.swiftformat.option.header", "string");
	if (header) {
		options.push("--header", header);
	}
	var wraparguments = nova.config.get("computer.gareth.swiftformat.option.wraparguments", "string");
	if (wraparguments) {
		options.push("--wraparguments", wraparguments);
	}
	var organizetypes = nova.config.get("computer.gareth.swiftformat.option.organizetypes", "string");
	if (organizetypes) {
		options.push("--organizetypes", organizetypes);
	}
	var indent = nova.config.get("computer.gareth.swiftformat.option.indent", "string");
	if (indent) {
		options.push("--indent", indent);
	}
	var typeattributes = nova.config.get("computer.gareth.swiftformat.option.typeattributes", "string");
	if (typeattributes) {
		options.push("--typeattributes", typeattributes);
	}
	var groupedextension = nova.config.get("computer.gareth.swiftformat.option.groupedextension", "string");
	if (groupedextension) {
		options.push("--groupedextension", groupedextension);
	}
	var maxwidth = nova.config.get("computer.gareth.swiftformat.option.maxwidth", "string");
	if (maxwidth) {
		options.push("--maxwidth", maxwidth);
	}
	var indentcase = nova.config.get("computer.gareth.swiftformat.option.indentcase", "string");
	if (indentcase) {
		options.push("--indentcase", indentcase);
	}
	var classthreshold = nova.config.get("computer.gareth.swiftformat.option.classthreshold", "string");
	if (classthreshold) {
		options.push("--classthreshold", classthreshold);
	}
	var shortoptionals = nova.config.get("computer.gareth.swiftformat.option.shortoptionals", "string");
	if (shortoptionals) {
		options.push("--shortoptionals", shortoptionals);
	}
	var markextensions = nova.config.get("computer.gareth.swiftformat.option.markextensions", "string");
	if (markextensions) {
		options.push("--markextensions", markextensions);
	}
	var wrapconditions = nova.config.get("computer.gareth.swiftformat.option.wrapconditions", "string");
	if (wrapconditions) {
		options.push("--wrapconditions", wrapconditions);
	}
	var ifdef = nova.config.get("computer.gareth.swiftformat.option.ifdef", "string");
	if (ifdef) {
		options.push("--ifdef", ifdef);
	}
	var redundanttype = nova.config.get("computer.gareth.swiftformat.option.redundanttype", "string");
	if (redundanttype) {
		options.push("--redundanttype", redundanttype);
	}
	var smarttabs = nova.config.get("computer.gareth.swiftformat.option.smarttabs", "string");
	if (smarttabs) {
		options.push("--smarttabs", smarttabs);
	}
	var closingparen = nova.config.get("computer.gareth.swiftformat.option.closingparen", "string");
	if (closingparen) {
		options.push("--closingparen", closingparen);
	}
	var self = nova.config.get("computer.gareth.swiftformat.option.self", "string");
	if (self) {
		options.push("--self", self);
	}
	var operatorfunc = nova.config.get("computer.gareth.swiftformat.option.operatorfunc", "string");
	if (operatorfunc) {
		options.push("--operatorfunc", operatorfunc);
	}
	var voidtype = nova.config.get("computer.gareth.swiftformat.option.voidtype", "string");
	if (voidtype) {
		options.push("--voidtype", voidtype);
	}
	var ranges = nova.config.get("computer.gareth.swiftformat.option.ranges", "string");
	if (ranges) {
		options.push("--ranges", ranges);
	}
	var wrapreturntype = nova.config.get("computer.gareth.swiftformat.option.wrapreturntype", "string");
	if (wrapreturntype) {
		options.push("--wrapreturntype", wrapreturntype);
	}
	var structthreshold = nova.config.get("computer.gareth.swiftformat.option.structthreshold", "string");
	if (structthreshold) {
		options.push("--structthreshold", structthreshold);
	}
	var modifierorder = nova.config.get("computer.gareth.swiftformat.option.modifierorder", "string");
	if (modifierorder) {
		options.push("--modifierorder", modifierorder);
	}
	var typemark = nova.config.get("computer.gareth.swiftformat.option.typemark", "string");
	if (typemark) {
		options.push("--typemark", typemark);
	}
	var nevertrailing = nova.config.get("computer.gareth.swiftformat.option.nevertrailing", "string");
	if (nevertrailing) {
		options.push("--nevertrailing", nevertrailing);
	}
	var varattributes = nova.config.get("computer.gareth.swiftformat.option.varattributes", "string");
	if (varattributes) {
		options.push("--varattributes", varattributes);
	}
	var marktypes = nova.config.get("computer.gareth.swiftformat.option.marktypes", "string");
	if (marktypes) {
		options.push("--marktypes", marktypes);
	}
	var octalgrouping = nova.config.get("computer.gareth.swiftformat.option.octalgrouping", "string");
	if (octalgrouping) {
		options.push("--octalgrouping", octalgrouping);
	}
	var commas = nova.config.get("computer.gareth.swiftformat.option.commas", "string");
	if (commas) {
		options.push("--commas", commas);
	}
	var xcodeindentation = nova.config.get("computer.gareth.swiftformat.option.xcodeindentation", "string");
	if (xcodeindentation) {
		options.push("--xcodeindentation", xcodeindentation);
	}
	var patternlet = nova.config.get("computer.gareth.swiftformat.option.patternlet", "string");
	if (patternlet) {
		options.push("--patternlet", patternlet);
	}
	var assetliterals = nova.config.get("computer.gareth.swiftformat.option.assetliterals", "string");
	if (assetliterals) {
		options.push("--assetliterals", assetliterals);
	}
	var guardelse = nova.config.get("computer.gareth.swiftformat.option.guardelse", "string");
	if (guardelse) {
		options.push("--guardelse", guardelse);
	}
	var binarygrouping = nova.config.get("computer.gareth.swiftformat.option.binarygrouping", "string");
	if (binarygrouping) {
		options.push("--binarygrouping", binarygrouping);
	}
	var tabwidth = nova.config.get("computer.gareth.swiftformat.option.tabwidth", "string");
	if (tabwidth) {
		options.push("--tabwidth", tabwidth);
	}
	var emptybraces = nova.config.get("computer.gareth.swiftformat.option.emptybraces", "string");
	if (emptybraces) {
		options.push("--emptybraces", emptybraces);
	}
	var yodaswap = nova.config.get("computer.gareth.swiftformat.option.yodaswap", "string");
	if (yodaswap) {
		options.push("--yodaswap", yodaswap);
	}
	var fractiongrouping = nova.config.get("computer.gareth.swiftformat.option.fractiongrouping", "string");
	if (fractiongrouping) {
		options.push("--fractiongrouping", fractiongrouping);
	}
	var lifecycle = nova.config.get("computer.gareth.swiftformat.option.lifecycle", "string");
	if (lifecycle) {
		options.push("--lifecycle", lifecycle);
	}
	var trimwhitespace = nova.config.get("computer.gareth.swiftformat.option.trimwhitespace", "string");
	if (trimwhitespace) {
		options.push("--trimwhitespace", trimwhitespace);
	}
	var hexliteralcase = nova.config.get("computer.gareth.swiftformat.option.hexliteralcase", "string");
	if (hexliteralcase) {
		options.push("--hexliteralcase", hexliteralcase);
	}
	var selfrequired = nova.config.get("computer.gareth.swiftformat.option.selfrequired", "string");
	if (selfrequired) {
		options.push("--selfrequired", selfrequired);
	}
	var allman = nova.config.get("computer.gareth.swiftformat.option.allman", "string");
	if (allman) {
		options.push("--allman", allman);
	}
	var wrapcollections = nova.config.get("computer.gareth.swiftformat.option.wrapcollections", "string");
	if (wrapcollections) {
		options.push("--wrapcollections", wrapcollections);
	}
	var enumthreshold = nova.config.get("computer.gareth.swiftformat.option.enumthreshold", "string");
	if (enumthreshold) {
		options.push("--enumthreshold", enumthreshold);
	}
	var elseposition = nova.config.get("computer.gareth.swiftformat.option.elseposition", "string");
	if (elseposition) {
		options.push("--elseposition", elseposition);
	}
	var exponentgrouping = nova.config.get("computer.gareth.swiftformat.option.exponentgrouping", "string");
	if (exponentgrouping) {
		options.push("--exponentgrouping", exponentgrouping);
	}
	var importgrouping = nova.config.get("computer.gareth.swiftformat.option.importgrouping", "string");
	if (importgrouping) {
		options.push("--importgrouping", importgrouping);
	}
	var extensionacl = nova.config.get("computer.gareth.swiftformat.option.extensionacl", "string");
	if (extensionacl) {
		options.push("--extensionacl", extensionacl);
	}
	var categorymark = nova.config.get("computer.gareth.swiftformat.option.categorymark", "string");
	if (categorymark) {
		options.push("--categorymark", categorymark);
	}
	var hexgrouping = nova.config.get("computer.gareth.swiftformat.option.hexgrouping", "string");
	if (hexgrouping) {
		options.push("--hexgrouping", hexgrouping);
	}
	var beforemarks = nova.config.get("computer.gareth.swiftformat.option.beforemarks", "string");
	if (beforemarks) {
		options.push("--beforemarks", beforemarks);
	}
	var trailingclosures = nova.config.get("computer.gareth.swiftformat.option.trailingclosures", "string");
	if (trailingclosures) {
		options.push("--trailingclosures", trailingclosures);
	}
	var exponentcase = nova.config.get("computer.gareth.swiftformat.option.exponentcase", "string");
	if (exponentcase) {
		options.push("--exponentcase", exponentcase);
	}
	var funcattributes = nova.config.get("computer.gareth.swiftformat.option.funcattributes", "string");
	if (funcattributes) {
		options.push("--funcattributes", funcattributes);
	}
	var wrapparameters = nova.config.get("computer.gareth.swiftformat.option.wrapparameters", "string");
	if (wrapparameters) {
		options.push("--wrapparameters", wrapparameters);
	}
	var nospaceoperators = nova.config.get("computer.gareth.swiftformat.option.nospaceoperators", "string");
	if (nospaceoperators) {
		options.push("--nospaceoperators", nospaceoperators);
	}
	var extensionlength = nova.config.get("computer.gareth.swiftformat.option.extensionlength", "string");
	if (extensionlength) {
		options.push("--extensionlength", extensionlength);
	}
	var semicolons = nova.config.get("computer.gareth.swiftformat.option.semicolons", "string");
	if (semicolons) {
		options.push("--semicolons", semicolons);
	}
	var stripunusedargs = nova.config.get("computer.gareth.swiftformat.option.stripunusedargs", "string");
	if (stripunusedargs) {
		options.push("--stripunusedargs", stripunusedargs);
	}
	var linebreaks = nova.config.get("computer.gareth.swiftformat.option.linebreaks", "string");
	if (linebreaks) {
		options.push("--linebreaks", linebreaks);
	}
	var decimalgrouping = nova.config.get("computer.gareth.swiftformat.option.decimalgrouping", "string");
	if (decimalgrouping) {
		options.push("--decimalgrouping", decimalgrouping);
	}
	var extensionmark = nova.config.get("computer.gareth.swiftformat.option.extensionmark", "string");
	if (extensionmark) {
		options.push("--extensionmark", extensionmark);
	}
	return options;
}
module.exports = {
	"getRules": getRules,
	"getOptions": getOptions
};

// Expected outputs from the TapReporter for the commands run in CLI tests
module.exports = {
	"qunit":
`TAP version 13
ok 1 First > 1
ok 2 Second > 1
1..2
# pass 2
# skip 0
# todo 0
# fail 0`,

	"qunit 'glob/**/*-test.js'":
`TAP version 13
ok 1 A-Test > derp
ok 2 Nested-Test > herp
1..2
# pass 2
# skip 0
# todo 0
# fail 0`,

	"qunit single.js":
`TAP version 13
ok 1 Single > has a test
1..1
# pass 1
# skip 0
# todo 0
# fail 0`,

	"qunit single.js double.js":
`TAP version 13
ok 1 Double > has a test
ok 2 Double > has another test
ok 3 Single > has a test
1..3
# pass 3
# skip 0
# todo 0
# fail 0`,

	"qunit test":
`TAP version 13
ok 1 First > 1
ok 2 Second > 1
1..2
# pass 2
# skip 0
# todo 0
# fail 0`,

	"qunit test single.js 'glob/**/*-test.js'":
`TAP version 13
ok 1 A-Test > derp
ok 2 Nested-Test > herp
ok 3 Single > has a test
ok 4 First > 1
ok 5 Second > 1
1..5
# pass 5
# skip 0
# todo 0
# fail 0`
};

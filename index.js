// Code 1

describe("shout(string)", function() {
  it("receives one argument and returns it in all caps", function() {
    expect(shout("hello")).toEqual("HELLO");
  });
});

function shout(string) {
  return string.toUpperCase();
}

// Code 2

describe("whisper(string)", function() {
    it("receives one argument and returns it in all lowercase", function() {
        expect(whisper("HELLO")).toEqual("hello");
    });
});

function whisper(string) {
    return string.toLowerCase();
}

// Code 3

describe("logShout(string)", function() {
    it("takes a string argument and logs it in all caps using console.log()", function() {
        const spy = expect.spyOn(console, 'log').andCallThrough();

        logShout('hello');

        expect(spy).toHaveBeenCalledWith('HELLO');

        console.log.restore();
    });
});
function logShout(string) {
    console.log(shout(string));
}

// Code 4

describe('logWhisper(string)', function() {
    it('takes a string argument and logs it in all lowercase using console.log()', function() {
        const spy = expect.spyOn(console, 'log').andCallThrough();

        logWhisper('HELLO');

        expect(spy).toHaveBeenCalledWith('hello');

        console.log.restore();
    });
});
function logWhisper(string) {
    console.log(whisper(string));
}

// Code 5, 6 and 7

describe("sayHiToHeadphonedRoommate(string)", function() {
    it("returns 'I can't hear you!' if `string` is lowercase", function() {
        expect(sayHiToHeadphonedRoommate("hello")).toEqual("I can't hear you!");
    });
    it("returns 'YES INDEED!' if `string` is uppercase", function() {
        expect(sayHiToHeadphonedRoommate("HELLO")).toEqual("YES INDEED!");
    });
    it("returns 'I would love to!' if `string` is 'Let's have dinner together!'", function() {
        expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
            "I would love to!"
        );
    });
});
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else {
        return "I would love to!";
    }
}


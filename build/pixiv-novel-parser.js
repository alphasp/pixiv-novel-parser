(function (global) { var _inNode = 'process' in global, parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = peg$FAILED,
        peg$c2 = /^[^[]/,
        peg$c3 = { type: "class", value: "[^[]", description: "[^[]" },
        peg$c4 = function(chars) { return { type: 'text', val: string(chars) }; },
        peg$c5 = "[newpage]",
        peg$c6 = { type: "literal", value: "[newpage]", description: "\"[newpage]\"" },
        peg$c7 = null,
        peg$c8 = function() { return tagNewpage(); },
        peg$c9 = "[chapter:",
        peg$c10 = { type: "literal", value: "[chapter:", description: "\"[chapter:\"" },
        peg$c11 = "]",
        peg$c12 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c13 = function(title) { return tagChapter(title); },
        peg$c14 = "[pixivimage:",
        peg$c15 = { type: "literal", value: "[pixivimage:", description: "\"[pixivimage:\"" },
        peg$c16 = "-",
        peg$c17 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c18 = function(illustID, pageNumber) {
            return tagPixivimage(illustID, pageNumber && pageNumber[1]);
          },
        peg$c19 = "[jump:",
        peg$c20 = { type: "literal", value: "[jump:", description: "\"[jump:\"" },
        peg$c21 = function(pageNumber) { return tagJump(pageNumber); },
        peg$c22 = "[[jumpuri:",
        peg$c23 = { type: "literal", value: "[[jumpuri:", description: "\"[[jumpuri:\"" },
        peg$c24 = ">",
        peg$c25 = { type: "literal", value: ">", description: "\">\"" },
        peg$c26 = "]]",
        peg$c27 = { type: "literal", value: "]]", description: "\"]]\"" },
        peg$c28 = function(jumpuriTitle, uri) {
            return tagJumpuri(jumpuriTitle, uri);
          },
        peg$c29 = "[",
        peg$c30 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c31 = function() { return { type: 'text', val: '[' } },
        peg$c32 = /^[^\]]/,
        peg$c33 = { type: "class", value: "[^\\]]", description: "[^\\]]" },
        peg$c34 = function(title) { return string(title).trim(); },
        peg$c35 = /^[^>]/,
        peg$c36 = { type: "class", value: "[^>]", description: "[^>]" },
        peg$c37 = function(digits) { return string(digits); },
        peg$c38 = function(digits) { return parseInt(string(digits), 10); },
        peg$c39 = "http",
        peg$c40 = { type: "literal", value: "http", description: "\"http\"" },
        peg$c41 = "s",
        peg$c42 = { type: "literal", value: "s", description: "\"s\"" },
        peg$c43 = "://",
        peg$c44 = { type: "literal", value: "://", description: "\"://\"" },
        peg$c45 = function(uri) { return string(uri); },
        peg$c46 = "%",
        peg$c47 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c48 = /^[\-._~!$&'()*+,;=:\/@.?#]/,
        peg$c49 = { type: "class", value: "[\\-._~!$&'()*+,;=:\\/@.?#]", description: "[\\-._~!$&'()*+,;=:\\/@.?#]" },
        peg$c50 = /^[A-Z]/,
        peg$c51 = { type: "class", value: "[A-Z]", description: "[A-Z]" },
        peg$c52 = /^[a-z]/,
        peg$c53 = { type: "class", value: "[a-z]", description: "[a-z]" },
        peg$c54 = "0",
        peg$c55 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c56 = "1",
        peg$c57 = { type: "literal", value: "1", description: "\"1\"" },
        peg$c58 = /^[\x01-]/,
        peg$c59 = { type: "class", value: "[\\x01-]", description: "[\\x01-]" },
        peg$c60 = "\r",
        peg$c61 = { type: "literal", value: "\r", description: "\"\\r\"" },
        peg$c62 = /^[\0-\x1F]/,
        peg$c63 = { type: "class", value: "[\\0-\\x1F]", description: "[\\0-\\x1F]" },
        peg$c64 = "",
        peg$c65 = { type: "literal", value: "", description: "\"\"" },
        peg$c66 = /^[0-9]/,
        peg$c67 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c68 = /^["]/,
        peg$c69 = { type: "class", value: "[\"]", description: "[\"]" },
        peg$c70 = "A",
        peg$c71 = { type: "literal", value: "A", description: "\"A\"" },
        peg$c72 = "B",
        peg$c73 = { type: "literal", value: "B", description: "\"B\"" },
        peg$c74 = "C",
        peg$c75 = { type: "literal", value: "C", description: "\"C\"" },
        peg$c76 = "D",
        peg$c77 = { type: "literal", value: "D", description: "\"D\"" },
        peg$c78 = "E",
        peg$c79 = { type: "literal", value: "E", description: "\"E\"" },
        peg$c80 = "F",
        peg$c81 = { type: "literal", value: "F", description: "\"F\"" },
        peg$c82 = "\t",
        peg$c83 = { type: "literal", value: "\t", description: "\"\\t\"" },
        peg$c84 = "\n",
        peg$c85 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c86 = /^[\0-\xFF]/,
        peg$c87 = { type: "class", value: "[\\0-\\xFF]", description: "[\\0-\\xFF]" },
        peg$c88 = " ",
        peg$c89 = { type: "literal", value: " ", description: "\" \"" },
        peg$c90 = /^[!-~]/,
        peg$c91 = { type: "class", value: "[!-~]", description: "[!-~]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsenovel();

      return s0;
    }

    function peg$parsenovel() {
      var s0, s1;

      s0 = [];
      s1 = peg$parsetags();
      if (s1 === peg$FAILED) {
        s1 = peg$parsetext();
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsetags();
        if (s1 === peg$FAILED) {
          s1 = peg$parsetext();
        }
      }

      return s0;
    }

    function peg$parsetext() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c2.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c3); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c2.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c3); }
          }
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c4(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsetags() {
      var s0;

      s0 = peg$parsetagNewpage();
      if (s0 === peg$FAILED) {
        s0 = peg$parsetagChapter();
        if (s0 === peg$FAILED) {
          s0 = peg$parsetagPixivimage();
          if (s0 === peg$FAILED) {
            s0 = peg$parsetagJump();
            if (s0 === peg$FAILED) {
              s0 = peg$parsetagJumpuri();
              if (s0 === peg$FAILED) {
                s0 = peg$parsetagNone();
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsetagNewpage() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c5) {
        s1 = peg$c5;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseCRLF();
        if (s2 === peg$FAILED) {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c8();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetagChapter() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 9) === peg$c9) {
        s1 = peg$c9;
        peg$currPos += 9;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsechapterTitle();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c11;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c12); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c13(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetagPixivimage() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 12) === peg$c14) {
        s1 = peg$c14;
        peg$currPos += 12;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsenumeric();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 45) {
            s4 = peg$c16;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseinteger();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c1;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c1;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c7;
          }
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 93) {
              s4 = peg$c11;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c12); }
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c18(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetagJump() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseinteger();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s3 = peg$c11;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c12); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c21(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetagJumpuri() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 10) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 10;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsejumpuriTitle();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 62) {
            s3 = peg$c24;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c25); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseWSP();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parseWSP();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseURI();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseWSP();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseWSP();
                }
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c26) {
                    s7 = peg$c26;
                    peg$currPos += 2;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c27); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c28(s2, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c1;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c1;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c1;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsetagNone() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c29;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c30); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c31();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechapterTitle() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c32.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c33); }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c32.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c34(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsejumpuriTitle() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c35.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c36); }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c35.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c34(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsenumeric() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseDIGIT();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseDIGIT();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c37(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseinteger() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseDIGIT();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseDIGIT();
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c38(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseURI() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c39) {
        s2 = peg$c39;
        peg$currPos += 4;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 115) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
        if (s3 === peg$FAILED) {
          s3 = peg$c7;
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c43) {
            s4 = peg$c43;
            peg$currPos += 3;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseuri_chrs();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseuri_chrs();
            }
            if (s5 !== peg$FAILED) {
              s2 = [s2, s3, s4, s5];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c1;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c1;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c1;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c45(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseuri_chrs() {
      var s0, s1, s2, s3;

      s0 = peg$parseALPHA();
      if (s0 === peg$FAILED) {
        s0 = peg$parseDIGIT();
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 37) {
            s1 = peg$c46;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c47); }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseHEXDIG();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseHEXDIG();
              }
            } else {
              s2 = peg$c1;
            }
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
          if (s0 === peg$FAILED) {
            if (peg$c48.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c49); }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseALPHA() {
      var s0;

      if (peg$c50.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c52.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c53); }
        }
      }

      return s0;
    }

    function peg$parseBIT() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 48) {
        s0 = peg$c54;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 49) {
          s0 = peg$c56;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }

      return s0;
    }

    function peg$parseCHAR() {
      var s0;

      if (peg$c58.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }

      return s0;
    }

    function peg$parseCR() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c60;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }

      return s0;
    }

    function peg$parseCRLF() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseCR();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseLF();
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseCTL() {
      var s0;

      if (peg$c62.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c63); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 127) {
          s0 = peg$c64;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c65); }
        }
      }

      return s0;
    }

    function peg$parseDIGIT() {
      var s0;

      if (peg$c66.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c67); }
      }

      return s0;
    }

    function peg$parseDQUOTE() {
      var s0;

      if (peg$c68.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c69); }
      }

      return s0;
    }

    function peg$parseHEXDIG() {
      var s0;

      s0 = peg$parseDIGIT();
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 65) {
          s0 = peg$c70;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c71); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 66) {
            s0 = peg$c72;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c73); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 67) {
              s0 = peg$c74;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c75); }
            }
            if (s0 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 68) {
                s0 = peg$c76;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c77); }
              }
              if (s0 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 69) {
                  s0 = peg$c78;
                  peg$currPos++;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c79); }
                }
                if (s0 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 70) {
                    s0 = peg$c80;
                    peg$currPos++;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c81); }
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parseHTAB() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 9) {
        s0 = peg$c82;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c83); }
      }

      return s0;
    }

    function peg$parseLF() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 10) {
        s0 = peg$c84;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c85); }
      }

      return s0;
    }

    function peg$parseLWSP() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseWSP();
      if (s2 === peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseCRLF();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseWSP();
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c1;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c1;
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseWSP();
        if (s2 === peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parseCRLF();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseWSP();
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c1;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c1;
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseOCTET() {
      var s0;

      if (peg$c86.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c87); }
      }

      return s0;
    }

    function peg$parseSP() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c88;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c89); }
      }

      return s0;
    }

    function peg$parseVCHAR() {
      var s0;

      if (peg$c90.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c91); }
      }

      return s0;
    }

    function peg$parseWSP() {
      var s0;

      s0 = peg$parseSP();
      if (s0 === peg$FAILED) {
        s0 = peg$parseHTAB();
      }

      return s0;
    }


      function string(chars) {
        if (!chars) { return ''; }
        if (Object.prototype.toString.call(chars) === '[object String]') {
          return chars;
        }
        chars = chars.reduce(function (str, chr) {
          if (Object.prototype.toString.call(chr) === '[object Array]') {
            chr = string(chr);
          }
          return str + (chr || '').toString();
        }, '');
        return chars.replace(/\r?\n/g, '\n').
          replace(/[\s\u200c]/g, function (c) {
            if (c === '\n' || c === '\u3000') { return c; }
            return ' ';
          });
      }

      function tagNewpage() {
        return { type: 'tag', name: 'newpage' };
      }

      function tagChapter(title) {
        return { type: 'tag', name: 'chapter', title: title };
      }

      function tagPixivimage(illustID, pageNumber) {
        return {
          type: 'tag',
          name: 'pixivimage',
          illustID: illustID,
          pageNumber: pageNumber
        };
      }

      function tagJump(pageNumber) {
        return {
          type: 'tag',
          name: 'jump',
          pageNumber: pageNumber
        };
      }

      function tagJumpuri(title, uri) {
        return {
          type: 'tag',
          name: 'jumpuri',
          title: title,
          uri: string(uri)
        };
      }


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
if (_inNode) { module.exports = parser; } else { global.PixivNovelParser = global.PixivNovelParser || {}; global.PixivNovelParser.parser = parser; }
}((this || 0).self || global));
(function (global) {
 /* global PixivNovelParser */
 /* jshint maxstatements: 1000 */
'use strict';
var _inNode = 'process' in global;
var parser;
if (_inNode) {
  parser = require('./parser.peg.js');
} else {
  parser = PixivNovelParser.parser;
}

// function h(str) {
//   return str.toString().
//     replace('&', '&amp;').
//     replace('<', '&lt;').
//     replace('>', '&gt;').
//     replace('"', '&quot;').
//     replace('\'', '&apos;');
// }
//
// function hs(str) { return h(str).replace(/[\r\n]/g, ' '); }
//
// function a(href, textContent) {
//   return '<a href="' + hs(href) + '">' + h(textContent) + '</a>';
// }

/**
 * [newpage]
 * [chapter:.*]
 * [pixivimage:\d*(-\d*)?]
 * [jump:\d*]
 * [[jumpuri:.* > URL]]
 *
 * [ruby: rb > rt]
 * [emoji:.*]
 * [strong:.*]
 */
function Parser() {
  this.tree = [];
}

/**
 * @param {string} novel
 * @return {Object.<string,Object>[]}
 */
Parser.parse = function (novel) {
  try {
    return parser.parse(novel).reduce(function (tree, token) {
      var last = tree[tree.length - 1];

      if (token.type === 'text' && last && last.type === 'text') {
        last.val += token.val;
      } else {
        tree.push(token);
      }
      return tree;
    }, []);
  } catch (err) {
    console.error(err);
    return [{ type: 'text', val: novel }];
  }
};

/**
 * @param {string} novel
 * @return {Parser}
 */
Parser.prototype.parse = function (novel) {
  this.tree = Parser.parse(novel);
  return this;
};

/**
 * @return {string[]}
 */
// Parser.prototype.toHTML = function () {
//   var token, page = '',
//       i = 0,
//       iz = this.tree.length,
//       html = [];
//
//   function pixivimageHTML(token) {
//     return '<a href="' + hs(token.illustId + '/' + token.pageNumber) +  '"></a>';
//   }
//
//   for (; token = this.tree[i], i < iz; ++i) {
//     if (token.type === 'text') {
//       page += h(token.val).trim().replace(/\r?\n/g, '<br/>');
//       continue;
//     }
//     switch (token.name) {
//       case 'newpage':
//         html.push(page);
//         page = '';
//         break;
//       case 'chapter':
//         page += '<p class="chapter">' + h(token.title) + '</p>'; break;
//       case 'pixivimage':
//         page += pixivimageHTML(token); break;
//       case 'jump':
//         page += a('#' + token.pageNumber, token.pageNumber + 'ページへ'); break;
//       case 'jumpuri':
//         page += a(token.uri, token.title); break;
//     }
//   }
//   html.push(page);
//   return html;
// };

/**
 * @return {string}
 */
Parser.prototype.toJSON = function () {
  return JSON.stringify(this.tree);
};

if (_inNode) {
  module.exports = Parser;
} else {
  global.PixivNovelParser = global.PixivNovalPerser || {};
  global.PixivNovelParser.Parser = Parser;
}
}((this || 0).self || global));

(function (global) {
/* jshint maxstatements: 1000 */
'use strict';
var _inNode = 'process' in global;

if (_inNode) {
  module.exports = require('./parser');
} else {
  global.PixivNovelParser = global.PixivNovelParser || {};
}
}((this || 0).self || global));

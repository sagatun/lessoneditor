export function insertImg(md) {
  function addImgs(state) {
    let tokens = []; //output
    let Token = state.Token;

    // Opens a new img element with src and alt.
    function openImg(src, alt) {
      let t = new Token("img_open", "img", 1);
      t.block = true;
      t.attrSet("src", src);
      t.attrSet("alt", alt);
      return t;
    }

    /* Iterate through all tokens, if token contains "check" or
    "flag" as class name, insert corresponding img.*/
    for (let i = 0; i < state.tokens.length; i++) {
      let token = state.tokens[i];
      if (
        token.tag !== "section" &&
        token.attrs !== null &&
        token.attrs[0].includes("check")
      ) {
        tokens.push(token);
        tokens.push(
          openImg(
            "https://oppgaver.kidsakoder.no/CCV-assets/check.15ac74.svg",
            "check"
          )
        );
      } else if (
        token.tag !== "section" &&
        token.attrs !== null &&
        token.attrs[0].includes("flag")
      ) {
        tokens.push(token);
        tokens.push(
          openImg(
            "https://oppgaver.kidsakoder.no/CCV-assets/flag.4a58cd.svg",
            "flag"
          )
        );
      } else {
        tokens.push(token);
      }
    }
    state.tokens = tokens;
  }
  md.core.ruler.push("insert_img", addImgs);
}

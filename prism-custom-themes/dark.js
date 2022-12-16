module.exports = {
  plain: {
    color: "#ffffff",
    backgroundColor: "#070A1B",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(102, 217, 239)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(102, 216, 239)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(255, 121, 198)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(80, 250, 123)",
      },
    },
  ],
};

module.exports = {
  plain: {
    color: "#434155",
    backgroundColor: "var(--bt-code-block-background-color)",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(72, 118, 214)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(72, 118, 214)",
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
        color: "rgb(64, 63, 83)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(201, 103, 101)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(153, 76, 195)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(245, 149, 81)",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(80, 250, 123)",
      },
    },
  ],
};

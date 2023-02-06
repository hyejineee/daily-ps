const solution = () => {
  const data = {
    name: "노스페이스 롱패딩",
    type: "COMBINATION",
    selectType: "MULTI",
    price: 10000,
    labels: ["색상", "사이즈"],
    multiLevelOptions: [
      {
        label: "색상",
        value: "화이트",
        children: [
          {
            label: "사이즈",
            value: "S",
            addPrice: 5000,
            buyPrice: 10000,
            forcedSoldOut: false,
            children: [
              {
                value: 1,
                children: null,
              },
              {
                value: 2,
                children: null,
              },
            ],
          },
          {
            label: "사이즈",
            value: "M",
            addPrice: 10000,
            buyPrice: 15000,
            forcedSoldOut: false,
            children: null,
          },
          {
            label: "사이즈",
            value: "L",
            addPrice: 15000,
            buyPrice: 20000,
            forcedSoldOut: false,
            children: null,
          },
        ],
      },
      {
        label: "색상",
        value: "블랙",
        children: [
          {
            label: "사이즈",
            value: "S",
            addPrice: 5000,
            buyPrice: 10000,
            forcedSoldOut: false,
            children: null,
          },
          {
            label: "사이즈",
            value: "M",
            addPrice: 10000,
            buyPrice: 15000,
            forcedSoldOut: false,
            children: [
              {
                value: 1,
                children: null,
              },
              {
                value: 2,
                children: null,
              },
            ],
          },
          {
            label: "사이즈",
            value: "L",
            addPrice: 15000,
            buyPrice: 20000,
            forcedSoldOut: false,
            children: null,
          },
        ],
      },
      {
        label: "색상",
        value: "민트",
        children: [
          {
            label: "사이즈",
            value: "S",
            addPrice: 5000,
            buyPrice: 10000,
            forcedSoldOut: false,
            children: null,
          },
          {
            label: "사이즈",
            value: "M",
            addPrice: 10000,
            buyPrice: 15000,
            forcedSoldOut: false,
            children: null,
          },
          {
            label: "사이즈",
            value: "L",
            addPrice: 15000,
            buyPrice: 20000,
            forcedSoldOut: false,
            children: null,
          },
        ],
      },
    ],
  };

  const map = new Map();

  data.multiLevelOptions.forEach((e) => {
    map.set(e.value, { ...e, children: recursive(e) });
  });

  console.log("result", map);
  console.log("test", map.get("화이트").children.get("S"));

  const selectedColor = "화이트";
  console.log("option1 ", map.keys());
  console.log("option2 ", map.get(selectedColor).children.keys());
};

const recursive = (obj) => {
  const optionsMap = new Map();
  if (obj.children) {
    for (const option of obj.children) {
      optionsMap.set(option.value, { ...option, children: recursive(option) });
    }
  }
  return optionsMap;
};

test(`롤 케이크 자르기`, () => {
  expect(solution()).toEqual(2);
  expect(solution([1, 2, 3, 1, 4])).toEqual(0);
});


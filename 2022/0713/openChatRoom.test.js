const solution = (record) => {
  const actions = [];
  const nicNames = {};

  record.forEach((e) => {
    const [action, uid, nic] = e.split(" ");
    actions.push([action, uid]);
    if (nic) nicNames[uid] = nic;
  });

  const result = [];
  actions.forEach(([action, uid]) => {
    switch (action) {
      case "Enter":
        result.push(`${nicNames[uid]}님이 들어왔습니다.`);
        break;
      case "Leave":
        result.push(`${nicNames[uid]}님이 나갔습니다.`);
        break;
    }
  });

  console.log(actions);
  console.log(nicNames);

  return result;
};

test(`오픈채팅방`, () => {
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan",
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다.",
  ]);
});

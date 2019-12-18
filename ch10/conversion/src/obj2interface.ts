interface GroupUpper {
    name: string;
}

let groupSub = { name: 'TypeScript group', id: 1 };

let groupUpper: GroupUpper;
groupUpper = groupSub;

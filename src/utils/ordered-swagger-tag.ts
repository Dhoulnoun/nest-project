enum Tags {
  BankAccounts = 1,
  BankAccountTypes,
  Cats,
}
export function getTag(str: string | number | Tags) {
  let tagName, tagValue;
  if (typeof str === 'number') {
    tagName = Tags[str];
    tagValue = Tags[tagName];
  } else {
    tagValue = Tags[str];
    tagName = Tags[tagValue];
  }
  return `${tagValue}) ${tagName}`;
}

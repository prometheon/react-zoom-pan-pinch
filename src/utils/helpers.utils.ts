export const isExcludedNode = (
  node: HTMLElement,
  excluded: string[],
): boolean => {
  const targetTagName = node.tagName.toUpperCase();
  console.log('rzpp', targetTagName);
  const isExcludedTag = excluded.find(
    (tag) => tag.toUpperCase() === targetTagName,
  );
    console.log('anything')
  if (isExcludedTag) return true;

  const isExcludedClassName = excluded.find((className) =>
    node.classList.contains(className),
  );

  if (isExcludedClassName) return true;

  let elem = node as HTMLElement;
  let isExcludedParentClass;

  while(elem.tagName.toUpperCase() !== 'BODY') {
      console.log('rzpp classes', elem.classList)
    isExcludedParentClass = excluded.find((className) =>
      elem.classList.contains(className),
    );

    if (isExcludedParentClass) return true;
    elem = elem.parentNode as HTMLElement;
  }

  return false;
};

export const cancelTimeout = (
  timeout: ReturnType<typeof setTimeout> | null,
): void => {
  if (timeout) {
    clearTimeout(timeout);
  }
};

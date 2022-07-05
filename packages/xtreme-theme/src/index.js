const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\xtreme-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "xtreme-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};

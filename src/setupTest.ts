import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest-extended";

// configuration for React 18
// see: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

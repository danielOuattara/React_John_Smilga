import ThemeContextProvider, { useThemeContext } from "./Context";

export default function ParentComponent() {
  return (
    <ThemeContextProvider>
      <Component />
    </ThemeContextProvider>
  );
}

//-------------------

export function Component() {
  const context = useThemeContext();
  console.log("context = ", context);
  return (
    <div>
      <h2>random component</h2>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          context.setTheme("dark");
        }}
        className="btn btn-center"
      >
        toggle theme
      </button>
    </div>
  );
}

/* Below: how to use in App.tsx */

/* 
import Component from "./06-context";

export default function App() {
  return (
    <main>
      <Component />
    </main>
  );
}

*/

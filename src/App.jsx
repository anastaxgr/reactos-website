//custom hooks
import useTheme from "@hooks/useTheme";

import ErrorScreen from "./components/ErrorScreen";
// components
import StatusBar from "@compo/Topbar/StatusBar";
import Background from "@compo/Background";
import IconsList from "@compo/Desktop/IconsList";
import ContextMenu from "@compo/Menu/ContextMenu";
import AppsList from "./components/AppsList";


function App() {
  const { darkTheme, toggleDarkTheme } = useTheme();
  const modeLabel = darkTheme ? "Disable" : "Enable";

  const menuOptions = [
    {
      label: modeLabel + " Dark Mode",
      action: () => toggleDarkTheme(!darkTheme),
    },
    { label: "Change Background", action: () => alert("Deleted!") },
    { label: "Reset Icons Position", action: () => alert("Deleted!") },
  ];



  return (
    <>

      <StatusBar />
      <Background />
      <IconsList />
     
      <AppsList />
      <ErrorScreen />


      <ContextMenu options={menuOptions} />

    </>
  );
}

export default App;

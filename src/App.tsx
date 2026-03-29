import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const OceanEdge = lazy(() => import("./components/projects/OceanEdge"));
const PawFeet = lazy(() => import("./components/projects/PawFeet"));
const Vellora = lazy(() => import("./components/projects/Vellora"));
const ZigMa = lazy(() => import("./components/projects/ZigMa"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  // If user is on a project route, render that project page instead of the main container
  if (path.startsWith("/projects/oceanedge")) {
    return (
      <LoadingProvider>
        <Suspense>
          <OceanEdge />
        </Suspense>
      </LoadingProvider>
    );
  }

  if (path.startsWith("/projects/pawfeet")) {
    return (
      <LoadingProvider>
        <Suspense>
          <PawFeet />
        </Suspense>
      </LoadingProvider>
    );
  }

  if (path.startsWith("/projects/vellora")) {
    return (
      <LoadingProvider>
        <Suspense>
          <Vellora />
        </Suspense>
      </LoadingProvider>
    );
  }

  if (path.startsWith("/projects/zigma")) {
    return (
      <LoadingProvider>
        <Suspense>
          <ZigMa />
        </Suspense>
      </LoadingProvider>
    );
  }

  return (
    <LoadingProvider>
      <Suspense>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;

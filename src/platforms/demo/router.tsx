import { Button, Dropdown, Layout, Nav, Navbar } from "@/components";
import { useEffect, useState, type ComponentType } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Define route type
interface RouteConfig<T = unknown> {
  path: string;
  element: ComponentType<T>; // or React.FC<T>
}

// Dynamic import with Vite
const pages = import.meta.glob<{ default: RouteConfig[] }>(
  "./**/*_subrouter.tsx",
  { eager: true }
);

// Flatten and collect route configs
const routes: RouteConfig[] = Object.values(pages).flatMap(
  (mod) => mod.default || []
);

const DocRouter = () => {
  const themes = ["onward", "onward-dark"];

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "onward"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        background="base"
        className="!shadow-none border-b border-base-300"
      >
        <Navbar.Brand>
          <div className="text-xl">Onward</div>
        </Navbar.Brand>
        <Navbar.Actions>
          <Dropdown
            value={theme}
            onChange={setTheme}
            trigger={
              <Button className="capitalize ">
                {theme?.replace("-", " ")}
              </Button>
            }
            position="end"
            contentClassName="!w-xs"
          >
            {themes.map((t) => (
              <Dropdown.Item value={t} selected={theme} onSelect={setTheme}>
                {t.replace("-", " ").charAt(0).toUpperCase() + t.slice(1)}
              </Dropdown.Item>
            ))}
          </Dropdown>
        </Navbar.Actions>
      </Navbar>
      <Layout.Wrapper className="!h-[calc(100vh-64px)]">
        <Layout.Sidebar className="!h-[calc(100vh-64px)]">
          <Nav.Sidebar />
        </Layout.Sidebar>
        <Layout.Body className="!h-[calc(100vh-64px)]">
          <div className="w-2/3">
            <Routes>
              {routes.map((r, i) => (
                <Route key={i} path={r.path} element={<r.element />} />
              ))}
              <Route path="*" element={<Navigate to="/docs" replace />} />
            </Routes>
          </div>
        </Layout.Body>
      </Layout.Wrapper>
    </>
  );
};

export default DocRouter;

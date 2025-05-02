import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useRef } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { style: { padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "sans-serif" }, children: [
    /* @__PURE__ */ jsxs("header", { style: { textAlign: "center", marginBottom: "30px" }, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://media.licdn.com/dms/image/v2/D5603AQEpfHEd0-pRLA/profile-displayphoto-shrink_200_200/B56ZSmgev2GoAY-/0/1737960320741?e=1751500800&v=beta&t=cQUKM4UxsHA9WNQKiOXfp_LhTaeC07sf7xuhD2RRVyY",
          alt: "Portfolio Owner",
          style: { width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", marginBottom: "10px", border: "3px solid green" }
        }
      ),
      /* @__PURE__ */ jsx("h1", { style: { color: "green" }, children: "Your Name" }),
      " "
    ] }),
    /* @__PURE__ */ jsxs("section", { style: { marginBottom: "30px" }, children: [
      /* @__PURE__ */ jsx("h2", { style: { color: "green" }, children: "About Me" }),
      " ",
      /* @__PURE__ */ jsx("p", { children: "This is a brief description about myself. I am passionate about [Your Field/Interests] and have experience in [Key Skills]. I enjoy solving complex problems and creating innovative solutions." })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { style: { color: "green" }, children: "Experience" }),
      " ",
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px", borderLeft: "3px solid green", paddingLeft: "15px" }, children: [
        " ",
        /* @__PURE__ */ jsx("h3", { style: { color: "green" }, children: "Current Job Title - Company Name" }),
        " ",
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Month Year - Present" }) }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Responsibility or achievement 1." }),
          /* @__PURE__ */ jsx("li", { children: "Responsibility or achievement 2." }),
          /* @__PURE__ */ jsx("li", { children: "Key project or contribution." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "20px", borderLeft: "3px solid green", paddingLeft: "15px" }, children: [
        " ",
        /* @__PURE__ */ jsx("h3", { style: { color: "green" }, children: "Previous Job Title - Previous Company Name" }),
        " ",
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Month Year - Month Year" }) }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: "Responsibility or achievement 1." }),
          /* @__PURE__ */ jsx("li", { children: "Responsibility or achievement 2." })
        ] })
      ] })
    ] })
  ] });
}
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const Box = ({ value }) => {
  const p1 = value / 60 * 100;
  const p2 = 100 - p1;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "time-input",
      style: {
        borderRightWidth: "12px",
        // Define border width
        borderRightStyle: "solid",
        // Define border style
        borderImageSource: `linear-gradient(to top, rgb(0, 100, 42) ${p1}%, #abc ${p2}%)`,
        // Apply gradient as border image source
        borderImageSlice: 1,
        // Use the full gradient
        borderRightColor: "transparent"
        // Make the base border color transparent or set a fallback
      },
      children: value
    }
  );
};
function Time({ time }) {
  const hour = Math.floor(Number(time) / 3600);
  const min = Math.floor(Number(time) / 60);
  const sec = Number(time) % 60;
  return /* @__PURE__ */ jsxs("div", { className: "clock", children: [
    /* @__PURE__ */ jsx(Box, { value: hour, className: "time-input" }),
    " ",
    /* @__PURE__ */ jsx(Box, { value: min, className: "time-input" }),
    " ",
    /* @__PURE__ */ jsx(Box, { value: sec, className: "time-input" })
  ] });
}
const Timmer = withComponentProps(function Timmer2() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const startStopTimer = () => {
    if (!isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1e3);
    } else {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    }
    setIsRunning(!isRunning);
  };
  const resetTimmer = () => {
    setTime(0);
    setIsRunning(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };
  const code = time / 60;
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col items-center justify-center h-screen timer",
    style: {
      "background": `linear-gradient(to bottom, rgb(208, 108, 179) ${code}%, rgb(95, 160, 141) 50%)`
    },
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-7xl font-bold mb-10",
      children: "TIMER"
    }), /* @__PURE__ */ jsx(Time, {
      time
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("button", {
        className: !isRunning ? "start-button" : "stop-button",
        onClick: startStopTimer,
        children: isRunning ? "Stop" : "Start"
      }), " ", /* @__PURE__ */ jsx("button", {
        onClick: resetTimmer,
        disabled: !isRunning,
        className: "reset-button",
        children: "Reset"
      })]
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Timmer
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-B8hJqc04.js", "imports": ["/assets/chunk-AYJ5UCUI-BJpQ5qTT.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DQ8q41rL.js", "imports": ["/assets/chunk-AYJ5UCUI-BJpQ5qTT.js", "/assets/with-props-BurUXKPG.js"], "css": ["/assets/root-cf0dozSu.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Y3Q4PNpB.js", "imports": ["/assets/with-props-BurUXKPG.js", "/assets/chunk-AYJ5UCUI-BJpQ5qTT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Timmer": { "id": "routes/Timmer", "parentId": "root", "path": "timer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/Timmer-OgNqKDdZ.js", "imports": ["/assets/with-props-BurUXKPG.js", "/assets/chunk-AYJ5UCUI-BJpQ5qTT.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-c7a9aa1d.js", "version": "c7a9aa1d", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/Timmer": {
    id: "routes/Timmer",
    parentId: "root",
    path: "timer",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};

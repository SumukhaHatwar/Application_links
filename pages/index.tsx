import React from "react";

type EnvKey = "dev" | "qa" | "hotfix" | "prod" | "authoring" | "preview";

type AppLink = {
  name: string;
} & {
  [key in EnvKey]?: string | string[];
};

const appLinks: AppLink[] = [
  {
    name: "Prostore",
    prod: "https://www.resideo.com/us/en/pro/pro-store",
    hotfix: "https://www.hotfix.rde.resideo.com/us/en/pro/pro-store",
    qa: "https://qa2.resideo.com/us/en/pro/pro-store",
  },
  {
    name: "Prostore-Vercel",
    prod: "https://prostore-prod2.vercel.app/us/en/pro",
    hotfix: "http://prostore-hotfix.vercel.app/us/en/pro",
    qa: "https://prostore-qa.vercel.app/us/en/pro",
    dev: "https://prostore-dev.vercel.app/us/en/pro",
  },
  {
    name: "Resideo",
    prod: "https://www.resideo.com/us/en",
    hotfix: "https://www.hotfix.rde.resideo.com/us/en",
    qa: [
      "https://qwww.r3.rde.resideo.com/us/en/",
      "https://www.r3.rde.resideo.com/us/en/",
    ],
    authoring: "https://authoring.resideo.com/us/en",
    preview: "https://preview.resideo.com/us/en",
  },
  {
    name: "HoneywellHome",
    prod: "https://www.honeywellhome.com/us/en",
    hotfix: "https://www.hotfix.honeywellhome.com/us/en",
    qa: "",
    authoring: "https://authoring.honeywellhome.com/us/en",
    preview: "https://preview.honeywellhome.com/us/en",
  },
  {
    name: "Firstalert",
    prod: "https://www.firstalert.com/us/en/",
    hotfix: "https://www.hotfix.firstalert.com/us/en/",
    qa: "https://qa.firstalert.com/us/en",
  },
  {
    name: "Firstalert-Vercel",
    prod: [
      "https://02d917pe-firstalert-prod-slota.vercel.app/en-us/",
      "https://02d917pe-firstalert-prod-slotb.vercel.app/en-us/",
      "https://firstalert-prod-preview.vercel.app/us/en/",
    ],
    hotfix: [
      "https://firstalert-hotfix-slota.vercel.app/en-us/",
      "https://firstalert-hotfix-slotb.vercel.app/en-us/",
      "https://firstalert-hotfix-preview.vercel.app/en-us/",
    ],
    qa: "https://firstalert-qa.vercel.app/us/en/",
    dev: "https://firstalert-dev.vercel.app/us/en",
  },
  {
    name: "Firstalert-CA",
    prod: "https://www.firstalert.com/ca/en/",
    hotfix: "https://www.hotfix.firstalert.com/ca/en/",
    authoring: "https://authoring.firstalert.com/ca/en",
  },
];

const envs: EnvKey[] = ["dev", "qa", "hotfix", "prod", "authoring", "preview"];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Application Links</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-900 text-left">
              <th className="px-4 py-2 font-semibold text-sm ">APP</th>
              {envs.map((env) => (
                <th
                  key={env}
                  className="px-4 py-2 font-semibold text-sm uppercase"
                >
                  {env}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {appLinks.map((app, index) => (
              <tr
                key={app.name}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 font-semibold text-gray-900">
                  {app.name}
                </td>
                {envs.map((env) => (
                  <td key={env} className="px-4 py-2 text-blue-600 text-sm">
                    {app[env] ? (
                      Array.isArray(app[env]) ? (
                        (app[env] as string[]).map((url, idx) => (
                          <div key={idx}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline block"
                            >
                              {env.charAt(0).toUpperCase() + env.slice(1)}{" "}
                              {idx + 1}
                            </a>
                          </div>
                        ))
                      ) : (
                        <a
                          href={app[env] as string}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {env.charAt(0).toUpperCase() + env.slice(1)}
                        </a>
                      )
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

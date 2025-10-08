import { WorkunitsServiceEx } from "@hpcc-js/comms";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const wsWorkunits = new WorkunitsServiceEx({
    baseUrl: process.env.HPCC_BASE_URL || "https://play.hpccsystems.com:18010",
    userID: process.env.HPCC_USER_ID || "gordon",
    password: process.env.HPCC_PASSWORD || ""
});

async function fetchWorkunit(wuid: string) {
    const response = await wsWorkunits.WUInfo({
        Wuid: wuid,
        TruncateEclTo64k: false,
        IncludeExceptions: true,
        IncludeGraphs: true,
        IncludeSourceFiles: true,
        IncludeResults: true,
        IncludeVariables: true,
        IncludeTimers: true,
        IncludeDebugValues: true,
        IncludeApplicationValues: true,
        IncludeWorkflows: true,
        IncludeXmlSchemas: true,
        SuppressResultSchemas: false,
        IncludeResultsViewNames: true,
        IncludeResourceURLs: true,
        IncludeAllowedClusters: true,
        IncludeTotalClusterTime: true
    });
    return response.Workunit;
}

async function fetchWorkunits() {
    const response = await wsWorkunits.WUQuery({});
    return response.Workunits.ECLWorkunit;
}

const wus = await fetchWorkunits();
console.log(wus);

console.log("--------------------");

const wu = await fetchWorkunit(wus[0].Wuid);
console.log(JSON.stringify(wu, null, 2));

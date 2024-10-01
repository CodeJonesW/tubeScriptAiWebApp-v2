export async function onRequest(context) {
  console.log("GOALS", context);

  // const requestUrl = new URL(context.request.url);
  // const pathname = requestUrl.pathname; // Extract the path portion of the URL

  // // Check if the request is local or remote
  // const isLocal = pathname.startsWith("/api/goals");

  // const workerUrl = isLocal
  //   ? "http://localhost:8787"
  //   : "https://tube-script-ai-worker.williamjonescodes.workers.dev";

  // // Extract the goalId from the URL
  // const goalId = pathname.split("/").pop();
  // console.log("Goal ID", goalId);

  // const url = `${workerUrl}/api/goals/${goalId}`;

  // const init = {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: context.request.headers.get("authorization"),
  //   },
  // };
  // console.log("Sending request to", url, init);

  // try {
  //   const response = await fetch(url, init);
  //   const data = await response.json();
  //   return new Response(JSON.stringify(data), {
  //     status: response.status,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // } catch (error) {
  //   console.error("Error fetching goal:", error);
  //   return new Response(JSON.stringify({ error: "Failed to fetch goal" }), {
  //     status: 500,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }
}

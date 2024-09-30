export async function onRequest(context) {
  console.log("Login user", context);
  const isLocal = context.request.url === "http://localhost:8788/api/login";
  const workerUrl = isLocal
    ? "http://localhost:8787"
    : "https://tube-script-ai-worker.williamjonescodes.workers.dev";
  const url = `${workerUrl}/api/login`;

  const requestBody = await context.request.json();
  const { email, password } = requestBody;
  console.log("Request body", requestBody);

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Missing email or password" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-email": email,
      "x-password": password,
    },
  };
  console.log("Sending request to", url, init);

  try {
    const response = await fetch(url, init);
    console.log("Received response", response);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to register user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

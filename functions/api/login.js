export async function onRequest(context) {
  console.log("Login user", context);
  // Determine if running locally
  const isLocal = context.env.NODE_ENV === "development";

  // Set the appropriate worker URL
  const workerUrl = isLocal ? "http://localhost:8787" : context.env.WORKER_URL;

  const url = `${workerUrl}/login`;

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
    return new Response(JSON.stringify({ error: "Failed to register user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

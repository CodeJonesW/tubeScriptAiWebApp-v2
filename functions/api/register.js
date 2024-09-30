export async function onRequest(context) {
  console.log("Registering user", context);
  const isLocal = context.env.NODE_ENV === "development";

  const workerUrl = isLocal ? "http://localhost:8787" : context.env.WORKER_URL;
  const url = `http://${workerUrl}/api/register`;

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
